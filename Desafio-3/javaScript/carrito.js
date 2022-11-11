    /* CREACION DEL MODAL PARA EL CARRITO */
        const renderCarrito = () => {
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
            <h4>$${product.precio}</h4>
            <h4>Cantidad: ${product.cantidad}</h4>
            <h4>Total: ${product.cantidad * product.precio}</h4>
            `;
            /* APPEND DEL CONTENIDO DEL CARRITO */
            modalContainer.append(carritoContent);

            let eliminar = document.createElement("span");
            eliminar.innerText = "X";
            eliminar.className ="delete-product";
            carritoContent.append(eliminar);
            
            eliminar.addEventListener("click", eliminarProducto);
    
        });
        /* VARIABLE Y METODO DEL ARRAY DEL CARRITO PARA CALCULAR LA COMPRA */
        const total = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio * elemento.cantidad, 0);
        /* CREACION DE LAS ETIQUETAS HTML PARA MOSTRAR EL TOTAL A PAGAR */
        const totalBuying =document.createElement("div");
        totalBuying.className = "total-content"
        totalBuying.innerHTML = `TOTAL A PAGAR : $${total} `;
        /* APPEND DEL TOTAL A PAGAR */
        modalContainer.append(totalBuying);
    }

    verCarrito.addEventListener("click", renderCarrito);


const eliminarProducto = () => {
    const foundId = carrito.find((product)=> product.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
        
    });
    
    renderCarrito();

}   