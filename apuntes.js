/*
let nombre = "Homero"
let apellido = "Simpson"
let edad = 39
 console.log (nombre)
 console.log (apellido)
 console.log (edad)
 
const ciudad1 = "buenos aires"
const ciudad2 = "neuquen"
const ciudad3 = "formosa"
const ciudad4 = "rio negro"
const ciudad5 = "chubut"

console.log (ciudad1)
console.log (ciudad2)
console.log (ciudad3)
console.log (ciudad4)
console.log (ciudad5)

let ciudadCarnet = "Buenos Aires"
const codigoCarnet = "j235ub35o5"
let carnetNombre = "Ricardo"
let carnetApellido = "Luppa"
let carnetNacimiento = "19/03/2001"
let carnetVencimiento = "24/07/2035"
let carnetGenero = "Masculino"

let Carnet = " Ciudad: " +ciudadCarnet +
             " Codigo: " +codigoCarnet +
             " Nombre: " +carnetNombre +
             " Apellido: " +carnetApellido +
             " Nacimiento: " +carnetNacimiento +
             " Vencimiento: " +carnetVencimiento +
             " Genero: " +carnetGenero;
console.log (Carnet)



let Nombre1 = prompt("Nombre de familiar 1:")
let Nombre2 = prompt("Nombre de familiar 2:")
let Nombre3 = prompt("Nombre de familiar 3:")
let Nombre4 = prompt("Nombre de familiar 4:")
let Nombre5 = prompt("Nombre de familiar 5:")

console.log ( "los nombres ingresados son: "+Nombre1+" "+ Nombre2+" "+Nombre3+" "+Nombre4+" "+Nombre5,  )


let precio1 = parseFloat( prompt("ingrese precio:"))
let porcentaje1 = parseFloat( prompt("ingrese descuento"))

let descuento1 = precio1 * porcentaje1

let precioFinal = descuento1/100

console.log (precioFinal)



let precio = parseFloat(prompt ("ingrese precio"))

let descuento20 = precio - (precio * 0.2)
let descuento30 = precio - (precio * 0.3)
let descuento40 = precio - (precio * 0.4)
let descuento50 = precio - (precio * 0.5)
let descuento60 = precio - (precio * 0.6)

console.log (descuento20)
console.log (descuento30)
console.log (descuento40)
console.log (descuento50)
console.log (descuento60);


let nombreIngresado = prompt("ingrese un nombre")

let nombre = "y"

alert ((nombreIngresado == nombre) ? "CORRECTO" : "ERROR")


let entrada = prompt("ingrese un numero")

if (entrada == 1) {
    alert("ELEGISTE A HOMERO")
} else if (entrada == 2) {
    alert("ELEGISTE A MARGE")
} else if(entrada == 3) {
    alert("ELEGISTE A BART")
} else if(entrada == 4) {
    alert("ELEGISTE A LISA")
} else {
    alert("ERROR")
}



let entrada = parseFloat( prompt("ingrese un presupuesto"))

if ((entrada >= 0) && (entrada <=1000)) {
    alert ("presupuesto bajo")
} else if ((entrada >=1001) && (entrada <=3000)) {
    alert ("presupuesto medio")
} else if ((entrada >3000)){
    alert ("presupuesto alto")
} else alert ("error")



let entrada = prompt("ingrese un producto")
let entrada2 = prompt("ingrese un producto")
let entrada3 = prompt("ingrese un producto")
let entrada4 = prompt("ingrese un producto")

if ((entrada != "" && entrada2 != "" && entrada3 != "" && entrada4 != "")) {
    let listado = " 1) " + entrada +
                  " 2) " + entrada2 +
                  " 3) " + entrada3 +
                  " 4) " + entrada4
                  alert(listado)
                  console.log(listado)
} else {
    alert ("INGRESE TODOS LOS PRODUCTOS")
}

for (let i = 1; i <= 20; i++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    alert(" Turno  N° "+i+" Nombre: "+ingresarNombre);
}

let num = 0 
while (num <3) {
    console.log(num)
    num++;
}


let entrada = prompt("Ingresar un dato");
//Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada != "ESC" ){
    alert("El usuario ingresó "+ entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro dato");
}

let numero = 0;
do{
   //Repetimos con do...while mientras el usuario ingresa un n°
   numero = prompt("Ingresar Número");
   console.log(numero);
//Si el parseo no resulta un número se interrumpe el bucle.   
}while(parseInt(numero));

let num = 2

switch (num) {
    case 1:
        console.log("salio uno")
        break
    case "2":
        console.log("sipasooo")
        break
    case 2:
        console.log("ete si")
        break;
    default:
        console.log("aca nose que paso")
} 
*/
