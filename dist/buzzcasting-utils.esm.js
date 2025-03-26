var c = /* @__PURE__ */ ((e) => (e.MESSAGES = "messages", e.CLOUD = "cloud", e.SERIES = "series", e.TOPICS = "topics", e.WIDGET = "widget", e.WIDGETS = "widgets", e.DASHBOARD = "dashboard", e.DASHBOARDS = "dashboards", e.SLIDE = "slide", e.SLIDES = "slides", e.PRESENTATION = "presentation", e.PRESENTATIONS = "presentations", e.PREFERENCE = "preference", e.PREFERENCES = "preferences", e))(c || {}), l = /* @__PURE__ */ ((e) => (e.API = "color:white;background-color:grey;padding:0 4px 0 4px;border-radius:5px;", e.APP = "color:white;background-color:navy;padding:0 4px 0 4px;border-radius:5px;", e.BROADCAST = "color:navy;background-color:orange;padding:0 4px 0 4px;border-radius:5px;", e.CLOUD = "color:purple;background-color:mistyrose;padding:0 4px 0 4px;border-radius:5px;", e.DATA = "color:grey;background-color:lightskyblue;padding:0 4px 0 4px;border-radius:5px;", e.ERROR = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", e.GET_DATA = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", e.HIDE = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", e.KO = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", e.MESSAGES = "color:white;background-color:darkslateblue;padding:0 4px 0 4px;border-radius:5px;", e.NO_UPDATES = "color:grey;border:1px solid grey;padding:0 4px 0 4px;border-radius:5px;", e.NONE = "color:transparent;background-color:transparent;", e.OK = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", e.PRESENTATION = "color:white;background-color:darkred;padding:0 4px 0 4px;border-radius:5px;", e.SERIES = "color:purple;background-color:thistle;padding:0 4px 0 4px;border-radius:5px;", e.SLIDE = "color:black;background-color:yellow;padding:0 4px 0 4px;border-radius:5px;", e.STORAGE = "color:black;background-color:cyan;padding:0 4px 0 4px;border-radius:5px;", e.SUBSCRIBE = "color:white;background-color:dodgerblue;padding:0 4px 0 4px;border-radius:5px;", e.WIDGET = "color:gret;background-color:lemonchiffon;padding:0 4px 0 4px;border-radius:5px;", e.WS = "color:white;background-color:green;padding:0 4px 0 4px;border-radius:5px;", e))(l || {}), p = /* @__PURE__ */ ((e) => (e.ADD_SLIDE = "addSlide", e.APP_READY = "appReady", e.API_UPDATE = "apiUpdate", e.WS_API_REQUEST = "wsApiRequest", e.WS_API_RESPONSE = "wsApiResponse", e.WS_API_UPDATE = "wsApiRUpdate", e.APPROVE_MESSAGE = "approveMessage", e.CHANNEL = "channel", e.CLEAN_MESSAGES = "cleanMessages", e.CLOSE_MODAL = "closeModal", e.CLOSE_BUILDER_MODAL = "closeBuilderModal", e.DASHBOARD_LOAD = "loadDashboard", e.DASHBOARD_STORE = "storeDashboard", e.ERROR = "error", e.HIDE_MESSAGE = "hideMessage", e.HIDE_LABELS = "hideLabels", e.MAUPPUT_UPDATE = "layoutUpdate", e.PREV_SLIDE = "prevSlide", e.RELOAD_PRESENTATION = "reloadPresentation", e.SHOW_MODAL = "showModal", e.STAR_MESSAGE = "starMessage", e.GOTO_SLIDE = "gotoSlide", e.NEXT_SLIDE = "nextSlide", e.PREFERENCE_LOAD = "loadPreference", e.PREFERENCE_STORE = "storePreference", e.PAUSE_PRESENTATION = "pausePresentation", e.PRESENTATION_READY = "presentationReady", e.PRESENTATION_LOAD = "loadPresentation", e.PRESENTATION_STORE = "storePresentation", e.SHOW_BUILDER_MODAL = "showBuilderModal", e.SLIDE_DID_LOAD = "slideDidLoad", e.SLIDE_GOTO = "slideGoto", e.SLIDE_READY = "slideReady", e.SLIDE_LOAD = "loadSlide", e.SLIDE_STORE = "storeSlide", e.SLIDE_TRANSITIONER = "slideTransitioner", e.START_TRANSITIONER = "startTransitioner", e.STORAGE_INIT = "storageInit", e.SUBSCRIBE = "subscribe", e.SUSPEND_ACCOUNT = "suspendAccount", e.SWITCH_PRESENTATION = "switchPresentation", e.REMOVE_CLOUD = "removeCloud", e.UPDATE = "update", e.VERSION = "version", e.WIDGETS_CLEAR = "widgetsClear", e.WIDGET_LOAD = "widgetLoad", e.WIDGET_STORE = "widgetStore", e.WIDGET_UPDATE = "widgetUpdate", e))(p || {}), s = /* @__PURE__ */ ((e) => (e.APPROVED = "approved", e.BEFORE = "before", e.DELAYED = "delayed", e.NONE = "none", e.REALTIME = "realtime", e))(s || {}), b = /* @__PURE__ */ ((e) => (e.KEYVAL = "keyval", e.LOCAL = "local", e.SESSION = "session", e.DEXIE = "dexie", e.WINDOW = "window", e))(b || {});
function O(e) {
  const r = e.toUpperCase().split(/[\s_-]+/);
  return r.length > 0 ? (r.forEach((t, n) => {
    r[n] = `${t.charAt(0)}.`;
  }), r.join(" ")) : "";
}
function h(e) {
  let r = "", t = "", n = {
    backgroundImage: ""
  };
  return typeof e.media < "u" && e.media.forEach((o) => {
    (o.type === "photo" || o.type === "image") && (n = {
      backgroundImage: `url(${o.url})`
    }, t = o.url), o.type === "video" && (r = o.url);
  }), {
    image: t,
    background: n || null,
    video: r
  };
}
function L(e) {
  return e.replace(/^\w|[A-Z]|\b\w/g, (r, t) => t === 0 ? r.toLowerCase() : r.toUpperCase()).replace(/\s+/g, "");
}
function g(e) {
  return e.toLowerCase().split("-").reduce((r, t) => r + (t.charAt(0).toUpperCase() + t.slice(1)));
}
function _(e) {
  const r = {};
  for (let t = 0; t < e.length; t++) {
    const n = e.item(t);
    n != null && n.name && (r[n.name] = n.value);
  }
  return r;
}
function I(e) {
  const r = {};
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    n.name !== "class" && !n.name.includes("data") && (r[n.name] = n.value);
  }
  return r;
}
function E(e) {
  const r = {};
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    n.name !== "class" && (r[n.name] = g(n.value));
  }
  return r;
}
function k(e, r) {
  switch (e) {
    case "ax":
      return '<div class="axa-switch-small bg-center bg-cover w-6 h-6"></div>';
    case "bl":
      return `<li class="text-blue fa-solid fa-rss fa-${r}"/>`;
    case "co":
      return `<li class="fa-solid fa-comment fa-${r}"/>`;
    case "da":
      return `<li class="fa-brands fa-dailymotion fa-${r}"/>`;
    case "fb":
      return `<li class="text-blue-900 fa-brands fa-facebook fa-${r}"/>`;
    case "fo":
      return `<li class="fa-solid fa-messages fa-${r}"/>`;
    case "ig":
      return `<li class="fa-brands fa-instagram fa-${r}"/>`;
    case "lb":
      return `<li class="fa-solid fa-comment fa-${r}"/>`;
    case "li":
      return `<li class="fa-brands fa-linkedin fa-${r}"/>`;
    case "me":
      return `<li class="fa-solid fa-rss fa-${r}"/>`;
    case "pi":
      return `<li class="fa-brands fa-pinterest fa-${r}"/>`;
    case "qq":
      return `<li class="fa-brands fa-weibo fa-${r}"/>`;
    case "rd":
      return `<li class="fa-brands fa-reddit fa-${r}"/>`;
    case "re":
      return `<li class="fa-solid fa-star-sharp-half-stroke fa-${r}"/>`;
    case "ti":
      return `<li class="fa-brands fa-tiktok fa-${r}"/>`;
    case "tw":
      return `<li class="fa-brands fa-x-twitter fa-${r}"/>`;
    case "vk":
      return `<li class="fa-brands fa-vk fa-${r}"/>`;
    case "ws":
      return `<li class="fa-solid fa-rss fa-${r}"/>`;
    case "yt":
      return `<li class="text-red fa-brands fa-youtube fa-${r}"/>`;
    default:
      return "";
  }
}
const P = (e) => e.charAt(0).toUpperCase() + e.slice(1);
function m(e) {
  const r = document.createRange();
  r.selectNodeContents(e), r.deleteContents();
}
function x(e) {
  e.reduce(
    (r, t) => Object.keys(t).reduce(
      (n, o) => ({
        ...n,
        [o]: o in r && typeof r[o] == "object" && r[o] !== null && typeof t[o] == "object" && t[o] !== null ? x([r[o], t[o]]) : t[o]
      }),
      r
    ),
    {}
  );
}
function $(e, r = "font-bold") {
  return `${(e == null ? void 0 : e.title.length) > 0 ? `<div class="${r}">${e.title}</div>` : ""}${e != null && e.content ? e.content.replace(/\n\n/g, `
`).replace(/\n/g, "<br/>") : ""}`;
}
function D(e, r) {
  for (; e.length < r; )
    e = `0${e}`;
  return e;
}
function i(e, r) {
  let t, n, o;
  if (r.length === 0)
    return e;
  for (t = 0, o = r.length; t < o; t++)
    n = r.charCodeAt(t), e = (e << 5) - e + n, e |= 0;
  return e < 0 ? e * -2 : e;
}
function A(e, r, t) {
  return Object.keys(r).sort().reduce(n, e);
  function n(o, a) {
    return f(o, r[a], a, t);
  }
}
function f(e, r, t, n) {
  const o = i(i(i(e, t), R(r)), typeof r);
  if (r === null)
    return i(o, "null");
  if (r === void 0)
    return i(o, "undefined");
  if (typeof r == "object" || typeof r == "function") {
    if (n.includes(r))
      return i(o, `[Circular]${t}`);
    n.push(r);
    const a = A(o, r, n);
    if (!("valueOf" in r) || typeof r.valueOf != "function")
      return a;
    try {
      return i(a, String(r.valueOf()));
    } catch (d) {
      return i(a, `[valueOf exception]${d.stack || d.message}`);
    }
  }
  return i(o, r.toString());
}
function R(e) {
  return Object.prototype.toString.call(e);
}
function v(e) {
  return D(f(0, e, "", []).toString(16), 8);
}
function U(e, r) {
  if (e = e.toString().replace(/[^0-9.]/g, ""), e < 1e3)
    return e;
  const t = [
    { v: 1e3, s: "K" },
    { v: 1e6, s: "M" },
    { v: 1e9, s: "B" },
    { v: 1e12, s: "T" },
    { v: 1e15, s: "P" },
    { v: 1e18, s: "E" }
  ];
  let n;
  for (n = t.length - 1; n > 0 && !(e >= t[n].v); n--)
    ;
  return (e / t[n].v).toFixed(r).replace(/\.0+$|(\.\d*[1-9])0+$/, "$1") + t[n].s;
}
const M = (e = 0, r) => {
  switch (!0) {
    case e > 3:
      console.debug(...r);
      break;
    case e > 2:
      console.info(...r);
      break;
    case e > 1:
      console.warn(...r);
      break;
    case e > 0:
      console.error(...r);
      break;
  }
};
function S(e, r) {
  const t = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "MM" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ], n = /\.0+$|(\.\d*[1-9])0+$/;
  let o;
  for (o = t.length - 1; o > 0 && !(e >= t[o].value); o--)
    ;
  return (e / t[o].value).toFixed(r).replace(n, "$1") + t[o].symbol;
}
function C(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function y(e) {
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
function B(e) {
  const r = window.BuzzCasting.getOptions().suspended ?? !1;
  return e.forEach((t) => {
    var n;
    if (r ? t.content = "License suspended, please contact your Sales Representative to restore service" : t.content = ((n = t.content) == null ? void 0 : n.replace(
      /(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)((\?.*)?)/g,
      ""
    )) || "", t.sender !== null)
      switch (!0) {
        case t.sender.title === "Unknown author":
          t.sender.title = "", t.sender.name = "";
          break;
        case t.sender.title === t.sender.name:
          t.sender.name = "";
          break;
        case t.channel === "tw":
          t.sender.name = `@${t.sender.name}`;
          break;
      }
    else
      t.sender = {
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
    if (t.sender.title === "" && t.link !== "") {
      const o = new URL(t.link);
      t.sender.title = o.hostname.replace("www.", "");
    }
  }), e;
}
function G(e) {
  const r = [...e];
  for (let t = r.length - 1; t > 0; t--) {
    const n = Math.floor(Math.random() * (t + 1));
    [r[t], r[n]] = [r[n], r[t]];
  }
  return r;
}
function W() {
  let e = "";
  const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let t = 0; t < 7; t++) e += r.charAt(Math.floor(Math.random() * r.length));
  return e;
}
const H = (e) => {
  switch (e == null ? void 0 : e.type) {
    case c.MESSAGES:
      return l.MESSAGES;
    case c.SERIES:
      return l.SERIES;
    case c.CLOUD:
      return l.CLOUD;
    default:
      return l.NO_UPDATES;
  }
}, T = (e) => {
  switch (!0) {
    case e < 0:
      return "text-down text-xs";
    case e > 0:
      return "text-up text-xs";
    default:
      return "text-white text-xs";
  }
};
function F(e) {
  let r = `${e.type}.${e.topics}`;
  return e.order && (r += `.${e.order}`), e.period && (r += `.${e.period}`), r;
}
function K(e) {
  var r;
  if (e.widget === void 0) {
    const t = (r = e.topics) == null ? void 0 : r.split("-");
    t && t.length > 1 ? (e.dashboard = t ? t[0] : "", e.widget = t ? t[1] : "") : (e.widget = e.topics, e.dashboard = e.slide);
  }
  return e;
}
function Y(e, r) {
  var u;
  let t, n, o, a, d;
  switch (e.moderation) {
    case s.BEFORE:
      t = /* @__PURE__ */ new Date(), n = (u = e.beforeTime) == null ? void 0 : u.split(":"), o = Number.parseInt(n ? n[0] : "00"), a = Number.parseInt(n ? n[1] : "00"), d = Number.parseInt(n ? n[2] : "00"), r.before = t.setHours(o, a, d, 0) / 1e3, r.period || (r.period = t.getDay() === 1 ? 72 : 24);
      break;
    case s.DELAYED:
      e.delay && e.delay > 0 && (r.delay = `${e.delay}`);
      break;
    case s.APPROVED:
      r.approved = "1";
      break;
    default:
      e.period !== 0 && (r.period = e.period);
  }
  return r;
}
function w(e, r) {
  return new Promise(
    (t, n) => setTimeout(
      () => r === void 0 ? t("ok") : n(r),
      e
    )
  );
}
function j(e, r, t) {
  return Promise.race([e, w(r, t)]);
}
function X(e) {
  const r = new RegExp(`[?&]${e}=([^&]*)`).exec(window.location.search);
  return r && decodeURIComponent(r[1].replace(/\+/g, " "));
}
export {
  c as API,
  l as CSS,
  p as EVENTS,
  s as MODERATION,
  b as STORAGE,
  O as anonymize,
  h as attachedMedia,
  _ as attrs,
  k as brandLogo,
  g as camelCase,
  E as camelCasedProps,
  L as camelize,
  P as capitalizeFirstLetter,
  m as clearContents,
  x as deepMerge,
  I as filterAttributes,
  $ as formatContent,
  F as getKey,
  X as getParameterByName,
  v as hashSum,
  U as intToString,
  M as log,
  Y as moderation,
  S as numberFormatter,
  C as randomValue,
  y as rtl,
  B as sanitize,
  G as shuffleMessages,
  W as stringGen,
  H as typeCss,
  T as upDownColor,
  K as widgetParams,
  j as wrapPromise
};
