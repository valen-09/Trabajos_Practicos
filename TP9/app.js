let p1 = document.querySelector ('#p1')

function  numeromayor(numero1,numero2) {
    let numeroma 
    if (numero1 > numero2) {
        p1.textContent = numero1 + 'es mayor'
        numeroma = numero1
    } else if (numero2 > numero1) { 
        p1.textContent = numero2 + 'es mayor'
        numeroma = numero2 
    } else {
        p1.textContent = 'son iguales'
        numeroma = 'son iguales'
    }
    console.log(numeroma)
}

numeromayor(7,6)