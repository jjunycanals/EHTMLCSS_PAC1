import category from '../data/category.js';
var datosjson = category;

function printDetail() {
    const content = document.getElementById('cat-detail');
    var i = 0;
    datosjson.forEach(element => {
        i += 1;
        // obtenir l'id de la categoria de la URL
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        if (i == id) {
            // Poder obtenir un llistat i mostrar-ho al detall una llista
            var llistat= '';
            element.detall.llistat.forEach(e=> { llistat += `<li>${e}</li>`;});

            content.innerHTML += `
                <header>
                    <h1 class="title-category">${element.titol}</h1>
                    <p class="subtitle">${element.lloc}</p>
                    <time class="data" datetime="${element.data}">${element.data}</time>
                </header>
                <div class="detail-sup">
                    <section class="detail">  
                        <div class="detail-photo">
                            <figure>
                                <img class="detail-img" src="./img/${element.detall.multimedia}" alt="${element.data}">
                                <figcaption>${element.lloc}</figcaption>
                            </figure>
                        </div>
                        <div class="detail-text">    
                            <p>${element.detall.text}</p>
                            <ul class="llista">
                                ${llistat}
                            </ul>
                        </div>
                        
                    </section>
                    <section class="detail">
                        <div class="video">
                            <iframe src="${element.detall.video}" frameborder="0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <p>Video author: <a src="${element.detall.authorvideo}">${element.detall.authorname}</a>  </p>
                        </div>
                        <div class="related">
                            <h3>Related content of the same category<h3>
                            <ul>
                                ${relatedCategories(element, i)}
                            </ul>
                        </div>
                    </section>
                </div>
                `;
        }
    });
}

// Funció per a Obtenir elements relacionats de la mateixa Categoria que el detall que està visualitzant l'usuari
function relatedCategories (element, i) {
    var cat= '';
    var j = 0;
    datosjson.forEach(item => {
        j += 1;
        if (item.categoria === element.categoria && i != j) {
            cat += `<li><a href="detail.html?id=${j}" id="${j}" class="cat-link2">${item.titol}</a></li>`;
        }        
    });
    return cat;
}
document.addEventListener('DOMContentLoaded', () => {printDetail();});