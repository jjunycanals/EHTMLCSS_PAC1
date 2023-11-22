function printCat() {
    const content = document.getElementById('grid-cat');
    fetch('./data/category.json')
        .then(response => response.json())
        .then(data => {
            var i = 0;
            if (content){
                data.forEach(element => {
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
                                <a href="" class="cat-link">Més informació</a>
                            </div>
                        </article>
                    `;
                });
            }
        })
        .catch(e => console.log(e))
}


document.addEventListener('DOMContentLoaded', () => {printCat();});