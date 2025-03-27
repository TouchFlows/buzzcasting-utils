var m = /* @__PURE__ */ ((e) => (e.MESSAGES = "messages", e.CLOUD = "cloud", e.SERIES = "series", e.TOPICS = "topics", e.WIDGET = "widget", e.WIDGETS = "widgets", e.DASHBOARD = "dashboard", e.DASHBOARDS = "dashboards", e.SLIDE = "slide", e.SLIDES = "slides", e.PRESENTATION = "presentation", e.PRESENTATIONS = "presentations", e.PREFERENCE = "preference", e.PREFERENCES = "preferences", e))(m || {}), h = /* @__PURE__ */ ((e) => (e.API = "color:white;background-color:grey;padding:0 4px 0 4px;border-radius:5px;", e.APP = "color:white;background-color:navy;padding:0 4px 0 4px;border-radius:5px;", e.BROADCAST = "color:navy;background-color:orange;padding:0 4px 0 4px;border-radius:5px;", e.CLOUD = "color:purple;background-color:mistyrose;padding:0 4px 0 4px;border-radius:5px;", e.DATA = "color:grey;background-color:lightskyblue;padding:0 4px 0 4px;border-radius:5px;", e.ERROR = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", e.GET_DATA = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", e.HIDE = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", e.KO = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", e.MESSAGES = "color:white;background-color:darkslateblue;padding:0 4px 0 4px;border-radius:5px;", e.NO_UPDATES = "color:grey;border:1px solid grey;padding:0 4px 0 4px;border-radius:5px;", e.NONE = "color:transparent;background-color:transparent;", e.OK = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", e.PRESENTATION = "color:white;background-color:darkred;padding:0 4px 0 4px;border-radius:5px;", e.SERIES = "color:purple;background-color:thistle;padding:0 4px 0 4px;border-radius:5px;", e.SLIDE = "color:black;background-color:yellow;padding:0 4px 0 4px;border-radius:5px;", e.STORAGE = "color:black;background-color:cyan;padding:0 4px 0 4px;border-radius:5px;", e.SUBSCRIBE = "color:white;background-color:dodgerblue;padding:0 4px 0 4px;border-radius:5px;", e.WIDGET = "color:gret;background-color:lemonchiffon;padding:0 4px 0 4px;border-radius:5px;", e.WS = "color:white;background-color:green;padding:0 4px 0 4px;border-radius:5px;", e))(h || {}), k = /* @__PURE__ */ ((e) => (e.ADD_SLIDE = "addSlide", e.APP_READY = "appReady", e.API_UPDATE = "apiUpdate", e.WS_API_REQUEST = "wsApiRequest", e.WS_API_RESPONSE = "wsApiResponse", e.WS_API_UPDATE = "wsApiRUpdate", e.APPROVE_MESSAGE = "approveMessage", e.CHANNEL = "channel", e.CLEAN_MESSAGES = "cleanMessages", e.CLOSE_MODAL = "closeModal", e.CLOSE_BUILDER_MODAL = "closeBuilderModal", e.DASHBOARD_LOAD = "loadDashboard", e.DASHBOARD_STORE = "storeDashboard", e.ERROR = "error", e.HIDE_MESSAGE = "hideMessage", e.HIDE_LABELS = "hideLabels", e.MAUPPUT_UPDATE = "layoutUpdate", e.PREV_SLIDE = "prevSlide", e.RELOAD_PRESENTATION = "reloadPresentation", e.SHOW_MODAL = "showModal", e.STAR_MESSAGE = "starMessage", e.GOTO_SLIDE = "gotoSlide", e.NEXT_SLIDE = "nextSlide", e.PREFERENCE_LOAD = "loadPreference", e.PREFERENCE_STORE = "storePreference", e.PAUSE_PRESENTATION = "pausePresentation", e.PRESENTATION_READY = "presentationReady", e.PRESENTATION_LOAD = "loadPresentation", e.PRESENTATION_STORE = "storePresentation", e.SHOW_BUILDER_MODAL = "showBuilderModal", e.SLIDE_DID_LOAD = "slideDidLoad", e.SLIDE_GOTO = "slideGoto", e.SLIDE_READY = "slideReady", e.SLIDE_LOAD = "loadSlide", e.SLIDE_STORE = "storeSlide", e.SLIDE_TRANSITIONER = "slideTransitioner", e.START_TRANSITIONER = "startTransitioner", e.STORAGE_INIT = "storageInit", e.SUBSCRIBE = "subscribe", e.SUSPEND_ACCOUNT = "suspendAccount", e.SWITCH_PRESENTATION = "switchPresentation", e.REMOVE_CLOUD = "removeCloud", e.UPDATE = "update", e.VERSION = "version", e.WIDGETS_CLEAR = "widgetsClear", e.WIDGET_LOAD = "widgetLoad", e.WIDGET_STORE = "widgetStore", e.WIDGET_UPDATE = "widgetUpdate", e))(k || {}), x = /* @__PURE__ */ ((e) => (e.APPROVED = "approved", e.BEFORE = "before", e.DELAYED = "delayed", e.NONE = "none", e.REALTIME = "realtime", e))(x || {}), L = /* @__PURE__ */ ((e) => (e.KEYVAL = "keyval", e.LOCAL = "local", e.SESSION = "session", e.DEXIE = "dexie", e.WINDOW = "window", e))(L || {});
function j(e) {
  const t = e.toUpperCase().split(/[\s_-]+/);
  return t.length > 0 ? (t.forEach((r, n) => {
    t[n] = `${r.charAt(0)}.`;
  }), t.join(" ")) : "";
}
function J(e) {
  let t = "", r = "", n = {
    backgroundImage: ""
  };
  return typeof e.media < "u" && e.media.forEach((o) => {
    (o.type === "photo" || o.type === "image") && (n = {
      backgroundImage: `url(${o.url})`
    }, r = o.url), o.type === "video" && (t = o.url);
  }), {
    image: r,
    background: n || null,
    video: t
  };
}
function z(e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e.item(r);
    n != null && n.name && (t[n.name] = n.value);
  }
  return t;
}
function N(e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    n.name !== "class" && !n.name.includes("data") && (t[n.name] = n.value);
  }
  return t;
}
function q(e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    n.name !== "class" && (t[n.name] = $(n.value));
  }
  return t;
}
function V(e, t) {
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
function ee(e) {
  return e.replace(/^\w|[A-Z]|\b\w/g, (t, r) => r === 0 ? t.toLowerCase() : t.toUpperCase()).replace(/\s+/g, "");
}
function $(e) {
  return e.toLowerCase().split("-").reduce((t, r) => t + (r.charAt(0).toUpperCase() + r.slice(1)));
}
const te = (e) => e.charAt(0).toUpperCase() + e.slice(1);
function re(e) {
  const t = document.createRange();
  t.selectNodeContents(e), t.deleteContents();
}
function P(e) {
  e.reduce(
    (t, r) => Object.keys(r).reduce(
      (n, o) => ({
        ...n,
        [o]: o in t && typeof t[o] == "object" && t[o] !== null && typeof r[o] == "object" && r[o] !== null ? P([t[o], r[o]]) : r[o]
      }),
      t
    ),
    {}
  );
}
function ne(e, t = "font-bold") {
  return `${(e == null ? void 0 : e.title.length) > 0 ? `<div class="${t}">${e.title}</div>` : ""}${e != null && e.content ? e.content.replace(/\n\n/g, `
`).replace(/\n/g, "<br/>") : ""}`;
}
const oe = () => [b(2), b(1), b(1), b(1), b(3)].join("-"), b = (e) => {
  let t = "";
  for (let r = 0; r < e; r++)
    t += ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  return t;
};
function v(e, t) {
  for (; e.length < t; )
    e = `0${e}`;
  return e;
}
function f(e, t) {
  let r, n, o;
  if (t.length === 0)
    return e;
  for (r = 0, o = t.length; r < o; r++)
    n = t.charCodeAt(r), e = (e << 5) - e + n, e |= 0;
  return e < 0 ? e * -2 : e;
}
function I(e, t, r) {
  return Object.keys(t).sort().reduce(n, e);
  function n(o, a) {
    return _(o, t[a], a, r);
  }
}
function _(e, t, r, n) {
  const o = f(f(f(e, r), y(t)), typeof t);
  if (t === null)
    return f(o, "null");
  if (t === void 0)
    return f(o, "undefined");
  if (typeof t == "object" || typeof t == "function") {
    if (n.includes(t))
      return f(o, `[Circular]${r}`);
    n.push(t);
    const a = I(o, t, n);
    if (!("valueOf" in t) || typeof t.valueOf != "function")
      return a;
    try {
      return f(a, String(t.valueOf()));
    } catch (l) {
      return f(a, `[valueOf exception]${l.stack || l.message}`);
    }
  }
  return f(o, t.toString());
}
function y(e) {
  return Object.prototype.toString.call(e);
}
function ae(e) {
  return v(_(0, e, "", []).toString(16), 8);
}
const ie = (e) => {
  let t = "";
  return D(e, {
    start: function(r, n, o) {
      t += "<" + r;
      for (let a = 0; a < n.length; a++)
        t += ` ${n[a].name}="${n[a].escaped}"`;
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
}, se = (e, t) => {
  const r = g("html,head,body,title"), n = { link: "head", base: "head" };
  t ? t = t.ownerDocument || t.getOwnerDocument && t.getOwnerDocument() || t : typeof t < "u" ? t = new Document() : typeof document < "u" && document.implementation && document.implementation.createDocument && (t = document.implementation.createDocument("", "", null));
  const o = [];
  if (!(t.documentElement || t.getDocumentElement && t.getDocumentElement()) && t.createElement && function() {
    const i = t.createElement("html"), u = t.createElement("head");
    u.appendChild(t.createElement("title")), i.appendChild(u), i.appendChild(t.createElement("body")), t.appendChild(i);
  }(), t.getElementsByTagName)
    for (let i in r) r[i] = t.getElementsByTagName(i)[0];
  let l = r.body;
  return D(e, {
    start: function(i, u, c) {
      if (r[i]) {
        l = r[i], c || o.push(l);
        return;
      }
      const s = t.createElement(i);
      for (let d in u)
        s.setAttribute(u[d].name, u[d].value);
      n[i] && typeof r[n[i]] != "boolean" ? r[n[i]].appendChild(s) : l && l.appendChild && l.appendChild(s), c || (o.push(s), l = s);
    },
    end: function(i) {
      o.length -= 1, l = o[o.length - 1];
    },
    chars: function(i) {
      l.appendChild(t.createTextNode(i));
    },
    comment: function(i) {
    }
  }), t;
}, g = (e) => {
  let t = {}, r = e.split(",");
  for (let n = 0; n < r.length; n++) t[r[n]] = !0;
  return t;
}, R = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/, E = /^<\/([-A-Za-z0-9_]+)[^>]*>/, M = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g, S = g(
  "area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"
), C = g(
  "a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"
), U = g(
  "abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"
), T = g("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"), B = g(
  "checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"
), H = g("script,style");
Array.prototype.last = function() {
  return this[this.length - 1];
};
const D = (e, t) => {
  let r, n, o, a = [], l = e;
  a.last = function() {
    return this[this.length - 1];
  };
  const i = (c, s) => {
    let d;
    if (!s) d = 0;
    else
      for (d = a.length - 1; d >= 0 && a[d] != s; d--)
        ;
    if (d >= 0) {
      for (let p = a.length - 1; p >= d; p--)
        t.end && t.end(a[p]);
      a.length = d;
    }
  };
  for (; e; ) {
    if (n = !0, !a.last() || !H[a.last()]) {
      if (e.indexOf("<!--") == 0 ? (r = e.indexOf("-->"), r >= 0 && (t.comment && t.comment(e.substring(4, r)), e = e.substring(r + 3), n = !1)) : e.indexOf("</") == 0 ? (o = e.match(E), o && (e = e.substring(o[0].length), o[0].replace(E, i), n = !1)) : e.indexOf("<") == 0 && (o = e.match(R), o && (e = e.substring(o[0].length), o[0].replace(R, u), n = !1)), n) {
        r = e.indexOf("<");
        let c = r < 0 ? e : e.substring(0, r);
        e = r < 0 ? "" : e.substring(r), t.chars && t.chars(c);
      }
    } else
      e = e.replace(
        //@ts-ignore
        new RegExp("([\\s\\S]*?)</" + a.last() + "[^>]*>"),
        function(c, s) {
          return s = s.replace(
            /<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,
            "$1$2"
          ), t.chars && t.chars(s), "";
        }
      ), i("", a.last());
    if (e == l) throw "Parse Error: " + e;
    l = e;
  }
  i();
  function u(c, s, d, p) {
    if (s = s.toLowerCase(), C[s])
      for (; a.last() && U[a.last()]; )
        i("", a.last());
    if (T[s] && a.last() == s && i("", s), p = S[s] || !!p, p || a.push(s), t.start) {
      const w = [];
      d.replace(M, function(Q, A) {
        let O = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : B[A] ? A : "";
        w.push({
          name: A,
          value: O,
          escaped: O.replace(/(^|[^\\])"/g, '$1\\"')
          //"
        });
      }), t.start && t.start(s, w, p);
    }
  }
};
function G(e) {
  return `"${e}"`;
}
function W(e) {
  return e.replace(/<\?xml.*\?>\n/, "").replace(/<!doctype.*\>\n/, "").replace(/<!DOCTYPE.*\>\n/, "");
}
const le = (e) => {
  e = W(e);
  const t = [], r = {
    node: "root",
    child: []
  };
  return D(e, {
    start: function(n, o, a) {
      let l = {
        node: "element",
        tag: n
      };
      if (o.length !== 0 && (l.attr = o.reduce(function(i, u) {
        let c = u.name, s = u.value;
        return s.match(/ /) && (["title", "transform", "viewBox", "widget"].includes(u.name) || (s = s.split(" "))), i[c] ? Array.isArray(i[c]) ? i[c].push(s) : i[c] = [i[c], s] : i[c] = s, i;
      }, {})), a) {
        const i = t[0] || r;
        i.child === void 0 && (i.child = []), i.child.push(l);
      } else
        t.unshift(l);
    },
    end: function(n) {
      const o = t.shift();
      if (o.tag !== n && console.error("invalid state: mismatch end tag"), t.length === 0)
        r.child.push(o);
      else {
        const a = t[0];
        a.child === void 0 && (a.child = []), a.child.push(o);
      }
    },
    //@ts-ignore
    chars: function(n) {
      let o = {
        node: "text",
        text: n
      };
      if (t.length === 0)
        r.child.push(o);
      else {
        const a = t[0];
        a.child === void 0 && (a.child = []), a.child.push(o);
      }
    },
    //@ts-ignore
    comment: function(n) {
      const o = {
        node: "comment",
        text: n
      }, a = t[0];
      a.child === void 0 && (a.child = []), a.child.push(o);
    }
  }), r;
}, F = (e) => {
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
  e.child && (r = e.child.map(function(o) {
    return F(o);
  }).join(""));
  let n = "";
  if (e.attr && (n = Object.keys(e.attr).map(function(o) {
    let a = e.attr[o];
    return Array.isArray(a) && (a = a.join(" ")), `${o}=${G(a)}`;
  }).join(" "), n !== "" && (n = ` ${n}`)), e.node === "element") {
    let o = e.tag;
    if (t.indexOf(o) > -1)
      return `<${e.tag}${n}/>`;
    const a = `<${e.tag}${n}>`, l = `</${e.tag}>`;
    return `${a}${r}${l}`;
  }
  if (e.node === "text")
    return e.text;
  if (e.node === "comment")
    return `<!-- ${e.text} -->`;
  if (e.node === "root")
    return r;
}, ce = (e, t = 0, r = !0, n = "en") => {
  if (typeof e == "string" || e instanceof String) return e.toString().replace(/[^0-9.]/g, "");
  if (r === !1)
    return e.toLocaleString(n);
  if (e < 1e3)
    return e = e.toString().replace(/[^0-9.]/g, "");
  e = e.toString().replace(/[^0-9.]/g, "");
  let o = [
    { v: 1e3, s: "K" },
    { v: 1e6, s: "M" },
    { v: 1e9, s: "B" },
    { v: 1e12, s: "T" },
    { v: 1e15, s: "P" },
    { v: 1e18, s: "E" }
  ], a;
  for (a = o.length - 1; a > 0 && !(e >= o[a].v); a--)
    ;
  return (e / o[a].v).toFixed(t).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + o[a].s;
}, de = (e = 0, t) => {
  switch (!0) {
    case e > 3:
      console.debug(...t);
      break;
    case e > 2:
      console.info(...t);
      break;
    case e > 1:
      console.warn(...t);
      break;
    case e > 0:
      console.error(...t);
      break;
  }
}, ue = (e) => e.replace(/\<\!--\s*?[^\s?\[][\s\S]*?--\>/g, "").replace(/\>\s*\</g, "><").replace(/\t/g, ""), fe = (e) => e.replace(/\>\</g, `>
<`), pe = (e) => {
  e.replace(/\/\*.*\*\/|\/\*[\s\S]*?\*\/|\n|\t|\v|\s{2,}/g, "").replace(/\s*\{\s*/g, "{").replace(/\s*\}\s*/g, "}").replace(/\s*\:\s*/g, ":").replace(/\s*\;\s*/g, ";").replace(/\s*\,\s*/g, ",").replace(/\s*\~\s*/g, "~").replace(/\s*\>\s*/g, ">").replace(/\s*\+\s*/g, "+").replace(/\s*\!\s*/g, "!");
}, ge = (e) => e.replace(/\,/g, ", ").replace(/\{/g, ` {
	`).replace(/\}/g, `}
`).replace(/\;/g, `;
	`);
function be(e, t) {
  const r = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "MM" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ], n = /\.0+$|(\.\d*[1-9])0+$/;
  let o;
  for (o = r.length - 1; o > 0 && !(e >= r[o].value); o--)
    ;
  return (e / r[o].value).toFixed(t).replace(n, "$1") + r[o].symbol;
}
function he(e) {
  const t = RegExp(`[?&]${e}=([^&]*)`).exec(window.location.search);
  return t && decodeURIComponent(t[1].replace(/\+/g, " ")) || null;
}
const me = (e) => new Proxy(new URLSearchParams(window.location.search), {
  // @ts-ignore
  get: (r, n) => r.get(n)
})[e];
function xe(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function Ae(e) {
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
function De(e) {
  const t = window.BuzzCasting.getOptions().suspended ?? !1;
  return e.forEach((r) => {
    var n;
    if (t ? r.content = "License suspended, please contact your Sales Representative to restore service" : r.content = ((n = r.content) == null ? void 0 : n.replace(
      /(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)((\?.*)?)/g,
      ""
    )) || "", r.sender !== null)
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
      const o = new URL(r.link);
      r.sender.title = o.hostname.replace("www.", "");
    }
  }), e;
}
function we(e, t, r, n) {
  e.stopPropagation(), t.showModal({
    showComponent: "card-modal",
    props: { data: r, options: n }
  });
}
function Oe(e) {
  const t = [...e];
  for (let r = t.length - 1; r > 0; r--) {
    const n = Math.floor(Math.random() * (r + 1));
    [t[r], t[n]] = [t[n], t[r]];
  }
  return t;
}
function Re() {
  let e = "";
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let r = 0; r < 7; r++) e += t.charAt(Math.floor(Math.random() * t.length));
  return e;
}
const Ee = (e) => {
  switch (e == null ? void 0 : e.type) {
    case m.MESSAGES:
      return h.MESSAGES;
    case m.SERIES:
      return h.SERIES;
    case m.CLOUD:
      return h.CLOUD;
    default:
      return h.NO_UPDATES;
  }
}, Y = (e = 6) => Math.random().toString(36).substring(2, e + 2), K = (e, t = []) => !t.find(function(n) {
  return n === e;
}), _e = (e, t = []) => {
  let n = 0, o = "";
  for (; o == "" && n < 100; )
    o = Y(e), K(o, t) || (o = "", n++);
  return o;
}, ke = (e) => {
  switch (!0) {
    case e < 0:
      return "text-down text-xs";
    case e > 0:
      return "text-up text-xs";
    default:
      return "text-white text-xs";
  }
}, Le = (e, t, r) => Promise.race([e, Z(t, r)]), Z = (e, t) => new Promise((r, n) => setTimeout(() => t === void 0 ? r("ok") : n(t), e));
function $e(e) {
  let t = `${e.type}.${e.topics}`;
  return e.order && (t += `.${e.order}`), e.period && (t += `.${e.period}`), t;
}
function Pe(e) {
  var t;
  if (e.widget === void 0) {
    const r = (t = e.topics) == null ? void 0 : t.split("-");
    r && r.length > 1 ? (e.dashboard = r ? r[0] : "", e.widget = r ? r[1] : "") : (e.widget = e.topics, e.dashboard = e.slide);
  }
  return e;
}
function ve(e, t) {
  var i;
  let r, n, o, a, l;
  switch (e.moderation) {
    case x.BEFORE:
      r = /* @__PURE__ */ new Date(), n = (i = e.beforeTime) == null ? void 0 : i.split(":"), o = Number.parseInt(n ? n[0] : "00"), a = Number.parseInt(n ? n[1] : "00"), l = Number.parseInt(n ? n[2] : "00"), t.before = r.setHours(o, a, l, 0) / 1e3, t.period || (t.period = r.getDay() === 1 ? 72 : 24);
      break;
    case x.DELAYED:
      e.delay && e.delay > 0 && (t.delay = `${e.delay}`);
      break;
    case x.APPROVED:
      t.approved = "1";
      break;
    default:
      e.period !== 0 && (t.period = e.period);
  }
  return t;
}
var X = /* @__PURE__ */ ((e) => (e.MultiPolygon = "MultiPolygon", e.Polygon = "Polygon", e))(X || {});
export {
  m as API,
  h as CSS,
  k as EVENTS,
  D as HTMLParser,
  se as HTMLtoDOM,
  ie as HTMLtoXML,
  x as MODERATION,
  L as STORAGE,
  X as ShapeType,
  j as anonymize,
  J as attachedMedia,
  z as attrs,
  V as brandLogo,
  $ as camelCase,
  q as camelCasedProps,
  ee as camelize,
  te as capitalizeFirstLetter,
  re as clearContents,
  P as deepMerge,
  N as filterAttributes,
  ne as formatContent,
  oe as getGuid,
  $e as getKey,
  he as getParameterByName,
  me as getQueryParam,
  ae as hashSum,
  le as html2json,
  ce as intToString,
  F as json2html,
  de as log,
  ge as maxifyCss,
  fe as maxifyHtml,
  pe as minifyCss,
  ue as minifyHtml,
  ve as moderation,
  be as numberFormatter,
  xe as randomValue,
  Ae as rtl,
  De as sanitize,
  we as showModal,
  Oe as shuffleMessages,
  Re as stringGen,
  Ee as typeCss,
  _e as uniq,
  ke as upDownColor,
  Pe as widgetParams,
  Le as wrapPromise
};
