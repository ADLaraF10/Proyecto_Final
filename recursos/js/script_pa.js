document.getElementById('colorSelect').addEventListener('change', function() {
    var colorSeleccionado = this.options[this.selectedIndex];
    var imagen = colorSeleccionado.getAttribute('data-image');
    document.getElementById('imagenProducto').src = imagen;
});