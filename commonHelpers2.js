import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */function m(e,t){localStorage.setItem(e,JSON.stringify(t))}function a(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}const o=document.querySelector(".js-feedback-form");o.addEventListener("submit",n);o.addEventListener("input",n);i();function n(e){const t=o.elements.message.value.trim(),r=o.elements.email.value.trim(),s={email:r,message:t};if(e.type==="input")m("feedback-form-state",s);else if(e.type==="submit"){if(e.preventDefault(),!t||!r)return alert("All form fields must be filled in");console.log(s),e.target.reset(),localStorage.removeItem("feedback-form-state")}}function i(){const e=a("feedback-form-state");o.elements.email.value=(e==null?void 0:e.email)||"",o.elements.message.value=(e==null?void 0:e.message)||""}
//# sourceMappingURL=commonHelpers2.js.map