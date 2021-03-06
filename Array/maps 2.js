Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.lenght; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome":"Borracha","preco":3.45}',
    '{"nome":"Carderno","preco":13.90}',
    '{"nome":"Kit de Lapis","preco": 41.22}',
    '{"nome":"Caneta","preco":7.50}'
]

//Retornar um array penas com os precos
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.nome

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)