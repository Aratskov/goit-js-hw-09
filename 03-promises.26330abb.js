var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire7bc7;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire7bc7=o);var r=o("iQIUW");const i=document.querySelector(".form");function l(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n&&o(`✅ Fulfilled promise ${e} in ${t}ms`),r(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}i.addEventListener("submit",(function(e){e.preventDefault();const t=i.elements;let n=+t.delay.value;const o=+t.step.value,s=+t.amount.value;for(let e=1;e<=s;e++)l(e,n).then((e=>{r.Notify.success(e)})).catch((e=>{r.Notify.failure(e)})),n+=o}));
//# sourceMappingURL=03-promises.26330abb.js.map
