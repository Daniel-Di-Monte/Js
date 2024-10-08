let bolsadecompras = document.getElementById("bolsadeproductos");
let totalElement = document.getElementById("Total");

function renderbolsa(itemsbolsa) {
  bolsadecompras.innerHTML = '';
  let total = 0;
  const productosConCantidad = {};

  itemsbolsa.forEach(producto => {
    if (productosConCantidad[producto.idCarrito]) {
      productosConCantidad[producto.idCarrito].cantidad++;
    } else {
      productosConCantidad[producto.idCarrito] = {
        ...producto,
        cantidad: 1
      };
    }
  });

  Object.values(productosConCantidad).forEach(producto => {
    const card = document.createElement("div");
    card.innerHTML = 
    `
      <h3>${producto.nombre}</h3>
      <p>$${producto.precio} x ${producto.cantidad}</p>
      <div class="cantidad-controles">
        <button class="disminuir">-</button>
        <span class="cantidad">${producto.cantidad}</span>
        <button class="aumentar">+</button>
      </div>
      `
    bolsadecompras.appendChild(card);

    total += producto.precio * producto.cantidad;

    const btnDisminuir = card.querySelector('.disminuir');
    const btnAumentar = card.querySelector('.aumentar');
    const spanCantidad = card.querySelector('.cantidad');

    btnDisminuir.addEventListener('click', () => {
      if (producto.cantidad > 1) {
        producto.cantidad--;
        spanCantidad.textContent = producto.cantidad;
        actualizarTotalYLocalStorage();
      } else {
        eliminarProducto(producto.idCarrito);
      }
    });

    btnAumentar.addEventListener('click', () => {
      producto.cantidad++;
      spanCantidad.textContent = producto.cantidad;
      actualizarTotalYLocalStorage();
    });
  });

  function actualizarTotalYLocalStorage() {
    total = 0;
    itemsbolsa = Object.values(productosConCantidad);
    itemsbolsa.forEach(producto => {
      total += producto.precio * producto.cantidad;
    });
    totalElement.textContent = `Total: $${total}`;
    localStorage.setItem("productosbolsa", JSON.stringify(itemsbolsa));
  }


  function eliminarProducto(idProducto) {
    delete productosConCantidad[idProducto];
    actualizarTotalYLocalStorage();
    renderbolsa(itemsbolsa);
  }
}

let bolsaguardados = localStorage.getItem("productosbolsa");
bolsaguardados = JSON.parse(bolsaguardados);
renderbolsa(bolsaguardados);