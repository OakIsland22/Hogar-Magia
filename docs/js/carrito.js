// carrito.js
function getCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || {};
}

function guardarCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(producto) {
  const carrito = getCarrito();
  carrito[producto.producto_id] = producto;
  guardarCarrito(carrito);
}

function obtenerTotalCarrito() {
  const carrito = getCarrito();
  return Object.values(carrito).reduce((total, p) => total + p.precio, 0);
}
