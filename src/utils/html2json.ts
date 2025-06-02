import { HTMLParser } from "./htmlparser";

// const DEBUG = true
// const debug = DEBUG ? console.log.bind(console) : function () {}
//@ts-ignore
function q(v) {
  return `"${v}"`;
}

function removeDOCTYPE(html: string) {
  return html
    .replace(/<\?xml.*\?>\n/, "")
    .replace(/<!doctype.*\>\n/, "")
    .replace(/<!DOCTYPE.*\>\n/, "");
}

export const html2json = (html: string) => {
  html = removeDOCTYPE(html);
  //@ts-ignore
  const bufArray = [];
  const results = {
    node: "root",
    child: [],
  };
  HTMLParser(html, {
    start: function (tag: string, attrs: any[], unary: any) {
      //debug(tag, attrs, unary)
      // node for this element
      let node = {
        node: "element",
        tag: tag,
      };
      if (attrs.length !== 0) {
        // @ts-ignore
        node.attr = attrs.reduce(function (pre, attr) {
          let name: string = attr.name;
          let value: any = attr.value;
          //let flat: boolean = true

          // has multi attributes
          // make it array of attribute
          if (value.match(/ /)) {
            if (
              !["title", "transform", "viewBox", "widget"].includes(attr.name)
            ) {
              value = value.split(" ");
              //flat = false
            }
            //console.log(flat, attr.name, attr.value)
          }

          // if attr already exists
          // merge it
          if (pre[name]) {
            if (Array.isArray(pre[name])) {
              // already array, push to last
              pre[name].push(value);
            } else {
              // single value, make it array
              pre[name] = [pre[name], value];
            }
          } else {
            // not exist, put it
            pre[name] = value;
          }

          return pre;
        }, {});
      }
      if (unary) {
        // if this tag dosen't have end tag
        // like <img src="hoge.png"/>
        // add to parents
        //@ts-ignore
        const parent = bufArray[0] || results;
        if (parent.child === undefined) {
          parent.child = [];
        }
        parent.child.push(node);
      } else {
        bufArray.unshift(node);
      }
    },
    end: function (tag: any) {
      //debug(tag)
      // merge into parent tag
      //@ts-ignore
      const node = bufArray.shift();
      if (node.tag !== tag) console.error("invalid state: mismatch end tag");

      if (bufArray.length === 0) {
        //@ts-ignore
        results.child.push(node);
      } else {
        //@ts-ignore
        const parent = bufArray[0];
        if (parent.child === undefined) {
          parent.child = [];
        }
        parent.child.push(node);
      }
    },
    //@ts-ignore
    chars: function (text) {
      //debug(text)
      let node = {
        node: "text",
        text: text,
      };
      if (bufArray.length === 0) {
        //@ts-ignore
        results.child.push(node);
      } else {
        //@ts-ignore
        const parent = bufArray[0];
        if (parent.child === undefined) {
          parent.child = [];
        }
        parent.child.push(node);
      }
    },
    //@ts-ignore
    comment: function (text) {
      //debug(text)
      const node = {
        node: "comment",
        text: text,
      };
      //@ts-ignore
      const parent = bufArray[0];
      if (parent.child === undefined) {
        parent.child = [];
      }
      parent.child.push(node);
    },
  });
  return results;
};

export const json2html = (json: any) => {
  // Empty Elements - HTML 4.01
  const empty = [
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "link",
    "meta",
    "param",
    "embed",
  ];

  let child = "";
  if (json.child) {
    child = json.child
      //@ts-ignore
      .map(function (c) {
        return json2html(c);
      })
      .join("");
  }

  let attr: string = "";
  if (json.attr) {
    attr = Object.keys(json.attr)
      .map(function (key) {
        let value = json.attr[key];
        if (Array.isArray(value)) value = value.join(" ");
        return `${key}=${q(value)}`;
      })
      .join(" ");
    if (attr !== "") attr = ` ${attr}`;
  }

  if (json.node === "element") {
    let tag: string = json.tag;
    if (empty.indexOf(tag) > -1) {
      // empty element
      return `<${json.tag}${attr}/>`;
    }

    // non empty element
    const open = `<${json.tag}${attr}>`;
    const close = `</${json.tag}>`;
    return `${open}${child}${close}`;
  }

  if (json.node === "text") {
    return json.text;
  }

  if (json.node === "comment") {
    return `<!-- ${json.text} -->`;
  }

  if (json.node === "root") {
    return child;
  }
};
