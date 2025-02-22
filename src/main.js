import './sass/main.scss'

const contenedorProductos = document.getElementById('container-productos')

const start = () => {
    console.warn('Se cargó todo el HTML')
    let html = ''
    productos.forEach(prod => {
        console.log(prod)
        html += `<div class="card"> 
                <article class="card__article">
                  <div class="card__img-container">
                    <img class="card__image" src="${prod.foto}" alt="${prod.nombre}">
                      </div>
                       <div class="card__content"></div>
                        <h2 class="card__heading">${prod.nombre}</h2>
                         <div class="card__descrption">${prod.descripcion}<p>
                            </p> 
                         </div>
                      </div>
                   </article>
                </div>
`
    })
    contenedorProductos.innerHTML = html
}

window.addEventListener('DOMContentLoaded', start)