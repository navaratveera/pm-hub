/* PM Hub shared header + footer.
   Usage: <script src="../shared/nav.js" data-root="../"></script> (data-root="./" on the hub page).
   The menu comes from tools.json, so a new tool only needs a line there. */
(function(){
  var me=document.currentScript, root=(me&&me.dataset.root)||"./";
  var LOGO='<svg width="28" height="28" viewBox="0 0 26 26" aria-hidden="true"><rect width="26" height="26" rx="7" fill="#1C6FE0"/><path d="M5 7h9l2 1.5-2 1.5H5z" fill="#fff"/><path d="M9 11.5h11l2 1.5-2 1.5H9z" fill="#BFDBFE"/><path d="M7 16h8l2 1.5-2 1.5H7z" fill="#fff"/></svg>';
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}

  var top=document.createElement("header"); top.className="hub-top";
  top.innerHTML='<div class="wrap hub-top-in"><a class="hub-brand" href="'+root+'">'+LOGO+'<span>PM Hub</span></a><nav class="hub-nav" aria-label="Tools"></nav></div>';
  document.body.insertBefore(top,document.body.firstChild);

  var foot=document.createElement("footer"); foot.className="hub-foot";
  foot.innerHTML='&copy; 2026 <b>Navarat Veerawongchai</b> All rights reserved.';
  document.body.appendChild(foot);

  window.PMHub={root:root,tools:fetch(root+"tools.json",{cache:"no-cache"}).then(function(r){return r.json()}).then(function(d){return d.tools||[]})};
  window.PMHub.tools.then(function(tools){
    var here=location.pathname.replace(/index\.html$/,"");
    top.querySelector(".hub-nav").innerHTML=tools.filter(function(t){return t.status==="live"}).map(function(t){
      var href=root+t.path, cur=here.slice(-t.path.length)===t.path;
      return '<a href="'+href+'"'+(cur?' aria-current="page"':'')+'>'+esc(t.name)+'</a>';
    }).join("");
  }).catch(function(){});
})();
