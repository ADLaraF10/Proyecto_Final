
document.addEventListener('DOMContentLoaded',()=>{
//variables
console.log('entre')
const baseDeDatos = [
    {
        id: 1,
        nombre: 'teclado',
        precio: 20000,
        imagen: 'recursos/img/Carucel.png',
        categoria: 'pc'
    },
    {
        id: 2,
        nombre: 'teclado',
        precio: 20000,
        imagen: 'recursos/img/Carucel.png',
        categoria: 'pc'
    },
];
const DOMitems = document.querySelector('#items');
const divisa = "$"

function render1(){
    baseDeDatos.forEach((dato) => {
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4', 'bg-black');
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body','p-2','bg-dark',);
        const miNodoTitle = document.createElement('h6');
        miNodoTitle.classList.add('card-title', 'text-primary');
        miNodoTitle.textContent = dato.nombre;
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', dato.imagen);
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text', 'text-primary');
        miNodoPrecio.textContent = `${dato.precio}${divisa}`;
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = 'Agregar';
        //miNodoBoton.setAttribute('marcador', data.id);
        miNodoCardBody.appendChild(miNodoImagen)
        miNodoCardBody.appendChild(miNodoTitle)
        miNodoCardBody.appendChild(miNodoPrecio)
        miNodoCardBody.appendChild(miNodoBoton)
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo)
    })
}

function render(){
    baseDeDatos.forEach((info) => {
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
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
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = 'Agregar';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anadirProductoAlCarrito);
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

render1()

});