import{f as h,i as y}from"./vendor-431c4315.js";let d,i;const t=document.querySelector("[data-start]");t.disabled=!0;h("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){d=e[0],d<new Date?(t.disabled=!0,y.error({message:"Please choose a date in the future"})):t.disabled=!1}});t.addEventListener("click",()=>{t.disabled=!0;const e={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")},o=()=>{const s=d-new Date;if(s<=0){clearInterval(i),e.days.textContent="00",e.hours.textContent="00",e.minutes.textContent="00",e.seconds.textContent="00";return}const{days:u,hours:c,minutes:r,seconds:a}=f(s);e.days.textContent=n(u),e.hours.textContent=n(c),e.minutes.textContent=n(r),e.seconds.textContent=n(a)};o(),i=setInterval(o,1e3),document.getElementById("datetime-picker").disabled=!0});function n(e){return e<10?`0${e}`:e}function f(e){const r=Math.floor(e/864e5),a=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:r,hours:a,minutes:l,seconds:m}}
//# sourceMappingURL=1-timer-79a79f4f.js.map
