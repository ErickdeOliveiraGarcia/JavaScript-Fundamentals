let valor

console.log(valor)

valor = null //ausência de valor

console.log(valor)
//console.log(valor.toString()) //Erro!

const prodito = {}
console.log(prodito.preco)
console.log(prodito)

prodito.preco = 3.50
console.log(prodito.preco)
prodito.preco = undefined // evite atribuir undefined
console.log(!!prodito.preco)
//delete prodito.preco

prodito.preco = null // sem preco
console.log(!prodito.preco)
console.log(prodito)


