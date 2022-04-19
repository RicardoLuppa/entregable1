let metodo1 = "prensa francesa"
let metodo2 = "chemex"
let metodo3 = "v60"
let metodo4 = "aeropress"
let metodo5 = "cold brew"
/*
function multiplicar (gramos) {
    return gramos * 16 
}
*/
alert("¡Bienvenido! Lo ayudaremos a preparar mejor su café")

let metodoIngresado = prompt("Ingrese su metodo de preparacion; ¿Prensa Francesa, Chemex, V60, Aeropress o Cold Brew?").toLowerCase()

    if (metodoIngresado == metodo1) {
    alert("¡Seleccionaste la Prensa Francesa!")
} else if (metodoIngresado == metodo2) {
    alert ("¡Seleccionaste la Chemex!")
} else if (metodoIngresado == metodo3) {
    alert("¡Seleccionaste la V60!")
} else if (metodoIngresado == metodo4) {
    alert ("¡Seleccionaste la Aeropress!")
} else if (metodoIngresado == metodo5) {
    alert ("¡Seleccionaste el Cold Brew!")
} else {
    prompt("Disculpe no conozco ese metodo; Ingrese su metodo de preparacion: ¿Prensa Francesa, Chemex, V60, Aeropress o Cold Brew?").toLowerCase()
}

