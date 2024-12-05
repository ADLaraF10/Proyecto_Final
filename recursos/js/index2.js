
document.addEventListener('DOMContentLoaded',()=>{
//variables
console.log('entre')
const baseDeDatos = [
    {
        id: 1,
        nombre: 'teclado',
        descripcion: 'descripcion',
        precio: 20000,
        imagen: 'recursos/img/LogoIcono.png',
        categoria: 'pc'
    },
    {
        id: 2,
        nombre: 'teclado',
        descripcion: 'descripcion',
        precio: 20000,
        imagen: 'recursos/img/LogoIcono.png',
        categoria: 'pc'
    },
];
const DOMitems = document.querySelector('#items');
const divisa = "$"

function render1(){
    baseDeDatos.forEach((dato) => {
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4','bg-black', 'm-2', 'p-1');
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body','bg-dark', 'p-0');
        const miNodoTitle = document.createElement('h6');
        miNodoTitle.classList.add('card-title', 'text-white', 'm-2');
        miNodoTitle.textContent = dato.nombre;
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid', 'w-3');
        miNodoImagen.setAttribute('src', dato.imagen);
        const miNodoDescripcion = document.createElement('p');
        miNodoDescripcion.classList.add('card-text', 'text-secondary', 'mx-2');
        miNodoDescripcion.textContent = dato.descripcion;
        const miNodoFooter = document.createElement('div')
        miNodoFooter.classList.add('d-flex')
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text', 'text-secondary', 'mx-2');
        miNodoPrecio.textContent = `${dato.precio}${divisa}`;
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary', 'm-2');
        miNodoBoton.textContent = 'Agregar';
        miNodoBoton.setAttribute('marcador', dato.id);
        miNodoCardBody.appendChild(miNodoImagen)
        miNodoCardBody.appendChild(miNodoTitle)
        miNodoCardBody.appendChild(miNodoDescripcion)
        miNodoFooter.appendChild(miNodoPrecio)
        miNodoFooter.appendChild(miNodoBoton)
        miNodoCardBody.appendChild(miNodoFooter)
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo)
    })
}

function render(){
    baseDeDatos.forEach((info) => {
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4', 'h-2');
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        const miNodoTitle = document.createElement('h6');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${info.precio}${divisa}`;
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add();
        miNodoBoton.textContent = 'Agregar';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anadirProductoAlCarrito);
        miNodo.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

render1()

});