// Variables globales
const carrito = [];
let total = 0;

// FunciÃ³n para agregar productos al carrito
function agregarAlCarrito(productoId) {
  // AquÃ­ debes implementar la lÃ³gica para agregar el producto al carrito
  // Puedes buscar el producto en tu base de datos o definir un objeto con productos en el script

  // Ejemplo: Obtener el producto por su ID y agregarlo al carrito
  const producto = obtenerProductoPorId(productoId);

  if (producto) {
    carrito.push(producto);
    total += producto.precio;
    actualizarCarrito();
  }
}

// FunciÃ³n para actualizar la visualizaciÃ³n del carrito
function actualizarCarrito() {
  const listaCarrito = document.getElementById('lista-carrito');
  const totalElemento = document.getElementById('total');

  // Limpiar el contenido anterior del carrito
  listaCarrito.innerHTML = '';

  // Mostrar los productos en el carrito
  carrito.forEach(producto => {
    const listItem = document.createElement('li');
    listItem.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
    listaCarrito.appendChild(listItem);
  });

  // Actualizar el total
  totalElemento.textContent = total.toFixed(2);
}

// FunciÃ³n para realizar un pedido
function realizarPedido() {
  // AquÃ­ debes implementar la lÃ³gica para procesar el pedido
  // Puedes enviar la informaciÃ³n del carrito al servidor o realizar otras acciones necesarias

  // Ejemplo: Mostrar un mensaje de confirmaciÃ³n
  alert('Pedido realizado con Ã©xito. Gracias por tu compra!');
}

// Esta funciÃ³n deberÃ­a ser personalizada segÃºn tu aplicaciÃ³n para obtener productos por ID
function obtenerProductoPorId(productoId) {
  // AquÃ­ debes implementar la lÃ³gica para buscar el producto por su ID
  // Puedes tener un array de productos o realizar una consulta al servidor

  // Ejemplo: Retornar un objeto de producto (deberÃ­as adaptar esto segÃºn tu estructura de datos)
  return {
    id: productoId,
    nombre: `Producto ${productoId}`,
    descripcion: `DescripciÃ³n del Producto ${productoId}`,
    precio: 19.99 // Precio de ejemplo
  };
}

// Configuración de las particulas
particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: '#42D6C0' }, // Cambia esto al color que desees, por ejemplo, '#00ff00' para verde
      shape: { type: 'circle' },
      opacity: { value: 1, random: false },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: '#42D6C0', opacity: 0, width: 1 },
      move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
    },
    interactivity: { detect_on: 'canvas', events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true }, modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } } },
    retina_detect: true
  });