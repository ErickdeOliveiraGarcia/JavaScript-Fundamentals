//funcao sem vetor 
function imprimirSoma(a, b){

    console.log( a + b  )
}
imprimirSoma(1,2,3)
imprimirSoma(2)
imprimirSoma(2,10)
imprimirSoma()
//NaN= not a number

//all funcao com retorno

function soma(a=1, b=2){
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma(  
))

let imprimir2 = ( a , b=1 ) => a + b

console.log (imprimir2 (5))