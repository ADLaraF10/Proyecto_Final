
document.addEventListener('DOMContentLoaded', () => {
    /*VARIABLES*/

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
            id: 3,
            nombre: 'teclado',
            descripcion: 'descripcion',
            precio: 20000,
            imagen: 'recursos/img/LogoIcono.png',
            categoria: 'pc'
        },
    ];
    const DOMitems = document.querySelector('#items');
    const divisa = "$"

    let carrito = []
    let producto = 0;


    function render() {
        baseDeDatos.forEach((dato) => {
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4', 'bg-black', 'm-2', 'p-1', 'justify-content-center');
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body', 'bg-dark', 'p-0');
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
            miNodoFooter.classList.add('d-flex', 'justify-content-between', 'align-items-center')
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text', 'text-secondary', 'mx-2');
            miNodoPrecio.textContent = `${dato.precio}${divisa}`;
            const NodoBoton = document.createElement('a')
            NodoBoton.classList.add('btn')
            NodoBoton.href = 'producto.html'
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary', 'm-2');
            miNodoBoton.textContent = 'Comprar';
            miNodoBoton.setAttribute('marcador', dato.id);
            miNodoBoton.addEventListener('click', guardarId);
            miNodoCardBody.appendChild(miNodoImagen)
            miNodoCardBody.appendChild(miNodoTitle)
            NodoBoton.appendChild(miNodoBoton)
            miNodoCardBody.appendChild(miNodoDescripcion)
            miNodoFooter.appendChild(miNodoPrecio)
            miNodoFooter.appendChild(NodoBoton)
            miNodoCardBody.appendChild(miNodoFooter)
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo)
        })
    }

    function guardarId(evento) {
        producto = evento.target.getAttribute('marcador');
        agregarAlStorage();
        handleCarritoValue(JSON.parse(localStorage.getItem('carrito')).length)
    }

    function agregarAlStorage(){
        localStorage.setItem('producto', JSON.stringify(producto));
    }

    function AlmacenarDatos(){
        localStorage.setItem('baseDeDatos', JSON.stringify(baseDeDatos));
    }

    function handleCarritoValue(value) {
        const carritoContainer = document.getElementById("carrito-value");
        carritoContainer.textContent = `${value}`;
    }
    
    AlmacenarDatos()
    render()

    
    if(JSON.parse(localStorage.getItem('carrito')) != null){
        if(JSON.parse(localStorage.getItem('carrito')).length != 0){
            handleCarritoValue(JSON.parse(localStorage.getItem('carrito')).length)
        }
    }
});