document.querySelectorAll(".num").forEach(t=>{let e=0,a=parseInt(t.getAttribute("data-val")),l=setInterval(function(){e+=1,t.textContent=e,e==a&&clearInterval(l)},Math.floor(5e3/a))});
//# sourceMappingURL=index.4ac1469f.js.map
