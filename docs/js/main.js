const d = document;

const loginView = d.getElementById("login-view");
const storeView = d.getElementById("store-view");
const loginForm = d.getElementById("login-form");
const username = d.getElementById("username");
const password = d.getElementById("password");
const userError = d.getElementById("user-error");
const passError = d.getElementById("pass-error");

const productosContainer = d.getElementById("productos-container");
const carritoLista = d.getElementById("lista-carrito");
const totalCarrito = d.getElementById("total-carrito");
const btnCompra = d.getElementById("btn-compra");
const mensajeCompra = d.getElementById("mensaje-compra");

let carrito = {};

// Validar login
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  userError.textContent = "";
  passError.textContent = "";

  if (!username.value.trim()) {
    userError.textContent = "Usuario requerido";
    return;
  }
  if (!password.value.trim()) {
    passError.textContent = "Contraseña requerida";
    return;
  }

  loginView.classList.add("hidden");
  storeView.classList.remove("hidden");
  d.getElementById("main-content").classList.remove("hidden"); // volver a mostrar todo
  cargarProductos();
});

//Cargando Mis Productos
function cargarProductos() {
  const productos = [
    {
      id: 1,
      nombre: "Cojín Boho",
      precio: 130,
      descripcion: "Cojín suave con diseño bohemio y flecos",
      imagen: "https://i.imgur.com/Fc1yzKq.png"
    },
    {
      id: 2,
      nombre: "Vela de Vaso Ámbar",
      precio: 90,
      descripcion: "Vela con aroma a vainilla en frasco de vidrio",
      imagen: "https://i.imgur.com/dDCJOHd.png"
    },
    {
      id: 3,
      nombre: "Organizador de Cajones",
      precio: 75,
      descripcion: "Set de 4 compartimentos para ordenar tus cosas",
      imagen: "https://i.imgur.com/Bt6Qx4l.png"
    },
    {
      id: 4,
      nombre: "Cuadro Minimalista",
      precio: 150,
      descripcion: "Lienzo con diseño abstracto en blanco y negro",
      imagen: "https://i.imgur.com/ldqcgf7.png"
    },
    {
      id: 5,
      nombre: "Maceta Geométrica",
      precio: 85,
      descripcion: "Maceta de cerámica moderna para suculentas",
      imagen: "https://i.imgur.com/TH89rGx.png"
    },
    {
      id: 6,
      nombre: "Difusor de Aromas",
      precio: 290,
      descripcion: "Difusor eléctrico con luces LED",
      imagen: "https://i.imgur.com/XIDdxCE.png"
    },
    {
      id: 7,
      nombre: "Caja Organizadora de Tela",
      precio: 110,
      descripcion: "Caja plegable con tapa para closet o alacena",
      imagen: "https://i.imgur.com/qAFcQgO.png"
    },
    {
      id: 8,
      nombre: "Set de Velas Decorativas",
      precio: 160,
      descripcion: "Juego de 3 velas con diseño vintage",
      imagen: "https://i.imgur.com/ktHGFop.png"
    },
    {
      id: 9,
      nombre: "Reloj de Pared Minimalista",
      precio: 240,
      descripcion: "Reloj con fondo blanco y números negros",
      imagen: "https://i.imgur.com/keCSJBP.png"
    },
    {
      id: 10,
      nombre: "Lámpara LED de Noche",
      precio: 180,
      descripcion: "Luz cálida con forma de luna",
      imagen: "https://i.imgur.com/VuU4bt2.png"
    },
    {
      id: 11,
      nombre: "Estantería Flotante de Madera",
      precio: 320,
      descripcion: "Set de 2 repisas flotantes de madera rústica",
      imagen: "https://i.imgur.com/3UezpZw.png"
    },
    {
      id: 12,
      nombre: "Cuadro Floral Pastel",
      precio: 190,
      descripcion: "Lienzo con ilustración floral en tonos suaves",
      imagen: "https://i.imgur.com/hZkDztg.png"
    }
  ];

  productosContainer.innerHTML = "";
  productos.forEach(p => {
    const card = d.createElement("div");
    card.classList.add("producto");
    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p>$${p.precio.toFixed(2)}</p>
      <button class="agregar-carrito" data-id="${p.id}" data-nombre="${p.nombre}" data-precio="${p.precio}">Agregar</button>
    `;
    productosContainer.appendChild(card);
  });
}

// Agregar al carrito
d.addEventListener("click", e => {
  if (e.target.matches(".agregar-carrito")) {
    const id = e.target.dataset.id;
    const nombre = e.target.dataset.nombre;
    const precio = parseFloat(e.target.dataset.precio);

    if (carrito[id]) carrito[id].cantidad++;
    else carrito[id] = { nombre, precio, cantidad: 1 };

    actualizarCarrito();
  }
});

// Actualizar lista carrito
function actualizarCarrito() {
  carritoLista.innerHTML = "";
  let total = 0;

  Object.entries(carrito).forEach(([id, item]) => {
    total += item.precio * item.cantidad;
    const li = d.createElement("li");
    li.innerHTML = `
      <div style="display:flex; flex-direction: column; margin-bottom: 10px;">
        <span>${item.nombre} - $${item.precio.toFixed(2)}</span>
        <div class="cantidad-container">
          <button class="btn-disminuir" data-id="${id}">-</button>
          <input type="number" class="cantidad" data-id="${id}" value="${item.cantidad}" min="1" />
          <button class="btn-aumentar" data-id="${id}">+</button>
        </div>
      </div>
    `;
    carritoLista.appendChild(li);
  });

  totalCarrito.textContent = total.toFixed(2);
}

function quitarItem(id) {
  delete carrito[id];
  actualizarCarrito();
}

// Comprar
btnCompra.addEventListener("click", () => {
  if (Object.keys(carrito).length === 0) {
    alert("El carrito está vacío.");
    return;
  }

  mensajeCompra.classList.remove("hidden");

  setTimeout(() => {
    mensajeCompra.classList.add("hidden");
    carrito = {};
    actualizarCarrito();
    alert("¡Gracias por su compra!");
  }, 4000);
});

const loginViewDiv = d.getElementById("login-view");
const registerViewDiv = d.getElementById("register-view");

// Navegación entre login y registro
d.getElementById("go-register").addEventListener("click", (e) => {
  e.preventDefault();
  loginViewDiv.classList.add("hidden");
  registerViewDiv.classList.remove("hidden");
});

d.getElementById("go-login").addEventListener("click", (e) => {
  e.preventDefault();
  registerViewDiv.classList.add("hidden");
  loginViewDiv.classList.remove("hidden");
});

// Validación de registro
d.getElementById("register-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = d.getElementById("reg-name").value.trim();
  const email = d.getElementById("reg-email").value.trim();
  const pass = d.getElementById("reg-password").value.trim();
  const confirm = d.getElementById("reg-confirm").value.trim();
  const success = d.getElementById("reg-success");

  let valid = true;

  d.getElementById("reg-name-error").textContent = !name ? "El nombre es obligatorio" : "";
  d.getElementById("reg-email-error").textContent = !email.includes("@") ? "Correo inválido" : "";
  d.getElementById("reg-password-error").textContent = pass.length < 6 ? "Mínimo 6 caracteres" : "";
  d.getElementById("reg-confirm-error").textContent = pass !== confirm ? "Las contraseñas no coinciden" : "";

  if (!name || !email.includes("@") || pass.length < 6 || pass !== confirm) {
    valid = false;
  }

  if (valid) {
    success.textContent = "Cuenta creada. ¡Ahora inicia sesión!";
    setTimeout(() => {
      registerViewDiv.classList.add("hidden");
      loginViewDiv.classList.remove("hidden");
      success.textContent = "";
    }, 1500);
  }
});
// Simulación de login de usuario
let usuarioLogeado = false;

const btnLogin = d.getElementById("btn-login");
const btnAccount = d.getElementById("btn-account");
const searchInput = d.getElementById("search");

// Al iniciar sesión desde login-form (ya existente)
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  const u = username.value.trim();
  const p = password.value.trim();

  if (u && p) {
    usuarioLogeado = true;
    actualizarUsuarioUI();
    loginView.classList.add("hidden");
  }
});

// Mostrar login al dar clic
btnLogin.addEventListener("click", () => {
  loginView.classList.remove("hidden");
  registerViewDiv.classList.add("hidden");
  d.getElementById("main-content").classList.add("hidden"); // ocultar todo
});

// Actualiza el botón de la barra superior
function actualizarUsuarioUI() {
  if (usuarioLogeado) {
    btnLogin.classList.add("hidden");
    btnAccount.classList.remove("hidden");
  } else {
    btnLogin.classList.remove("hidden");
    btnAccount.classList.add("hidden");
  }
}

const searchBox = d.getElementById("search");
searchBox.addEventListener("focus", () => {
  searchBox.select(); // ← selecciona el texto automáticamente
});
const suggestionsBox = d.getElementById("search-suggestions");

let productosActuales = []; // ← los guardaremos cuando se carguen
let historialBusquedas = [];

// BUSQUEDA AVANZADA
searchBox.addEventListener("input", () => {
  const termino = searchBox.value.trim().toLowerCase();
  suggestionsBox.innerHTML = "";
  suggestionsBox.classList.remove("hidden");

  if (!termino) {
    mostrarUltimasBusquedas();
    mostrarProductos(productosActuales);
    return;
  }

  // Filtrado activo en tiempo real
  const coincidencias = productosActuales.filter(p =>
    p.nombre.toLowerCase().includes(termino)
  );

  mostrarProductos(coincidencias); // ← actualiza productos en pantalla

  if (coincidencias.length > 0) {
    coincidencias.forEach(p => {
      const item = d.createElement("div");
      item.textContent = p.nombre;
      item.addEventListener("click", () => {
        searchBox.value = p.nombre;
        mostrarProductos([p]); // mostrar solo ese
        suggestionsBox.classList.add("hidden");
      });
      suggestionsBox.appendChild(item);
    });
  } else {
    const sugerencias = productosActuales.filter(p =>
      p.nombre.toLowerCase().split(" ").some(palabra =>
        palabra.startsWith(termino.slice(0, 3))
      )
    );

    if (sugerencias.length > 0) {
      const header = d.createElement("div");
      header.innerHTML = "<strong>Sugerencias similares:</strong>";
      suggestionsBox.appendChild(header);

      sugerencias.forEach(sug => {
        const sugItem = d.createElement("div");
        sugItem.textContent = sug.nombre;
        sugItem.addEventListener("click", () => {
          searchBox.value = sug.nombre;
          mostrarProductos([sug]);
          suggestionsBox.classList.add("hidden");
        });
        suggestionsBox.appendChild(sugItem);
      });
    } else {
      const noFound = d.createElement("div");
      noFound.textContent = "Artículo no encontrado";
      noFound.classList.add("not-found");
      suggestionsBox.appendChild(noFound);
    }
  }
});

// Ejecuta la búsqueda completa y guarda en historial
function buscarProducto(nombre) {
  const resultado = productosActuales.find(p =>
    p.nombre.toLowerCase() === nombre.toLowerCase()
  );

  if (resultado) {
    historialBusquedas.unshift(nombre);
    historialBusquedas = [...new Set(historialBusquedas)]; // quitar duplicados
    if (historialBusquedas.length > 5) historialBusquedas.length = 5;
  }

  const tarjetas = d.querySelectorAll(".producto");
  tarjetas.forEach(t => {
    const h3 = t.querySelector("h3").textContent.toLowerCase();
    t.style.display = h3.includes(nombre.toLowerCase()) ? "block" : "none";
  });
}

// Muestra últimas búsquedas
function mostrarUltimasBusquedas() {
  suggestionsBox.innerHTML = "";

  if (historialBusquedas.length === 0) {
    suggestionsBox.classList.add("hidden");
    return;
  }

  historialBusquedas.forEach(item => {
    const el = d.createElement("div");
    el.textContent = item;
    el.addEventListener("click", () => {
      buscarProducto(item);
      searchBox.value = item;
      suggestionsBox.classList.add("hidden");
    });
    suggestionsBox.appendChild(el);
  });
}

// Ocultar sugerencias si haces clic afuera
d.addEventListener("click", (e) => {
  if (!e.target.closest("#search") && !e.target.closest("#search-suggestions")) {
    suggestionsBox.classList.add("hidden");
  }
});

// Mostrar productos al cargar la página (aunque no se haya iniciado sesión)
window.addEventListener("DOMContentLoaded", () => {
  cargarProductos();
  actualizarUsuarioUI(); // Para manejar correctamente el botón de sesión
});
