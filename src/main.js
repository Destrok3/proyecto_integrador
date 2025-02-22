import './sass/main.scss'

const contenedorProductos = document.getElementById('container-productos')

const start = () => {
    console.warn('Se cargó todo el HTML')
    let html = ''
    productos.forEach(prod => {
        console.log(prod)
        html += `<div class="card">
            <article class="card__article">
                <div class="card__image-container">
                    <img class="card__image" src="${prod.foto}" alt="${prod.nombre}">
                </div>
                <div class="card__content">
                    <h2 class="card__heading">${prod.nombre}</h2>
                    <div class="card__description">
                        <p>${prod.descripcion}</p>
                    </div>
                </div>
            </article>
        </div>`
    })
    contenedorProductos.innerHTML = html
}