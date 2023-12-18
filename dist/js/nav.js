var a,e,i,l;a=document.getElementById("nav"),e=document.getElementById("logo"),i=(l=window.location.pathname.split("/"))[l.length-1],a.innerHTML=`
<li ${"index.html"===i?'class="active"':""}><a href="index.html">Cover</a></li>
<li ${"category.html"===i?'class="active"':""}><a href="category.html">Category</a></li>
<li ${"main.html"===i?'class="active"':""}><a href="main.html">Main Presentation</a></li>
<li ${"links.html"===i?'class="active"':""}><a href="links.html">Links</a></li>
`,e.innerHTML=`
<a href="index.html" class="log"><img src="../img/logo2.jpg" title="Logo de suites" alt="Logo amb una corbata en blanc i negre"></a>
<h1 class="title-header"><a href="index.html">Suits <i>Addiction</i></a></h1>
`;
//# sourceMappingURL=nav.js.map
