import{f as m,i as h}from"./vendor-4338649a.js";let d;const e=document.querySelector("[data-start]");e.disabled=!0;m("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){d=t[0],d<new Date?(e.disabled=!0,h.error({message:"Please choose a date in the future"})):e.disabled=!1}});e.addEventListener("click",()=>{e.disabled=!0;const t={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")},o=()=>{const s=d-new Date;if(s<=0){clearInterval(countdownInterval),t.days.textContent="00",t.hours.textContent="00",t.minutes.textContent="00",t.seconds.textContent="00";return}const{days:u,hours:c,minutes:r,seconds:a}=f(s);t.days.textContent=n(u),t.hours.textContent=n(c),t.minutes.textContent=n(r),t.seconds.textContent=n(a)};o(),countdownInterval=setInterval(o,1e3)});function n(t){return t<10?`0${t}`:t}function f(t){const r=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:a,minutes:i,seconds:l}}
//# sourceMappingURL=1-timer-d819616e.js.map
