let carrito = [];
const totalElement = document.getElementById('total');
const listaCarrito = document.getElementById('lista-carrito');

document.querySelectorAll('.agregar').forEach(boton => {
    boton.addEventListener('click', agregarAlCarrito);
});



function agregarAlCarrito(event) {
    const producto = event.target.parentElement;
    const id = producto.getAttribute('data-id');
    const nombre = producto.getAttribute('data-nombre');
    const precio = parseFloat(producto.getAttribute('data-precio'));

    const itemCarrito = { id, nombre, precio };
    carrito.push(itemCarrito);
    actualizarCarrito();
}

function actualizarCarrito() {
    listaCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        listaCarrito.appendChild(li);
        total += item.precio;
    });

    totalElement.textContent = total.toFixed(2);
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();

}

document.getElementById('vaciar-carrito').addEventListener('click' , vaciarCarrito);