    /* OBTENCION DE LOS ELEMENTOS DEL DOM HTML */
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
    /* ARRAY DEL CARRITO PARA RECORRER CON AGREGADO DE LOCALSTORAGE */
let carrito = JSON.parse(localStorage.getItem("cart")) || [];
    /* CREACION DE LAS ETIQUETAS HTML PARA GENERAR LAS CARDS DE CADA PRODUCTO */
productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">$${product.precio}</p>
    `;
    /* APPEND DE LOS ELEMENTOS AL SHOPCONTENT */
    shopContent.append(content);
    /* CREACION Y APPEND DEL BOTON COMPRAR  */
    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";
    content.append(comprar);
    /* EVENTO DEFINIDO PARA CLICK DEL BOTON */
    comprar.addEventListener('click', () => {
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        console.log(carrito);
    /* GUARDAR LOS PRODUCTOS SELECCIONADOS AL LOCALSTORAGE */
        saveLocal();
    });
}); 
    /* CREACION DEL MODAL PARA EL CARRITO */
verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display ="flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito de Compras</h1>
    `;
    modalContainer.append(modalHeader);
    /* CREACION DEL BOTON DEL MODAL  */
    let modalButton = document.createElement("button");
    modalButton.innerText = "X";
    modalButton.className = "modal-header-button";
    /* EVENTO CLICK PARA EL BOTON */
    modalButton.addEventListener("click", () =>{
        modalContainer.style.display = "none"; 
    });
    /* APPEND DEL BOTON DEL MODAL */
    modalHeader.append(modalButton);
    /* CREACION DE LAS ETIQUETAS HTML PARA MOSTRAR LOS PRODUCTOS EN EL MODAL DEL CARRITO */
    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>$${product.precio}</p>
        `;
        /* APPEND DEL CONTENIDO DEL CARRITO */
        modalContainer.append(carritoContent);

    });
    /* VARIABLE Y METODO DEL ARRAY DEL CARRITO PARA CALCULAR LA COMPRA */
    const total = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio, 0);
    /* CREACION DE LAS ETIQUETAS HTML PARA MOSTRAR EL TOTAL A PAGAR */
    const totalBuying =document.createElement("div");
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `TOTAL A PAGAR : $${total} `;
    /* APPEND DEL TOTAL A PAGAR */
    modalContainer.append(totalBuying);
});

    /* FUNCION PARA EL GUARDADO DE LA INFORMACION DE LOS PRODUCTOS EN EL LOCALSTORAGE */
const saveLocal = () =>{
    localStorage.setItem("cart", JSON.stringify(carrito));
};


