import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const t=document.querySelector(".feedback-form"),a="feedback-form-state";let n={};t.addEventListener("input",r);function r(m){const e=t.email.value.trim(),s=t.message.value.trim();localStorage.setItem(a,JSON.stringify({email:e,message:s}))}t.addEventListener("submit",c);function c(m){m.preventDefault();const e=JSON.parse(localStorage.getItem(a))??{},s=e.email===void 0||e.message===void 0,o=e.email===""||e.message==="";if(s||o){alert("Заповніть усі поля");return}const l=e.email,i=e.message;localStorage.removeItem(a),t.reset(),console.log({email:l,message:i})}const d=localStorage.getItem(a)??"";try{n=JSON.parse(d),t.email.value=n.email.trim(),t.message.value=n.message.trim()}catch{console.log("Усі поля повинні бути заповненими")}
//# sourceMappingURL=2-form.js.map
