!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequire4c75;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequire4c75=a);var o=a("1WSnx"),n=document.querySelector(".feedback-form"),l=document.querySelector('input[type="email"]'),i=document.querySelector('textarea[name="message"]');n.addEventListener("input",(0,o.throttle)((function(e){c[e.target.name]=e.target.value,localStorage.setItem("feedbackFormState",JSON.stringify(c))}),500)),n.addEventListener("submit",(function(e){e.preventDefault();var t=localStorage.getItem("feedbackFormState"),r=JSON.parse(t);console.log(r),localStorage.removeItem("feedbackFormState"),e.target.reset()}));var c={};!function(){if(localStorage.getItem("feedbackFormState")){var e=localStorage.getItem("feedbackFormState"),t=JSON.parse(e);l.value=t.email,i.value=t.message}}()}();
//# sourceMappingURL=03-feedback.9bf567a8.js.map
