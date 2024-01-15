var a,e=document.getElementById("nav"),i=document.getElementById("logo"),l=(a=window.location.pathname.split("/"))[a.length-1];e.innerHTML=`
<li ${"index.html"===l?'class="active"':""}><a href="index.html">Cover</a></li>
<li ${"category.html"===l?'class="active"':""}><a href="category.html">Category</a></li>
<li ${"main.html"===l?'class="active"':""}><a href="main.html">Main Presentation</a></li>
<li ${"links.html"===l?'class="active"':""}><a href="links.html">Links</a></li>
`,i.innerHTML=`
<a href="index.html" class="log"><img src="../img/logo2.jpg" title="Logo de suites" alt="Logo amb una corbata en blanc i negre"></a>
<h1 class="title-header"><a href="index.html">Suits <i>Addiction</i></a></h1>
`;
//# sourceMappingURL=index.d4bbf819.js.map
