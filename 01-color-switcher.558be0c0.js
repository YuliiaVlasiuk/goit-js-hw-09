!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");n.disabled=!0;var a=null;e.addEventListener("click",(function(){a=setInterval((function(){var a="#".concat(Math.floor(16777215*Math.random()).toString(16));t.style.backgroundColor=a,n.disabled=!1,e.disabled=!0}),1e3)})),n.addEventListener("click",(function(){n.disabled=!0,e.disabled=!1,clearInterval(a)}))}();
//# sourceMappingURL=01-color-switcher.558be0c0.js.map