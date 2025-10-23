var h = /* @__PURE__ */ ((e) => (e.CARDS = "cards", e.CLOUD = "cloud", e.DASHBOARD = "dashboard", e.DASHBOARDS = "dashboards", e.IMAGES = "images", e.MESSAGES = "messages", e.PREFERENCE = "preference", e.PREFERENCES = "preferences", e.PRESENTATION = "presentation", e.PRESENTATIONS = "presentations", e.SERIES = "series", e.SLIDE = "slide", e.SLIDES = "slides", e.TOPICS = "topics", e.WIDGET = "widget", e.WIDGETS = "widgets", e))(h || {}), g = /* @__PURE__ */ ((e) => (e.API = "color:white;background-color:grey;padding:0 4px 0 4px;border-radius:5px;", e.APP = "color:white;background-color:navy;padding:0 4px 0 4px;border-radius:5px;", e.BROADCAST = "color:navy;background-color:orange;padding:0 4px 0 4px;border-radius:5px;", e.CLOUD = "color:purple;background-color:mistyrose;padding:0 4px 0 4px;border-radius:5px;", e.DATA = "color:grey;background-color:lightskyblue;padding:0 4px 0 4px;border-radius:5px;", e.ERROR = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", e.GET_DATA = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", e.HIDE = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", e.KO = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", e.MESSAGES = "color:white;background-color:darkslateblue;padding:0 4px 0 4px;border-radius:5px;", e.NO_UPDATES = "color:grey;border:1px solid grey;padding:0 4px 0 4px;border-radius:5px;", e.NONE = "color:transparent;background-color:transparent;", e.OK = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", e.PRESENTATION = "color:white;background-color:darkred;padding:0 4px 0 4px;border-radius:5px;", e.SERIES = "color:purple;background-color:thistle;padding:0 4px 0 4px;border-radius:5px;", e.SLIDE = "color:black;background-color:yellow;padding:0 4px 0 4px;border-radius:5px;", e.STORAGE = "color:black;background-color:cyan;padding:0 4px 0 4px;border-radius:5px;", e.SUBSCRIBE = "color:white;background-color:dodgerblue;padding:0 4px 0 4px;border-radius:5px;", e.WIDGET = "color:black;background-color:lemonchiffon;padding:0 4px 0 4px;border-radius:5px;", e.WS = "color:white;background-color:green;padding:0 4px 0 4px;border-radius:5px;", e))(g || {}), v = /* @__PURE__ */ ((e) => (e.ADD_SLIDE = "addSlide", e.APP_READY = "appReady", e.API_UPDATE = "apiUpdate", e.BACKGROUND_UPDATE = "backgroundUpdate", e.BUILDER_PREVIEW = "builderPreview", e.COMPONENT_UPDATE = "componentUpdate", e.APPROVE_MESSAGE = "approveMessage", e.CHANNEL = "channel", e.CLEAN_MESSAGES = "cleanMessages", e.CLOSE_BUILDER_DIALOG = "closeBuilderDialog", e.CLOSE_BUILDER_MODAL = "closeBuilderModal", e.CLOSE_MODAL = "closeModal", e.COLOR_UPDATE = "colorUpdate", e.COMPONENT_INDEX = "componentIndex", e.CSS_SET = "setCss", e.CSS_STORE = "storeCss", e.DASHBOARD_LOAD = "loadDashboard", e.DASHBOARD_STORE = "storeDashboard", e.DASHBOARD_UPDATED = "dashboardUpdated", e.ERROR = "error", e.HIDE_MESSAGE = "hideMessage", e.HIDE_LABELS = "hideLabels", e.IMAGE_GET = "getImage", e.IMAGE_SET = "setImage", e.IMAGE_STORED = "imageStored", e.LAUPPUT_UPDATE = "layoutUpdate", e.PREV_SLIDE = "prevSlide", e.RELOAD_PRESENTATION = "reloadPresentation", e.STAR_MESSAGE = "starMessage", e.GOTO_SLIDE = "gotoSlide", e.NEXT_SLIDE = "nextSlide", e.PREFERENCE_LOAD = "loadPreference", e.PREFERENCE_STORE = "storePreference", e.PREFERENCE_UPDATED = "preferenceUpdated", e.PAUSE_PRESENTATION = "pausePresentation", e.PRESENTATION_READY = "presentationReady", e.PRESENTATION_LOAD = "loadPresentation", e.PRESENTATION_STORE = "storePresentation", e.PRESENTATION_UPDATED = "presentationUpdated", e.ROW_COL_UPDATE = "rowcolupdate", e.SCREENSHOT_TAKE = "takeScreenshot", e.SCREENSHOT_STORE = "storeScreenshot", e.SECTION_UPDATE = "sectionUpdate", e.SHOW_BUILDER_DIALOG = "showBuilderDialog", e.SHOW_BUILDER_MODAL = "showBuilderModal", e.SHOW_MODAL = "showModal", e.SLIDE_DID_LOAD = "slideDidLoad", e.SLIDE_GET = "getSlide", e.SLIDE_GOTO = "slideGoto", e.SLIDE_LOAD = "loadSlide", e.SLIDE_READY = "slideReady", e.SLIDE_SAVED = "slideSaved", e.SLIDE_SET = "setSlide", e.SLIDE_STORE = "storeSlide", e.SLIDE_STORED = "slideStored", e.SLIDE_TRANSITIONER = "slideTransitioner", e.SLIDE_UPDATED = "slideUpdated", e.START_TRANSITIONER = "startTransitioner", e.STORAGE_INIT = "storageInit", e.SUBSCRIBE = "subscribe", e.SUSPEND_ACCOUNT = "suspendAccount", e.SWITCH_PRESENTATION = "switchPresentation", e.REMOVE_CLOUD = "removeCloud", e.UPDATE = "update", e.UPLOAD_COMPLETED = "uploadCompleted", e.VERSION = "version", e.WIDGETS_CLEAR = "widgetsClear", e.WIDGET_DID_LOAD = "widgetDidLoad", e.WIDGET_DID_UPDATE = "widgetDidUpdate", e.WIDGET_LOAD = "widgetLoad", e.WIDGET_STORE = "widgetStore", e.WIDGET_UPDATE = "widgetUpdate", e.WS_API_REQUEST = "wsApiRequest", e.WS_API_RESPONSE = "wsApiResponse", e.WS_API_UPDATE = "wsApiRUpdate", e))(v || {}), D = /* @__PURE__ */ ((e) => (e.APPROVED = "approved", e.BEFORE = "before", e.DELAYED = "delayed", e.NONE = "none", e.REALTIME = "realtime", e))(D || {}), E = /* @__PURE__ */ ((e) => (e.KEYVAL = "keyval", e.LOCAL = "local", e.SESSION = "session", e.DEXIE = "dexie", e.WINDOW = "window", e))(E || {});
function q(e) {
  const t = e.toUpperCase().split(/[\s_-]+/);
  return t.length > 0 ? (t.forEach((r, n) => {
    t[n] = `${r.charAt(0)}.`;
  }), t.join(" ")) : "";
}
function N(e) {
  let t = "", r = "", n = {
    backgroundImage: ""
  };
  return typeof e.media < "u" && e.media.forEach((a) => {
    (a.type === "photo" || a.type === "image") && (n = {
      backgroundImage: `url(${a.url})`
    }, r = a.url), a.type === "video" && (t = a.url);
  }), {
    image: r,
    background: n || null,
    video: t
  };
}
function V(e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e.item(r);
    n?.name && (t[n.name] = n.value);
  }
  return t;
}
function ee(e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    n.name !== "class" && !n.name.includes("data") && (t[n.name] = n.value);
  }
  return t;
}
function te(e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    n.name !== "class" && (t[n.name] = P(n.value));
  }
  return t;
}
const re = (e) => new Promise((t) => {
  if (document.querySelector(e))
    return t(document.querySelector(e));
  const r = new MutationObserver((n) => {
    document.querySelector(e) && (r.disconnect(), t(document.querySelector(e)));
  });
  r.observe(document.body, { childList: !0, subtree: !0 });
});
function ne(e, t) {
  switch (e) {
    case "ax":
      return '<div class="axa-switch-small bg-center bg-cover w-6 h-6"></div>';
    case "bl":
      return `<li class="text-blue fa-solid fa-rss fa-${t}"/>`;
    case "co":
      return `<li class="fa-solid fa-comment fa-${t}"/>`;
    case "da":
      return `<li class="fa-brands fa-dailymotion fa-${t}"/>`;
    case "fb":
      return `<li class="text-blue-900 fa-brands fa-facebook fa-${t}"/>`;
    case "fo":
      return `<li class="fa-solid fa-messages fa-${t}"/>`;
    case "ig":
      return `<li class="fa-brands fa-instagram fa-${t}"/>`;
    case "lb":
      return `<li class="fa-solid fa-comment fa-${t}"/>`;
    case "li":
      return `<li class="fa-brands fa-linkedin fa-${t}"/>`;
    case "me":
      return `<li class="fa-solid fa-rss fa-${t}"/>`;
    case "pi":
      return `<li class="fa-brands fa-pinterest fa-${t}"/>`;
    case "qq":
      return `<li class="fa-brands fa-weibo fa-${t}"/>`;
    case "rd":
      return `<li class="fa-brands fa-reddit fa-${t}"/>`;
    case "re":
      return `<li class="fa-solid fa-star-sharp-half-stroke fa-${t}"/>`;
    case "ti":
      return `<li class="fa-brands fa-tiktok fa-${t}"/>`;
    case "tw":
      return `<li class="fa-brands fa-x-twitter fa-${t}"/>`;
    case "vk":
      return `<li class="fa-brands fa-vk fa-${t}"/>`;
    case "ws":
      return `<li class="fa-solid fa-rss fa-${t}"/>`;
    case "yt":
      return `<li class="text-red fa-brands fa-youtube fa-${t}"/>`;
    default:
      return "";
  }
}
function ae(e) {
  return e.replace(/^\w|[A-Z]|\b\w/g, (t, r) => r === 0 ? t.toLowerCase() : t.toUpperCase()).replace(/\s+/g, "");
}
function P(e) {
  return e.toLowerCase().split("-").reduce((t, r) => t + (r.charAt(0).toUpperCase() + r.slice(1)));
}
const oe = (e) => e.replace(/([A-Z])/g, "-$1").toLowerCase(), se = (e) => e.charAt(0).toUpperCase() + e.slice(1);
function ie(e) {
  const t = document.createRange();
  t.selectNodeContents(e), t.deleteContents();
}
const le = () => Math.floor(Math.random() * 16777215).toString(16), ce = () => {
  var e = Math.round, t = Math.random, r = 255;
  return "rgba(" + e(t() * r) + "," + e(t() * r) + "," + e(t() * r) + "," + t().toFixed(1) + ")";
}, de = () => {
  var e = Math.round, t = Math.random, r = 255;
  return "rgba(" + e(t() * r) + "," + e(t() * r) + "," + e(t() * r) + ", 0)";
}, ue = () => {
  var e = Math.round, t = Math.random, r = 255;
  return "rgba(" + e(t() * r) + "," + e(t() * r) + "," + e(t() * r) + ")";
}, fe = (e, t) => {
  e = e.substring(e.indexOf("(") + 1, e.indexOf(")"));
  let r = e.split(",");
  return r = r.map((n) => parseFloat(n.trim()).toString()), e = "background-color: rgba(" + parseInt(r[0]) + "," + parseInt(r[1]) + "," + parseInt(r[2]) + "," + t + ");", e;
};
function I(e) {
  e.reduce(
    (t, r) => Object.keys(r).reduce(
      (n, a) => ({
        ...n,
        [a]: a in t && typeof t[a] == "object" && t[a] !== null && typeof r[a] == "object" && r[a] !== null ? I([t[a], r[a]]) : r[a]
      }),
      t
    ),
    {}
  );
}
const pe = (e) => [...new Set(e)], ge = (e) => e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
function be(e, t = "font-bold") {
  return `${e?.title !== null ? `<div class="${t}">${e.title}</div>` : ""}${e?.content ? e.content.replace(/\n\n/g, `
`).replace(/\n/g, "<br/>") : ""}`;
}
const k = (e, t = {}, r = "") => {
  for (let n in e) {
    let a = r ? `${r}-${n}` : n;
    typeof e[n] == "object" && !Array.isArray(e[n]) ? k(e[n], t, a) : e[n] !== "" && (t[a] = e[n]);
  }
  return t;
}, me = () => [m(2), m(1), m(1), m(1), m(3)].join("-"), m = (e) => {
  let t = "";
  for (let r = 0; r < e; r++)
    t += ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  return t;
};
function y(e, t) {
  for (; e.length < t; )
    e = `0${e}`;
  return e;
}
function f(e, t) {
  let r, n, a;
  if (t.length === 0)
    return e;
  for (r = 0, a = t.length; r < a; r++)
    n = t.charCodeAt(r), e = (e << 5) - e + n, e |= 0;
  return e < 0 ? e * -2 : e;
}
function M(e, t, r) {
  return Object.keys(t).sort().reduce(n, e);
  function n(a, o) {
    return R(a, t[o], o, r);
  }
}
function R(e, t, r, n) {
  const a = f(f(f(e, r), U(t)), typeof t);
  if (t === null)
    return f(a, "null");
  if (t === void 0)
    return f(a, "undefined");
  if (typeof t == "object" || typeof t == "function") {
    if (n.includes(t))
      return f(a, `[Circular]${r}`);
    n.push(t);
    const o = M(a, t, n);
    if (!("valueOf" in t) || typeof t.valueOf != "function")
      return o;
    try {
      return f(o, String(t.valueOf()));
    } catch (l) {
      return f(o, `[valueOf exception]${l.stack || l.message}`);
    }
  }
  return f(a, t.toString());
}
function U(e) {
  return Object.prototype.toString.call(e);
}
function he(e) {
  return y(R(0, e, "", []).toString(16), 8);
}
const De = (e) => {
  let t = "";
  return w(e, {
    start: function(r, n, a) {
      t += "<" + r;
      for (let o = 0; o < n.length; o++)
        t += ` ${n[o].name}="${n[o].escaped}"`;
      t += ">";
    },
    end: function(r) {
      t += `</${r}>`;
    },
    chars: function(r) {
      t += r;
    },
    comment: function(r) {
      t += `<!-- ${r} -->`;
    }
  }), t;
}, _e = (e, t) => {
  const r = b("html,head,body,title"), n = { link: "head", base: "head" };
  t ? t = t.ownerDocument || t.getOwnerDocument && t.getOwnerDocument() || t : typeof t < "u" ? t = new Document() : typeof document < "u" && document.implementation && document.implementation.createDocument && (t = document.implementation.createDocument("", "", null));
  const a = [];
  if (!(t.documentElement || t.getDocumentElement && t.getDocumentElement()) && t.createElement && function() {
    const s = t.createElement("html"), u = t.createElement("head");
    u.appendChild(t.createElement("title")), s.appendChild(u), s.appendChild(t.createElement("body")), t.appendChild(s);
  }(), t.getElementsByTagName)
    for (let s in r) r[s] = t.getElementsByTagName(s)[0];
  let l = r.body;
  return w(e, {
    start: function(s, u, c) {
      if (r[s]) {
        l = r[s], c || a.push(l);
        return;
      }
      const i = t.createElement(s);
      for (let d in u)
        i.setAttribute(u[d].name, u[d].value);
      n[s] && typeof r[n[s]] != "boolean" ? r[n[s]].appendChild(i) : l && l.appendChild && l.appendChild(i), c || (a.push(i), l = i);
    },
    end: function(s) {
      a.length -= 1, l = a[a.length - 1];
    },
    chars: function(s) {
      l.appendChild(t.createTextNode(s));
    },
    comment: function(s) {
    }
  }), t;
}, b = (e) => {
  let t = {}, r = e.split(",");
  for (let n = 0; n < r.length; n++) t[r[n]] = !0;
  return t;
}, x = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/, L = /^<\/([-A-Za-z0-9_]+)[^>]*>/, $ = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g, S = b(
  "area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"
), C = b(
  "a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"
), G = b(
  "abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"
), B = b("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"), T = b(
  "checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"
), H = b("script,style"), w = (e, t) => {
  let r, n, a, o = [], l = e;
  const s = (c, i) => {
    let d;
    if (!i) d = 0;
    else
      for (d = o.length - 1; d >= 0 && o[d] != i; d--)
        ;
    if (d >= 0) {
      for (let p = o.length - 1; p >= d; p--)
        t.end && t.end(o[p]);
      o.length = d;
    }
  };
  for (; e; ) {
    if (n = !0, !o.at(-1) || !H[o.at(-1)]) {
      if (e.indexOf("<!--") == 0 ? (r = e.indexOf("-->"), r >= 0 && (t.comment && t.comment(e.substring(4, r)), e = e.substring(r + 3), n = !1)) : e.indexOf("</") == 0 ? (a = e.match(L), a && (e = e.substring(a[0].length), a[0].replace(L, s), n = !1)) : e.indexOf("<") == 0 && (a = e.match(x), a && (e = e.substring(a[0].length), a[0].replace(x, u), n = !1)), n) {
        r = e.indexOf("<");
        let c = r < 0 ? e : e.substring(0, r);
        e = r < 0 ? "" : e.substring(r), t.chars && t.chars(c);
      }
    } else
      e = e.replace(
        //@ts-ignore
        new RegExp("([\\s\\S]*?)</" + o.at(-1) + "[^>]*>"),
        function(c, i) {
          return i = i.replace(
            /<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,
            "$1$2"
          ), t.chars && t.chars(i), "";
        }
      ), s("", o.at(-1));
    if (e == l) throw "Parse Error: " + e;
    l = e;
  }
  s();
  function u(c, i, d, p) {
    if (i = i.toLowerCase(), C[i])
      for (; o.at(-1) && G[o.at(-1)]; )
        s("", o.at(-1));
    if (B[i] && o.at(-1) == i && s("", i), p = S[i] || !!p, p || o.push(i), t.start) {
      const A = [];
      d.replace($, function(z, _) {
        let O = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : T[_] ? _ : "";
        A.push({
          name: _,
          value: O,
          escaped: O.replace(/(^|[^\\])"/g, '$1\\"')
          //"
        });
      }), t.start && t.start(i, A, p);
    }
  }
};
function W(e) {
  return `"${e}"`;
}
function F(e) {
  return e.replace(/<\?xml.*\?>\n/, "").replace(/<!doctype.*\>\n/, "").replace(/<!DOCTYPE.*\>\n/, "");
}
const we = (e) => {
  e = F(e);
  const t = [], r = {
    node: "root",
    child: []
  };
  return w(e, {
    start: function(n, a, o) {
      let l = {
        node: "element",
        tag: n
      };
      if (a.length !== 0 && (l.attr = a.reduce(function(s, u) {
        let c = u.name, i = u.value;
        return i.match(/ /) && (["title", "transform", "viewBox", "widget"].includes(u.name) || (i = i.split(" "))), s[c] ? Array.isArray(s[c]) ? s[c].push(i) : s[c] = [s[c], i] : s[c] = i, s;
      }, {})), o) {
        const s = t[0] || r;
        s.child === void 0 && (s.child = []), s.child.push(l);
      } else
        t.unshift(l);
    },
    end: function(n) {
      const a = t.shift();
      if (a.tag !== n && console.error("invalid state: mismatch end tag"), t.length === 0)
        r.child.push(a);
      else {
        const o = t[0];
        o.child === void 0 && (o.child = []), o.child.push(a);
      }
    },
    //@ts-ignore
    chars: function(n) {
      let a = {
        node: "text",
        text: n
      };
      if (t.length === 0)
        r.child.push(a);
      else {
        const o = t[0];
        o.child === void 0 && (o.child = []), o.child.push(a);
      }
    },
    //@ts-ignore
    comment: function(n) {
      const a = {
        node: "comment",
        text: n
      }, o = t[0];
      o.child === void 0 && (o.child = []), o.child.push(a);
    }
  }), r;
}, K = (e) => {
  const t = [
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
    "embed"
  ];
  let r = "";
  e.child && (r = e.child.map(function(a) {
    return K(a);
  }).join(""));
  let n = "";
  if (e.attr && (n = Object.keys(e.attr).map(function(a) {
    let o = e.attr[a];
    return Array.isArray(o) && (o = o.join(" ")), `${a}=${W(o)}`;
  }).join(" "), n !== "" && (n = ` ${n}`)), e.node === "element") {
    let a = e.tag;
    if (t.indexOf(a) > -1)
      return `<${e.tag}${n}/>`;
    const o = `<${e.tag}${n}>`, l = `</${e.tag}>`;
    return `${o}${r}${l}`;
  }
  if (e.node === "text")
    return e.text;
  if (e.node === "comment")
    return `<!-- ${e.text} -->`;
  if (e.node === "root")
    return r;
}, Ae = () => {
  const e = (t = !1) => {
    const n = document.createElement("canvas").getContext("2d", { willReadFrequently: t });
    return n !== null ? (n.moveTo(0, 0), n.lineTo(120, 121), n.stroke(), n.getImageData(0, 0, 200, 200).data.join()) : null;
  };
  return e(!0) !== e(!1);
}, Oe = (e, t = 0, r = !0, n = "en") => {
  if (e === void 0) return "";
  if (e = typeof e == "string" || e instanceof String ? parseFloat(e.replace(/[^0-9.]/g, "")) : e, r === !1)
    return e.toLocaleString(n);
  if (e < 1e3)
    return (Math.round(e * 100) / 100).toFixed(t);
  e = e.toString().replace(/[^0-9.]/g, "");
  let a = [
    { v: 1e3, s: "K" },
    { v: 1e6, s: "M" },
    { v: 1e9, s: "B" },
    { v: 1e12, s: "T" },
    { v: 1e15, s: "P" },
    { v: 1e18, s: "E" }
  ], o;
  for (o = a.length - 1; o > 0 && !(e >= a[o].v); o--)
    ;
  return (e / a[o].v).toFixed(t).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + a[o].s;
}, xe = (e) => Object.keys(e).length === 0, Y = new Blob(
  [
    `const LOG_LEVELS = new Set([1,2,3,4])
		self.onmessage = function(e) {
  switch(e.data.action){
		case 'add':
			LOG_LEVELS.add(e.data.level);
			break;
		case 'clear':
			LOG_LEVELS.clear();
			break;
		case 'delete':
			LOG_LEVELS.delete(e.data.level);
			break;
		case 'list':
			e.data.message.push([...LOG_LEVELS])
			console.log(...e.data.message);
		break;
		case 'log':
			if(LOG_LEVELS.has(e.data.level)) {
				switch (true) {
					case e.data.level > 3:
						console.debug(...e.data.message);
						break;
					case e.data.level > 2:
						console.info(...e.data.message);
						break;
					case e.data.level > 1:
						console.warn(...e.data.message);
						break;
					case e.data.level > 0:
						console.error(...e.data.message);
						break;
					default:
						console.info(...e.data.message);
				}
			}
			break;
	}
}`
  ],
  { type: "text/javascript" }
);
window.__bc = window.__bc || {};
window.__bc.logger = window.__bc?.logger || new Worker(window.URL.createObjectURL(Y), { name: "logger" });
const Le = async (e = 0, t) => {
  window.__bc.logger.postMessage({ action: "log", level: e, message: t });
}, Re = {
  add: (e) => window.__bc.logger.postMessage({ action: "add", level: e }),
  clear: () => window.__bc.logger.postMessage({ action: "delete" }),
  delete: (e) => window.__bc.logger.postMessage({ action: "delete", level: e }),
  list: () => window.__bc.logger.postMessage({
    action: "list",
    message: ["%capp%c %clogging", g.APP, g.NONE, g.OK]
  })
}, ve = (e) => e.replace(/\<\!--\s*?[^\s?\[][\s\S]*?--\>/g, "").replace(/\>\s*\</g, "><").replace(/\t/g, ""), Ee = (e) => e.replace(/\>\</g, `>
<`), Pe = (e) => e.replace(/\/\*.*\*\/|\/\*[\s\S]*?\*\/|\n|\t|\v|\s{2,}/g, "").replace(/\s*\{\s*/g, "{").replace(/\s*\}\s*/g, "}").replace(/\s*\:\s*/g, ":").replace(/\s*\;\s*/g, ";").replace(/\s*\,\s*/g, ",").replace(/\s*\~\s*/g, "~").replace(/\s*\>\s*/g, ">").replace(/\s*\+\s*/g, "+").replace(/\s*\!\s*/g, "!"), Ie = (e) => e.replace(/\,/g, ", ").replace(/\{/g, ` {
	`).replace(/\}/g, `}
`).replace(/\;/g, `;
	`);
function ke(e, t) {
  const r = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "MM" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ], n = /\.0+$|(\.\d*[1-9])0+$/;
  let a;
  for (a = r.length - 1; a > 0 && !(e >= r[a].value); a--)
    ;
  return (e / r[a].value).toFixed(t).replace(n, "$1") + r[a].symbol;
}
function ye(e) {
  const t = RegExp(`[?&]${e}=([^&]*)`).exec(window.location.search);
  return t && decodeURIComponent(t[1].replace(/\+/g, " ")) || null;
}
const Me = (e) => new Proxy(new URLSearchParams(window.location.search), {
  // @ts-ignore
  get: (r, n) => r.get(n)
})[e];
function Ue(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function $e(e) {
  switch (e.language) {
    case "ar":
      return {
        direction: "rtl",
        textAlign: "right"
      };
    default:
      return {};
  }
}
function Se(e) {
  const t = e.filter(
    (r) => r !== void 0
  );
  return t.forEach((r) => {
    if (window.__bc.opts.suspended === !0 ? r.content = "License suspended, please contact your Sales Representative to restore service" : r.content = r.content?.replace(
      /(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)((\?.*)?)/g,
      ""
    ) || "", r.sender !== null)
      switch (!0) {
        case r.sender.title === "Unknown author":
          r.sender.title = "", r.sender.name = "";
          break;
        case r.sender.title === r.sender.name:
          r.sender.name = "";
          break;
        case r.channel === "tw":
          r.sender.name = `@${r.sender.name}`;
          break;
      }
    else
      r.sender = {
        title: "",
        name: "",
        id: "",
        avatar: "default",
        bio: "",
        location: "",
        following: 0,
        verified: 0,
        listed: 0,
        followers: 0,
        favourites: 0,
        messages: 0,
        influence: 0
      };
    if (r.sender.title === "" && r.link !== "") {
      const n = new URL(r.link);
      r.sender.title = n.hostname.replace("www.", "");
    }
  }), t;
}
function Ce(e, t, r, n) {
  e.stopPropagation(), t.showModal({
    showComponent: "card-modal",
    props: { data: r, options: n }
  });
}
function Ge(e) {
  const t = [...e];
  for (let r = t.length - 1; r > 0; r--) {
    const n = Math.floor(Math.random() * (r + 1));
    [t[r], t[n]] = [t[n], t[r]];
  }
  return t;
}
function Be() {
  let e = "";
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let r = 0; r < 7; r++) e += t.charAt(Math.floor(Math.random() * t.length));
  return e;
}
const Te = (e) => {
  switch (e?.type) {
    case h.MESSAGES:
      return g.MESSAGES;
    case h.SERIES:
      return g.SERIES;
    case h.CLOUD:
      return g.CLOUD;
    default:
      return g.NO_UPDATES;
  }
}, Z = (e = 6) => Math.random().toString(36).substring(2, e + 2), X = (e, t = []) => !t.find(function(n) {
  return n === e;
}), He = (e, t = []) => {
  let n = 0, a = "";
  for (; a == "" && n < 100; )
    a = Z(e), X(a, t) || (a = "", n++);
  return a;
}, We = (e) => {
  switch (!0) {
    case e < 0:
      return "text-down text-xs";
    case e > 0:
      return "text-up text-xs";
    default:
      return "text-white text-xs";
  }
}, Fe = (e, t, r) => Promise.race([e, Q(t, r)]), Q = (e, t) => new Promise((r, n) => setTimeout(() => t === void 0 ? r("ok") : n(t), e));
function Ke(e) {
  let t = `${e.type}.${e.topics}`;
  return e.order && (t += `.${e.order}`), e.period && (t += `.${e.period}`), t;
}
function Ye(e) {
  if (e.widget === void 0) {
    const t = e.topics?.split("-");
    t && t.length > 1 ? (e.dashboard = t ? t[0] : "", e.widget = t ? t[1] : "") : (e.widget = e.topics, e.dashboard = e.slide);
  }
  return e;
}
function Ze(e, t) {
  let r, n, a, o, l;
  switch (e.moderation) {
    case D.BEFORE:
      r = /* @__PURE__ */ new Date(), n = e.beforeTime?.split(":"), a = Number.parseInt(n ? n[0] : "00"), o = Number.parseInt(n ? n[1] : "00"), l = Number.parseInt(n ? n[2] : "00"), t.before = r.setHours(a, o, l, 0) / 1e3, t.period || (t.period = r.getDay() === 1 ? 72 : 24);
      break;
    case D.DELAYED:
      e.delay && e.delay > 0 && (t.delay = `${e.delay}`);
      break;
    case D.APPROVED:
      t.approved = "1";
      break;
    default:
      e.period !== 0 && (t.period = e.period);
  }
  return t;
}
var j = /* @__PURE__ */ ((e) => (e.MultiPolygon = "MultiPolygon", e.Polygon = "Polygon", e))(j || {}), J = /* @__PURE__ */ ((e) => (e.MultiPolygon = "MultiPolygon", e.Polygon = "Polygon", e))(J || {});
export {
  h as API,
  g as CSS,
  v as EVENTS,
  j as GeoType,
  w as HTMLParser,
  _e as HTMLtoDOM,
  De as HTMLtoXML,
  D as MODERATION,
  fe as RGBAchangeA,
  E as STORAGE,
  J as ShapeType,
  q as anonymize,
  N as attachedMedia,
  V as attrs,
  re as awaitElement,
  ne as brandLogo,
  P as camelCase,
  te as camelCasedProps,
  oe as camelToHyphen,
  ae as camelize,
  se as capitalizeFirstLetter,
  ie as clearContents,
  I as deepMerge,
  ge as escape,
  ee as filterAttributes,
  k as flatten,
  be as formatContent,
  me as getGuid,
  Ke as getKey,
  ye as getParameterByName,
  Me as getQueryParam,
  Ae as hasHWA,
  he as hashSum,
  we as html2json,
  Oe as intToString,
  xe as isEmpty,
  K as json2html,
  Le as log,
  Re as logging,
  Ie as maxifyCss,
  Ee as maxifyHtml,
  Pe as minifyCss,
  ve as minifyHtml,
  Ze as moderation,
  ke as numberFormatter,
  le as randomColor,
  ue as randomRGB,
  de as randomRGBA,
  ce as randomRGBAfull,
  Ue as randomValue,
  $e as rtl,
  Se as sanitize,
  Ce as showModal,
  Ge as shuffleMessages,
  Be as stringGen,
  Te as typeCss,
  He as uniq,
  pe as unique,
  We as upDownColor,
  Ye as widgetParams,
  Fe as wrapPromise
};
