!function(){"use strict";const t=function(e){return new t.prototype.init(e)};t.prototype.init=function(t){return t?t.tagName?(this[0]=t,this.length=1,this):(Object.assign(this,document.querySelectorAll(t)),this.length=document.querySelectorAll(t).length,this):this},t.prototype.init.prototype=t.prototype,window.$=t;var e=t;e.prototype.show=function(){for(let t=0;t<this.length;t++)this[t].style&&(this[t].style.display="");return this},e.prototype.hide=function(){for(let t=0;t<this.length;t++)this[t].style&&(this[t].style.display="none");return this},e.prototype.toggle=function(){for(let t=0;t<this.length;t++)this[t].style&&("none"===this[t].style.display?this[t].style.display="":this[t].style.display="none");return this},e.prototype.addClass=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];for(let t=0;t<this.length;t++){if(!this[t].classList||!e)return this;this[t].classList.add(...e)}return this},e.prototype.removeClass=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];for(let t=0;t<this.length;t++){if(!this[t].classList||!e)return this;this[t].classList.remove(...e)}return this},e.prototype.toggleClass=function(t){for(let e=0;e<this.length;e++){if(!this[e].classList||!t)return this;this[e].classList.toggle(t)}return this},e.prototype.on=function(t,e){if(!t||!e)return this;for(let i=0;i<this.length;i++)this[i].addEventListener(t,e);return this},e.prototype.removeEvent=function(t,e){if(!t||!e)return this;for(let i=0;i<this.length;i++)this[i].removeEventListener(t,e);return this},e.prototype.click=function(t){for(let e=0;e<this.length;e++)t?this[e].addEventListener("click",t):this[e].click();return this},e.prototype.setAttr=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";for(let i=0;i<this.length;i++)this[i].setAttribute(t,e)},e.prototype.removeAttr=function(t){for(let e=0;e<this.length;e++)this[e].removeAttribute(t)},e.prototype.toggleAttr=function(t){for(let e=0;e<this.length;e++)this[e].toggleAttribute(t)},e.prototype.hasAttr=function(t){for(let e=0;e<this.length;e++)if(this[e].hasAttribute(t))return!0},e.prototype.getAttr=function(t){for(let e=0;e<this.length;e++)return this[e].getAttribute(t)},e.prototype.html=function(t){for(let e=0;e<this.length;e++){if(!t)return this[e].innerHTML;this[e].innerHTML=t}return this},e.prototype.eq=function(t){const e=this[t],i=Object.keys(this).length;for(let t=0;t<i;t++)delete this[t];return this[0]=e,this.length=1,this},e.prototype.index=function(){return[...this[0].parentNode.children].findIndex((t=>t===this[0]))},e.prototype.find=function(t){let e=0,i=0;const s=Object.assign({},this);for(let n=0;n<s.length;n++){const o=s[n].querySelectorAll(t);if(0!=o.length){for(let t=0;t<o.length;t++)this[i]=o[t],i++;e+=o.length}}this.length=e;const n=Object.keys(this).length;for(;e<n;e++)delete this[e];return this},e.prototype.closest=function(t){let e=0;for(let i=0;i<this.length;i++){if(!this[i].closest(t))return;this[i]=this[i].closest(t),e++}const i=Object.keys(this).length;for(;e<i;e++)delete this[e];return this},e.prototype.siblings=function(){let t=0,e=0;const i=Object.assign({},this);for(let s=0;s<i.length;s++){const n=i[s].parentNode.children;for(let t=0;t<n.length;t++)i[s]!==n[t]&&(this[e]=n[t],e++);t+=n.length-1}this.length=t;const s=Object.keys(this).length;for(;t<s;t++)delete this[t];return this},e.prototype.animateOverTime=function(t,e,i){let s;return function n(o){s||(s=o);let l=o-s,r=Math.min(l/t,1);e(r),l<t?requestAnimationFrame(n):"function"==typeof i&&i()}},e.prototype.fadeIn=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"block",i=arguments.length>2?arguments[2]:void 0;for(let s=0;s<this.length;s++){this[s].style.display=e;const n=t=>{this[s].style.opacity=t},o=this.animateOverTime(t,n,i);requestAnimationFrame(o)}return this},e.prototype.fadeOut=function(t,e){for(let i=0;i<this.length;i++){const s=t=>{this[i].style.opacity=1-t,1===t&&(this[i].style.display="none")},n=this.animateOverTime(t,s,e);requestAnimationFrame(n)}return this},e.prototype.fadeToggle=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"block",i=arguments.length>2?arguments[2]:void 0;for(let s=0;s<this.length;s++)if("none"===window.getComputedStyle(this[s]).display){this[s].style.display=e;const n=t=>{this[s].style.opacity=t},o=this.animateOverTime(t,n,i);requestAnimationFrame(o)}else{const e=t=>{this[s].style.opacity=1-t,1===t&&(this[s].style.display="none")},n=this.animateOverTime(t,e,i);requestAnimationFrame(n)}return this},e.prototype.dropdown=function(){for(let t=0;t<this.length;t++){const i=e(this[t]).getAttr("id");e(this[t]).click((()=>{e(`[data-toggle-id="${i}"]`).fadeToggle(300)}))}},e(".dropdown-toggle").dropdown(),e.prototype.modal=function(t){for(let i=0;i<this.length;i++){const s=e(this[i]).getAttr("data-target");e(this[i]).click((t=>{t.preventDefault(),e(s).fadeIn(300),document.body.style.overflow="hidden"})),document.querySelectorAll(`${s} [data-close]`).forEach((i=>{e(i).click((i=>{e(s).fadeOut(300),document.body.style.overflow="",t&&setTimeout((()=>{document.querySelector(s).remove()}),500)}))})),e(s).click((i=>{i.target.classList.contains("modal")&&(e(s).fadeOut(300),document.body.style.overflow="",t&&setTimeout((()=>{document.querySelector(s).remove()}),500))}))}},e('[data-toggle="modal"]').modal(),e.prototype.createModal=function(){let{text:t,btns:i}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(let s=0;s<this.length;s++){const n=document.createElement("div");n.classList.add("modal"),n.setAttribute("id",this[s].getAttribute("data-target").slice(1));const o=[];for(let t=0;t<i.count;t++){const{settings:e}=i,s=document.createElement("button");s.textContent=e[t][0],s.classList.add("btn",...e[t][1]),e[t][2]&&s.setAttribute("data-close",!0),e[t][3]&&"function"==typeof e[t][3]&&s.addEventListener("click",e[t][3]),o.push(s)}n.innerHTML=`\n        <div class="modal-dialog">\n            <div class="modal-content">\n                <button class="close" data-close>\n                    <span>&times;</span>\n                </button>\n                <div class="modal-header">\n                    <div class="modal-title">${t.title}</div>\n                </div>\n                <div class="modal-body">${t.body}</div>\n                <div class="modal-footer"></div>\n            </div>\n        </div>\n    `,n.querySelector(".modal-footer").append(...o),document.body.append(n),e(this[s]).modal(!0),e(this[s].getAttribute("data-target")).fadeIn(300)}},e.prototype.tab=function(){for(let t=0;t<this.length;t++)e(this[t]).on("click",(()=>{e(this[t]).addClass("tab-item--active").siblings().removeClass("tab-item--active").closest(".tab").find(".tab-content").eq(e(this[t]).index()).addClass("tab-content--active").siblings().removeClass("tab-content--active")}))},e("[data-tabpanel] .tab-item").tab(),e.prototype.accordion=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"accordion-head--active",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"accordion-content--active",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:40;for(let n=0;n<this.length;n++)e(this[n]).click((()=>{e(this[n]).toggleClass(t),e(this[n].nextElementSibling).toggleClass(i),this[n].classList.contains(t)?this[n].nextElementSibling.style.maxHeight=this[n].nextElementSibling.scrollHeight+s+"px":this[n].nextElementSibling.style.maxHeight="0px"}))},e(".accordion-head").accordion(),e.prototype.carousel=function(){for(let t=0;t<this.length;t++){const i=window.getComputedStyle(this[t].querySelector(".carousel-inner")).width,s=this[t].querySelectorAll(".carousel-item"),n=this[t].querySelector(".carousel-slides"),o=this[t].querySelectorAll(".carousel-indicators li");n.style.width=100*s.length+"%",s.forEach((t=>{t.style.width=i}));let l=0,r=0;e(this[t].querySelector('[data-slide="next"]')).click((t=>{t.preventDefault(),l==+i.replace(/\D/g,"")*(s.length-1)?l=0:l+=+i.replace(/\D/g,""),n.style.transform=`translateX(-${l}px)`,r==s.length-1?r=0:r++,o.forEach((t=>t.classList.remove("active"))),o[r].classList.add("active")})),e(this[t].querySelector('[data-slide="prev"]')).click((t=>{t.preventDefault(),0==l?l=+i.replace(/\D/g,"")*(s.length-1):l-=+i.replace(/\D/g,""),n.style.transform=`translateX(-${l}px)`,0==r?r=s.length-1:r--,o.forEach((t=>t.classList.remove("active"))),o[r].classList.add("active")}));const a=this[t].getAttribute("id");e(`#${a} .carousel-indicators li`).click((t=>{const e=t.target.getAttribute("data-slide-to");r=e,l=+i.replace(/\D/g,"")*e,n.style.transform=`translateX(-${l}px)`,o.forEach((t=>t.classList.remove("active"))),o[r].classList.add("active")}))}},e(".carousel").carousel(),e.prototype.get=async function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"json",i=await fetch(t);if(!i.ok)throw new Error(`Could not fetch ${t}, status: ${i.status}`);switch(e){case"json":return await i.json();case"text":return await i.text();case"blob":return await i.blob()}},e.prototype.post=async function(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",s=await fetch(t,{method:"POST",body:e});switch(i){case"json":return await s.json();case"text":return await s.text();case"blob":return await s.blob()}}}();