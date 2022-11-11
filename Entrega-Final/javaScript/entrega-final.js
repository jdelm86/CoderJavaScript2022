
/* OBTENCION DE LOS ELEMENTOS DEL DOM HTML */
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* OBTENCION DE LAS INSTANCIAS Y CREACION DE LAS CARDS DE LOS PRODUCTOS GUARDADOS EN EL DATA.JSON */
    let carrito = document.querySelector("#shop-content")
fetch("./data.json")
.then((response) => response.json())
.then((data) => {
    console.log(data) //comentar//
    data.forEach((product) => {
        let content = document.createElement("div")
        content.className = "card"
        content.innerHTML = `
        <img src="${product.img}">
        <p>${product.nombre}</p>
        <p class="price">$${product.precio}</p>
        `;
        shopContent.append(content);
    
    
    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "comprar";
    content.append(comprar);

    comprar.addEventListener('click', () => {
        const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);
        if(repeat){
            cart.map((prod) => {
                if (prod.id === product.id) {
                    prod.cantidad++;
                }
            });
        } else {
        cart.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
        });
        } 
        Toastify({ /* USO DE LIBRERIA TOASTIFY */
            text: "Agregaste este producto al Carrito",
            className: "info",
            style: {
            background: "#71cfc4",
            }
        }).showToast();
    elementsOnCart();
    saveLocalEstorage();  
    });
}); 




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
        
        let modalButton = document.createElement("button");
        modalButton.innerText = " X ";
        modalButton.className = "modal-header-button";
        
        modalButton.addEventListener("click", () =>{
            modalContainer.style.display = "none"; 
        });
        
        modalHeader.append(modalButton);
        
        cart.forEach((product) => {
            let carritoContent = document.createElement("div");
            carritoContent.className = "modal-content"
            carritoContent.innerHTML = `
            <img src="${product.img}">
            <p>${product.nombre}</p>
            <p>$${product.precio}</p>
            <button class = "restar"> - </button>
            <p>Cantidad: ${product.cantidad}</p>
            <button class = "sumar"> + </button>
            <p>Total: ${product.cantidad * product.precio}</p>
            <button class = "delete-product"> "Eliminar" </button>
            `;
            modalContainer.append(carritoContent);

            let restar = carritoContent.querySelector(".restar")
            restar.addEventListener("click", () => {
                if(product.cantidad !== 1) {
                    product.cantidad--;
                }
                saveLocalEstorage();
                renderCarrito();
            });


            let sumar = carritoContent.querySelector(".sumar")
            sumar.addEventListener("click", () => {
                    product.cantidad++;
                saveLocalEstorage();
                renderCarrito();
            });

            let eliminar = carritoContent.querySelector(".delete-product");
            eliminar.addEventListener("click", () => {
                eliminarProducto(product.id);
            })

            console.log(cart.length); /* comentar o sacar */ 
        });



        const total = cart.reduce((acumulador, elemento) => acumulador + elemento.precio * elemento.cantidad, 0);
        
        const totalBuying =document.createElement("div");
        totalBuying.className = "total-content"
        totalBuying.innerHTML = `TOTAL A PAGAR : $${total} `;
        
        modalContainer.append(totalBuying);

        let compraFinal = document.createElement("button");
        compraFinal.innerText = "Comprar";
        compraFinal.className ="comprar";
        modalContainer.append(compraFinal);
            
        compraFinal.addEventListener("click", () =>{ /* USO DE LIBRERIA SWEET ALERT 2 */ 
        Swal.fire({
            title: 'Desea finalizar su compra?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar'
        }).then((result) => {
            if (result.isConfirmed) {
            Swal.fire(
                'Listo!',
                'Finalizaste tu compra exitosamente',
                'success'
            )
            }
        })
        });
    }

    verCarrito.addEventListener("click", renderCarrito);


const eliminarProducto = (id) => {
    const foundId = cart.find((product)=> product.id === id);

    cart = cart.filter((carritoId) => {
        return carritoId !== foundId;
        
    });
    elementsOnCart(); 
    saveLocalEstorage();
    renderCarrito();

}   
}); 

    /* FUNCION PARA EL GUARDADO DE LA INFORMACION DE LOS PRODUCTOS EN EL LOCALSTORAGE */
const saveLocalEstorage = () =>{
    localStorage.setItem("cart", JSON.stringify(cart));
};

/* FUNCION PARA EL CONTADOR DE OBJETOS DEL CARRITO */
const elementsOnCart = () => {
    cantidadCarrito.style.display = "block";

    const cartLenght = cart.length;

    localStorage.setItem("cartLenght", JSON.stringify(cartLenght))
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("cartLenght")); 
};

elementsOnCart()
