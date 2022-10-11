
let precioTotal = 0

//FUNCION CONSTRUCTORA//
function Vinos (nombre, valor, stock){
    this.nombre = nombre;
    this.valor = valor;
    this.stock = stock;
}

//OBJETOS//
let torrontes = new Vinos("TORRONTES", 3500, 100)
let chardonnay = new Vinos("CHARDONNAY", 3500, 15)
let malbec = new Vinos("MALBEC", 4000, 75)
let cabernet = new Vinos("CABERNET SAUVIGNON", 4000, 0)

//ARRAY//
let listaVinos = [torrontes, chardonnay, malbec, cabernet]

//USO METODOS FILTER Y MAP SOBRE ARRAY//
const listaVinosDisponibles = listaVinos.filter((vino) => vino.stock > 0);
const listaNombresDisponibles = listaVinosDisponibles.map(vino => vino.nombre.toUpperCase());
console.log(listaNombresDisponibles);


//FUNCION PARA CALCULO DE PRECIO TOTAL//
function calculoPrecioTotal (cantidad, valor){
    precioTotal += (cantidad * valor)
}

//BIENVENIDA//
alert("Bienvenido a la Tienda de Finca La Seis!")

//CICLO DE COMPRA DE LOS VINOS//
    let compra = prompt("Escriba el Nombre del Varietal que desea Comprar \n" + listaNombresDisponibles.join("\n") + "\nPara salir escriba ESC")

while (compra !== null && compra != "ESC"){

    if(compra == torrontes.nombre){
        let cantidadTorrontes = prompt("seleccione cantidad de " + torrontes.nombre + " que desea comprar")
        if(cantidadTorrontes <= torrontes.stock){
            calculoPrecioTotal(cantidadTorrontes, torrontes.valor) 
        }
        
        else{
            alert("Actualmente tenemos " + torrontes.stock + " unidades de este producto")
        }
    }
    
    
    else if(compra == chardonnay.nombre){
        let cantidadChardonnay = prompt("seleccione cantidad de " + chardonnay.nombre + " que desea comprar")
        if(cantidadChardonnay <= chardonnay.stock){
            calculoPrecioTotal(cantidadChardonnay, chardonnay.valor) 
        }
        
        else{
            alert("Actualmente tenemos " + chardonnay.stock + " unidades de este producto")
        }
    }

    else if(compra == malbec.nombre){
        let cantidadMalbec = prompt("seleccione cantidad de " + malbec.nombre + " que desea comprar")
        if(cantidadMalbec <= malbec.stock){
            calculoPrecioTotal(cantidadMalbec, malbec.valor) 
        }
        
        else{
            alert("Actualmente tenemos " + malbec.stock + " unidades de este producto")
        }
    }

    else if(compra == cabernet.nombre){
        let cantidadCabernet = prompt("seleccione cantidad de " + cabernet.nombre + " que desea comprar")
        if(cantidadCabernet <= cabernet.stock){
            calculoPrecioTotal(cantidadCabernet, cabernet.valor) 
        }
        
        else{
            alert("Actualmente tenemos " + cabernet.stock + " unidades de este producto")
        }
    }

    compra = prompt("Para continuar comprando, escriba SI \nPara finalizar escriba ESC")

    if(compra == "SI"){
        compra = prompt("Escriba el Nombre del Varietal que desea Comprar \n" + listaNombresDisponibles.join("\n") + "\nPara salir escriba ESC")
    }

}

if (precioTotal != 0){
    alert("El precio total de su Compra es de: " + precioTotal + " Pesos")
}

//FINAL//
    alert("Gracias por su Visita!")

