function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){n[e]=o},o.parcelRequired7c6=i);var l=i("eWCmQ");function r(e,o){const t=new Promise(((n,i)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:o}):i({position:e,delay:o}),console.log(t)}),o)}));return t}document.querySelector(".form").addEventListener("submit",(function(o){o.preventDefault();const t=o.target.elements;console.log(t);const n={delay:Number(t.delay.value),step:Number(t.step.value),amount:Number(t.amount.value)};console.log(n);for(let o=1;o<=n.amount;o+=1)r(o,n.delay).then((({position:o,delay:t})=>{e(l).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(l).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`)})),n.delay+=n.step,console.log("dalay",n.delay)})),e(l).Notify.init({position:"right-top",width:"300px",distance:"10px",opacity:1,rtl:!1,timeout:4e3});
//# sourceMappingURL=03-promises.3475ee20.js.map
