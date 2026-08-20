let botonej1 = document.querySelector ('#botonej1')
let ej1 = document.querySelector ('#ej1')
let edad = document.querySelector ('#input1')
botonej1.onclick = function () {
    if (edad.value >= 18){
    ej1.textContent = 'Sos mayor de edad'}
 else {
    ej1.textContent = 'sos menor de edad'}
}
    



let botonej2 = document.querySelector ('#botonej2')
let ej2 = document.querySelector ('#ej2')
let nombreusuario = document.querySelector ('#input2')

botonej2.onclick = function () {
   if ((nombreusuario.value == 'nahuel' ) || (nombreusuario.value == 'marcos'))
   {ej2.textContent = 'bienvenido' + ' ' + nombreusuario.value +' ' + '¿como estas?'}
   else {ej2.textContent = 'bienvenido' + ' ' + nombreusuario.value}
}


let botonej4 = document.querySelector ('#botonej4')
let ej4 = document.querySelector ('#ej4')
let numero = document.querySelector ('#input4')

botonej4.onclick = function () {
   if (numero.value == 0 )
  {ej4.textContent = 'El numero es cero'}
   else if (numero.value >= 0)
   {ej4.textContent = 'El numero es positivo'}
   else {ej4.textContent = 'El numero es negativo'}
}


let botonej5 = document.querySelector ('#botonej5')
let ej5 = document.querySelector ('#ej5')
let edadej5 = document.querySelector ('#input5')

botonej5.onclick = function () {
   if ((edadej5.value >= 6) && (edadej5.value <= 11))
   {ej5.textContent = 'La edad corresponde a un niño'}
   else if ((edadej5.value >= 12) && (edadej5.value <= 18))
   {ej5.textContent ='La edad corresponde a un adolescente'}
   else if ((edadej5.value >= 19) && (edadej5.value <= 26))
   {ej5.textContent ='La edad corresponde a un joven'}
   else if ((edadej5.value >= 27) && (edadej5.value <= 59))
   {ej5.textContent ='La edad corresponde a un adulto'}
   else if (edadej5.value >= 60)
   {ej5.textContent ='La edad corresponde a un anciano'}
   else {ej5.textContent = 'sos menor'}
}


let botonej6 = document.querySelector ('#botonej6')
let ej6 = document.querySelector ('#ej6')
let dia = document.querySelector ('#input6')

botonej6.onclick = function (){
   if ((dia.value == 'lunes') || (dia.value == 'martes') || (dia.value == 'miercoles') || (dia.value == 'jueves') || (dia.value == 'viernes'))
   {ej6.textContent = 'Es dia laboral'}
   else if ((dia.value == 'sabado') || (dia.value == 'domingo'))
   {ej6.textContent = 'es fin de semana'}
}

let botonej7 = document.querySelector ('#botonej7')
let ej7 = document.querySelector ('#ej7')
let contrasenia = document.querySelector ('#input7')

botonej7.onclick = function (){
   if (contrasenia.value == 'secreto'){
      ej7.textContent = 'Acceso concedido'
   }
   else {ej7.textContent = 'Acceso denegado'}
}
