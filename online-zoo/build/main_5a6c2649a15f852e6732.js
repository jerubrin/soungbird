(()=>{"use strict";let t=document.querySelector("input.footer-right__email"),e=document.querySelector("button.footer-right__submit-btn"),o=document.querySelector("form.footer-right__form"),n=document.querySelector("form.donation__form"),i=document.querySelector("input.donation__input-money"),s=document.querySelector("input.donation__ragio-monthly"),a=document.querySelector("input.donation__ragio-once"),c=!1,r=!1,_=document.querySelectorAll(".donation__dot"),l=document.querySelectorAll(".donation__money-text"),m=null;if(t.onfocus=()=>{c||(t.classList.add("footer-right__email_active"),e.classList.add("footer-right__submit-btn_active"))},t.onblur=()=>{c||(t.classList.remove("footer-right__email_active"),e.classList.remove("footer-right__submit-btn_active"))},t.oninvalid=()=>{c=!0,t.classList.remove("footer-right__email_active"),e.classList.remove("footer-right__submit-btn_active"),t.classList.add("footer-right__email_mistake"),e.classList.add("footer-right__submit-btn_mistake")},o.onsubmit=()=>{c=!1,t.classList.remove("footer-right__email_active"),e.classList.remove("footer-right__submit-btn_active"),t.classList.remove("footer-right__email_mistake"),e.classList.remove("footer-right__submit-btn_mistake"),t.value="",t.blur()},n){i.onfocus=()=>{r||i.classList.add("donation__input-money_active")},i.onblur=()=>{i.classList.remove("donation__input-money_active")},i.oninvalid=()=>{i.classList.remove("donation__input-money_active"),i.classList.add("donation__input-money_mistake"),r=!0},s.oninvalid=()=>{i.classList.remove("donation__input-money_active"),i.classList.add("donation__input-money_mistake"),r=!0},n.onsubmit=()=>{i.classList.remove("donation__input-money_active"),i.classList.remove("donation__input-money_mistake"),setTimeout((()=>{i.value="",i.blur(),s.checked=!1,a.checked=!0,r=!1}),500)},m=2,console.log("activeIndex=",m),console.log("priceList=",_);for(let t of _)t.onclick=t=>d(t);for(let t of l)t.onclick=t=>d(t)}function u(t,e){for(let o=0;o<t.length;o++)if(t[o]==e)return o;return-1}function d(t){console.log(t.srcElement);let e=u(_,t.srcElement);e<0&&(e=u(l,t.srcElement)),_[m].classList.remove("donation__dot_active"),l[m].classList.remove("donation__money-text_active"),_[e].classList.add("donation__dot_active"),l[e].classList.add("donation__money-text_active"),m=e;let o=document.querySelector(".donation__digit");switch(m){case 0:o.textContent=20;break;case 1:o.textContent=8;break;case 2:o.textContent=4;break;case 3:o.textContent=2;break;case 4:o.textContent=1;break;case 5:o.textContent=.5;break;case 6:o.textContent=.25;break;default:o.textContent=0}}const v=document.querySelector(".header__burger-menu"),f=document.querySelector(".popup"),b=document.querySelector(".popup-back"),y=[...document.querySelectorAll(".popup a")],L=()=>{f.classList.add("display-none")};b.onclick=L,y.forEach((t=>t.onclick=L)),v.onclick=()=>{f.classList.remove("display-none")}})();