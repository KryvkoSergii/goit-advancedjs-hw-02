import{i as l}from"./vendor-77e16229.js";const a=document.querySelectorAll(".snackbar-section form")[0],r=document.querySelectorAll(".snackbar-section button")[0];function i(o,t){console.log(o+t),new Promise((e,c)=>{setTimeout(()=>{t==="fulfilled"?e(`✅ Fulfilled promise in ${o}ms`):c(`❌ Rejected promise in ${o}ms`)},o)}).then(e=>{l.show({message:e,position:"topRight",backgroundColor:"rgb(0,128,0)",messageColor:"rgb(255,255,255)"})}).catch(e=>{l.show({message:e,position:"topRight",backgroundColor:"rgb(250,128,114)",messageColor:"rgb(255,255,255)"})})}const s=localStorage.getItem("delay"),n=localStorage.getItem("selectedRadioBtnValue");s&&n&&(i(s,n),localStorage.removeItem("delay"),localStorage.removeItem("selectedRadioBtnValue"));r.addEventListener("click",o=>{const t=a.elements.delay.value,e=a.elements.state.value;localStorage.setItem("delay",t),localStorage.setItem("selectedRadioBtnValue",e)});
//# sourceMappingURL=2-snackbar-258ca193.js.map
