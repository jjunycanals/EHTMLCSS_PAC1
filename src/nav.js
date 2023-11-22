var nav = document.getElementById('nav');
var currentPage = getCurrentPageName();

nav.innerHTML = `
<li ${currentPage === 'main.html' ? 'class="active"' : ''}><a href="./main.html">Main</a></li>
<li ${currentPage === 'category.html' ? 'class="active"' : ''}><a href="./category.html">Category</a></li>
<li ${currentPage === 'content.html' ? 'class="active"' : ''}><a href="./content.html">Content</a></li>
<li ${currentPage === 'links.html' ? 'class="active"' : ''}><a href="./links.html">Links</a></li>
`;

// Per obtenir la URL de la pagian que ens trobem i poder treballar amb l'element .active al NAV
function getCurrentPageName() {
    var pathArray = window.location.pathname.split('/');
    return pathArray[pathArray.length - 1];
}