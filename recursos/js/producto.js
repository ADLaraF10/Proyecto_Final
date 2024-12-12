document.addEventListener('DOMContentLoaded', () => {
    const DOMnombre = document.getElementById('nombre')
    const DOMimg  = document.getElementById('imagenProducto')
    const DOMdescripcion =  document.getElementById('descripcion')
    const DOMbotonAgregar = document.querySelector('.agregar')
    

    const baseDeDatos = JSON.parse(localStorage.getItem('baseDeDatos'))
    const producto = JSON.parse(localStorage.getItem('producto'))

    const carrito = JSON.parse(localStorage.getItem('carrito'))

    const miItem = baseDeDatos.filter((itemBaseDatos) => {
        return itemBaseDatos.id === parseInt(producto);
    });

    DOMnombre.textContent = miItem[0].nombre;
    DOMimg.src = miItem[0].imagen;
    DOMdescripcion.textContent = miItem[0].descripcion
    
    DOMbotonAgregar.addEventListener('click',agregarCarrito)

    function agregarCarrito() {
        carrito.push(producto)
        agregarAlStorage();
        handleCarritoValue(JSON.parse(localStorage.getItem('carrito')).length)
    }

    function agregarAlStorage(){
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function handleCarritoValue(value) {
        const carritoContainer = document.getElementById("carrito-value");
        carritoContainer.textContent = `${value}`;
    }

    
    if(JSON.parse(localStorage.getItem('carrito')) != null){
        if(JSON.parse(localStorage.getItem('carrito')).length != 0){
            handleCarritoValue(JSON.parse(localStorage.getItem('carrito')).length)
        }
    }
})
    