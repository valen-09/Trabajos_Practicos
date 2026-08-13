let botonej1 = document.querySelector ('#botonej1')
let ej1 = document.querySelector ('#ej1')
let edad = 17
botonej1.onclick = function () {
    if (edad >= 18){
    ej1.textContent = 'Sos mayor de edad'}
 else {
    ej1.textContent = 'sos menor de edad'}
}
    



let botonej2 = document.querySelector ('#botonej2')
let ej2 = document.querySelector ('#ej2')
let nombreusuario = 'marcos'

botonej2.onclick = function () {
   if ((nombreusuario == 'nahuel' ) || (nombreusuario == 'marcos'))
   {ej2.textContent = 'bienvenido' + ' ' + nombreusuario +' ' + '¿como estas?'}
   else {ej2.textContent = 'bienvenido' + ' ' + nombreusuario}
}


let botonej4 = document.querySelector ('#botonej4')
let ej4 = document.querySelector ('#ej4')
let numero = 15

botonej4.onclick = function () {
    
}