(window.webpackJsonp=window.webpackJsonp||[]).push([["app_user_profile"],{"6aUB":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("QWBl"),n("zKZe"),n("tkto"),n("FZtP");function a(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};n=Object.assign({method:"GET",datas:{},json:!0},n);var a=null,o=Object.keys(n.datas);o.length>0&&(a=new FormData,o.forEach((function(e){a.append(e,n.datas[e])})));var r=new XMLHttpRequest;r.open(n.method,e),r.addEventListener("load",(function(){if(r.status<200&&r.status>=400)console.error("Echec HTTP : code".xhr.status);else{var e=r.response;if(n.json)try{e=JSON.parse(e)}catch(e){return console.error("Format JSON invalide"),!1}t(e)}})),r.send(a)}},tHGT:function(e,t,n){"use strict";n.r(t);var a=n("6aUB");document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("toggle-newsletter");e.addEventListener("click",(function(){e.setAttribute("disabled","true");var t=e.dataset.url;Object(a.a)(t,(function(t){e.removeAttribute("disabled"),e.checked=t.newsletter}),{method:"POST"})}))}))}},[["tHGT","runtime",0]]]);