

fetch("./data.json")
.then((response) => response.json())
.then((info) => { 
    console.log(info)
}); 




/* OBTENCION DE LOS ELEMENTOS DEL DOM HTML */
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito")
    /* ARRAY DEL CARRITO PARA RECORRER CON AGREGADO DE LOCALSTORAGE */
let carrito = /* JSON.parse(localStorage.getItem("cart")) || */ [];
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
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
        if(repeat){
            carrito.map((prod) => {
                if (prod.id === product.id) {
                    prod.cantidad++;
                }
            });
        } else {
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
        });
        } 
        console.log(carrito);
    /* GUARDAR LOS PRODUCTOS SELECCIONADOS AL LOCALSTORAGE */
        /* saveLocal(); */
    });
}); 


    /* FUNCION PARA EL GUARDADO DE LA INFORMACION DE LOS PRODUCTOS EN EL LOCALSTORAGE */
/* const saveLocal = () =>{
    localStorage.setItem("cart", JSON.stringify(carrito));
};
 */




