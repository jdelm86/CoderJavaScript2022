/* VARIABLES DE VINOS*/
let vinoA = "Torrontés"
let vinoB = "Chardonnay"
let vinoC = "Malbec"
let vinoD = "Cabernet Sauvignon" 
/*VARIABLES DE VALORES*/
let valorVinoA = 3500
let valorVinoB = 3500
let valorVinoC = 4000
let valorVinoD = 4000
/*VARIABLES DE TOTALES*/
let totalVinoA = 0
let totalVinoB = 0
let totalVinoC = 0
let totalVinoD = 0
let precioTotal = 0
//FUNCION PARA CALCULO DE PRECIO TOTAL//
function multiplicar (cantidad, precio){
    precioTotal += (cantidad * precio)
}

//BIENVENIDA//
alert("Bienvenido a la Tienda de Finca La Seis!")

//CICLO DE COMPRA DE LOS VINOS//
    let compra = prompt("Escriba el Número Correspondiente del Varietal que desea Comprar \n 1- Torrontés\n 2- Chardonnay\n 3- Malbec\n 4- Cabernet Sauvignon \n 5- O escriba ESC para Salir")

while (compra.toUpperCase() != "ESC"){

    if(compra == 1){
        let cantidadVinoA = prompt("seleccione cantidad de " + vinoA + " que desea comprar")
        totalVinoA += multiplicar(cantidadVinoA, valorVinoA) 
    }
    
    else if(compra == 2){
        let cantidadVinoB = prompt("seleccione cantidad de " + vinoB + " que desea comprar")
        totalVinoB += multiplicar(cantidadVinoB, valorVinoB)
    }

    else if(compra == 3){
        let cantidadVinoC = prompt("seleccione cantidad de " + vinoC + " que desea comprar")
        totalVinoC += multiplicar(cantidadVinoC, valorVinoC)
    }

    else if(compra == 4){
        let cantidadVinoD = prompt("seleccione cantidad de " + vinoD + " que desea comprar")
        totalVinoD += multiplicar(cantidadVinoD, valorVinoD)
    }

    compra = prompt("Para continuar comprando, escriba si \nPara finalizar escriba ESC")

    if(compra == "si"){
        compra = prompt("Escriba el Número Correspondiente del Varietal que desea Comprar \n 1- Torrontés\n 2- Chardonnay\n 3- Malbec\n 4- Cabernet Sauvignon \n 5- Para Terminar la compra escriba ESC")
    }

}

if (precioTotal != 0){
    alert("El precio total de su Compra es de: " + precioTotal + " Pesos")
}

//FINAL//
    alert("Gracias por su Visita!")