let titulo = document.querySelector ('h1')
let body = document.querySelector ('body')
let parrafo = document.querySelector ('p')
let boton1 = document.querySelector ('#boton1')
let boton2 = document.querySelector ('#boton2')
let boton3 = document.querySelector ('#boton3')
let boton4 = document.querySelector ('#boton4')
let boton5 = document.querySelector ('#boton5')
let boton6 = document.querySelector ('#boton6')

boton1.onclick = function (){
body.style.backgroundColor ='white'
}

boton2.onclick = function (){
parrafo.style.fontFamily = "IMPACT"
titulo.style.fontFamily = "IMPACT"

}

boton3.onclick = function () {
    titulo.style.color = 'rgb(190, 53, 129)'
    parrafo.style.color = 'rgb(190, 53, 83)'
}

boton4.onclick = function () {
    parrafo.textContent ='En este trabajo practico estamos probando hacer botones funcionales.'
}

boton5.onclick = function (){
    parrafo.style.fontSize = '30px'
    titulo.style.fontSize = '50px'
}

boton6.onclick = function (){
    body.style.backgroundColor ='black'
    parrafo.style.fontFamily = "arial"
titulo.style.fontFamily = "arial"
titulo.style.color = 'rgb(94, 14, 14)'
parrafo.style.color = 'rgb(94, 14, 14)'
parrafo.style.fontSize = '25px'
titulo.style.fontSize = '45px'
parrafo.textContent = 'Este es el trabajo practico 6 de programacion'
} 