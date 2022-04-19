let metodo1 = "prensa francesa"
let metodo2 = "chemex"
let metodo3 = "v60"
let metodo4 = "aeropress"
let metodo5 = "cold brew"

function multiplicar (gramos) {
    return gramos * 16 
}

function multiplicarPre (gramos) {
    return gramos * 2 
}

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
    metodoIngresado = prompt("Disculpe no conozco ese metodo; Ingrese su metodo de preparacion: ¿Prensa Francesa, Chemex, V60, Aeropress o Cold Brew?").toLowerCase()
}
console.log(metodoIngresado)

let gramosIngresados = parseFloat(prompt("Ingrese la cantidad de gramos de café"))

if (metodoIngresado && metodo1 && gramosIngresados) {
    let resultado1 = multiplicar(gramosIngresados)
    let resultadoPre1 = multiplicarPre(gramosIngresados)
    alert("Para esa cantidad de café te recomendamos utilizar "+resultado1 + "gr de agua total, con una pre-infusion de 30seg con "+ resultadoPre1 + "gr de agua!")
} else if (metodoIngresado && metodo2 && gramosIngresados) {
    let resultado2 = multiplicar(gramosIngresados)
    let resultadoPre2 = multiplicarPre(gramosIngresados)
    alert("Para esa cantidad de café te recomendamos utilizar "+resultado2 + "gr de agua total, con una pre-infusion de 30seg con "+ resultadoPre2 + "gr de agua!")
} else if (metodoIngresado && metodo3 && gramosIngresados) {
    let resultado3 = multiplicar(gramosIngresados)
    let resultadoPre3 = multiplicarPre(gramosIngresados)
    alert("Para esa cantidad de café te recomendamos utilizar "+resultado3 + "gr de agua total, con una pre-infusion de 30seg con "+ resultadoPre3 + "gr de agua!")
} else if (metodoIngresado && metodo4 && gramosIngresados) {
    let resultado4 = multiplicar(gramosIngresados)
    let resultadoPre4 = multiplicarPre(gramosIngresados)
    alert("Para esa cantidad de café te recomendamos utilizar "+resultado4 + "gr de agua total, con una pre-infusion de 30seg con "+ resultadoPre4 + "gr de agua!")
} else if (metodoIngresado && metodo5 && gramosIngresados) {
    let resultado5 = multiplicar(gramosIngresados)
    let resultadoPre5 = multiplicarPre(gramosIngresados)
    alert("Para esa cantidad de café te recomendamos utilizar "+resultado5 + "gr de agua total, con una pre-infusion de 30seg con "+ resultadoPre5 + "gr de agua!")
} else {
    gramosIngresados = parseFloat(prompt("Disculpe no conozco esa cantidad, Ingrese unicamente la cantidad de gramos de café"))
}
console.log(gramosIngresados)

alert("Muchas gracias por utilizar nuestros servicios!")