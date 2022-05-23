const notas = [1,5,4,6,7,4,8,8.5,8.9]

//Sem callback

let notasBaixas1 = []
for (let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])

    }
}
console.log(`${notasBaixas1}`)

//Com callback
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2)

const notasMenorQue7 = nota => nota <7 
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)

//Second Exemple
function isBigEnough(value) {
    return value <= 10;
  }
  var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

console.log(filtered)