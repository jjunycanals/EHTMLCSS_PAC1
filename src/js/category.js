import category from '../data/category.js';
var datosjson = category;

function printCat() {
    const content = document.getElementById('grid-cat');
    var i = 0;
    if (content){
        datosjson.forEach(element => {
            i += 1;
            content.innerHTML += `
                <article class="category">
                    <div class="cat-header">
                        <span>${i}</span>
                        <div class="cat-img"><img src="./img/${element.detall.multimedia}" alt="${element.titol}"></div>
                    </div>
                    <div class="cat-body">
                        <span>${element.data}</span>
                        <h2>${element.titol}</h2>
                        <a href="detail.html?id=${i}" id="${i}" class="cat-link">Més informació</a>
                    </div>
                </article>
            `;
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {printCat();});

