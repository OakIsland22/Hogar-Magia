# 🤖 prompt.md

Este archivo incluye algunos de los prompts utilizados para recibir apoyo puntual en tareas complejas durante el desarrollo del e-Commerce **Hogar&Magia**.

---

## 🔐 Autenticación con Supabase

**Prompt utilizado:**

> “¿Cómo puedo usar Supabase para registrar usuarios y manejar el inicio de sesión con validación de correo y cierre de sesión?”

**Resultado:**
Se implementó el flujo de autenticación real, incluyendo:
- Registro con `supabase.auth.signUp`
- Login con `signInWithPassword`
- Confirmación de email
- Función para cerrar sesión con `signOut()`

---

## 🔍 Buscador con historial y sugerencias

**Prompt utilizado:**

> “Quiero que el buscador muestre sugerencias mientras escribes y guarde las últimas búsquedas reales del usuario.”

**Resultado:**
- Autocompletado en vivo.
- Almacenamiento de últimas búsquedas válidas.
- Mensaje claro cuando no hay coincidencias.

---


## 🔓 Menú desplegable para sesión

**Prompt utilizado:**

> “¿Cómo puedo hacer que al dar clic en ‘Mi Cuenta’ aparezca un menú con la opción ‘Cerrar sesión’?”

**Resultado:**
- Menú tipo dropdown.
- Visualización del correo del usuario.
- Botón para cerrar sesión conectado a Supabase.

---
## 💳 Integración con Stripe

**Prompt utilizado:**

> “Quiero que al hacer clic en ‘Comprar’, se abra un checkout real de Stripe (modo prueba) y que después redirija a mi tienda.”

**Resultado:**
- Se preparó la lógica para enviar los datos del carrito a Stripe.
- Se está trabajando en el enlace entre la acción de compra y la generación de sesión de pago con `Stripe Checkout`.
- Próximo paso: conectar Stripe con confirmación de pedido por correo electrónico.

---
## 🎨 Estilización de la vista de confirmación de correo

**Prompt utilizado:**

> “Quiero que el mensaje de confirmación de correo se vea bonito y centrado, con estilos modernos en CSS. Que tenga sombra, bordes redondeados, y un botón verde que cambie al pasar el cursor.”

**Resultado:**
- Se aplicaron estilos CSS personalizados para la vista `#confirmacion-view`.
- Se logró una presentación profesional: centrado, tipografía limpia, fondo blanco, sombra sutil y botón interactivo.
- La experiencia visual mejora la guía para el usuario tras el registro.
