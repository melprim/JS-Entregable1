const superficie = (ancho, alto) => ancho * alto
const costo = (superficie, m, precio) => ((superficie/m)*precio)
const precioM2 = 17500
const metro = 10000

do{
    alert("Cotiza tu Cortina Roller AHORA!")
    let ancho = parseInt(prompt("Ingresa el ancho necesario en cm"))
    let alto = parseInt(prompt("Ingresa el alto necesario en cm"))
    
    if(isNaN(ancho) || isNaN(alto)){
        alert("Por favor ingrese un valor válido")
    }

    let presupuesto = costo((superficie(ancho, alto)), metro, precioM2)
    alert("El costo de tu Cortina Roller es de $" + presupuesto)

}while(isNaN(ancho) || isNaN(alto))