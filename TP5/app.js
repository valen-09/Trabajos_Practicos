//TP 5
let numero1 = 10;
let numero2 = 10;
let resta = 0; 
let suma = 0;
let multiplicacion = 0;
let division = 0;

resta =  numero1 - numero2
suma =  numero1 + numero2
multiplicacion =  numero1 * numero2
division =  numero1 / numero2

console.log("el resultado de la division es:" + division);
console.log("el resultado de la multiplicacion es:" + multiplicacion)
alert("el resultado de la suma es:" + suma)
alert("el resultado de la resta es:" + resta)

let nombrealumno = 'valentina';
let apellidoalumno = 'ardovino';
let Edadalumno = 14;

console.log("la alumna es: " + nombrealumno + " " + apellidoalumno + " tiene " + Edadalumno + " años" )

let precio1 = 10
let precio2 = 20
let precio3 = 15
let total = precio1 + precio2 + precio3

console.log("el precio a pagar es: " + total)

let comidafavorita = "pastas"
let colorfavorito = "Bordo"
let numerofavorito = 7 

console.log( "mi comida favorita son las " + comidafavorita + ", me gusta el color " + colorfavorito + " y mi numero favorito es " + numerofavorito)
 
let pais = "Argentina"
console.log(pais)
 pais = "brasil"
 console.log(pais)
 
let titulo = document.querySelector('h1')
let boton = document.querySelector('button')
let boton2 = document.querySelector('#boton2')

boton.onclick = function (){
    titulo.style.color =  'pink'
    titulo.backgroundColor = 'black'
}

boton2.onclick = function () {
titulo.style.fontFamily = 'arial'
titulo.textContent = 'Me quiero ir'
}




