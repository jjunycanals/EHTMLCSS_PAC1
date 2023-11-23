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
            content.innerHTML += `
                <header>
                    <h1 class="title-category">${element.titol}</h1>
                    <p class="subtitle">${element.lloc}</p>
                    <time class="data" datetime="${element.data}">${element.data}</time>
                </header>
                <section class="detail">  
                    <div class="detail-photo">
                        <figure>
                            <img class="detail-img" src="./img/${element.detall.multimedia}" alt="${element.data}">
                            <figcaption>${element.lloc}</figcaption>
                        </figure>
                    </div>
                    <div class="detail-text">     
                        <p>${element.detall.text}</p>
                    </div>
                </section>
                `;
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {printDetail();});