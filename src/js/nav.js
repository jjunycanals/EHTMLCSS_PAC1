var nav = document.getElementById('nav');
var logo = document.getElementById('logo');
var currentPage = getCurrentPageName();

nav.innerHTML = `
<li ${currentPage === 'index.html' ? 'class="active"' : ''}><a href="index.html">Cover</a></li>
<li ${currentPage === 'category.html' ? 'class="active"' : ''}><a href="category.html">Category</a></li>
<li ${currentPage === 'main.html' ? 'class="active"' : ''}><a href="main.html">Main Presentation</a></li>
<li ${currentPage === 'links.html' ? 'class="active"' : ''}><a href="links.html">Links</a></li>
`;

// Per obtenir la URL de la pagian que ens trobem i poder treballar amb l'element .active al NAV
function getCurrentPageName() {
    var pathArray = window.location.pathname.split('/');
    return pathArray[pathArray.length - 1];
}

logo.innerHTML = `
<a href="index.html" class="log"><img src="../img/logo2.jpg" title="Logo de suites" alt="Logo amb una corbata en blanc i negre"></a>
<h1 class="title-header"><a href="index.html">Suits <i>Addiction</i></a></h1>
`;