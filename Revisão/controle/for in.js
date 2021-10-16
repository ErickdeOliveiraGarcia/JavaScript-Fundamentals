const notas = [6.7,8.5,7.6,9.6]

for(i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome:'Ana',
    sobrenome:'Garcia',
    idade:'29',
    peso:64
}

for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
    console.log(atributo)
}