"use strict";var slider=function(){if(document.querySelector(".js-slider")){var e=document.querySelectorAll(".js-slide"),t=document.querySelector(".js-btn-prev"),s=document.querySelector(".js-btn-next"),i=e.length-1,n=0;e[n+1].classList.add("section__slide--next"),e[n].classList.add("section__slide--active");var c=function(s){s.target===t?n>0?n--:n=i:n<i?n++:n=0,e.forEach((function(e){e.classList.remove("section__slide--active"),e.classList.remove("section__slide--next")})),e[n].classList.add("section__slide--active"),e[(n+1)%e.length].classList.add("section__slide--next")};s.addEventListener("click",c),t.addEventListener("click",c)}};document.addEventListener("DOMContentLoaded",(function(){slider()}));
//# sourceMappingURL=main.js.map
