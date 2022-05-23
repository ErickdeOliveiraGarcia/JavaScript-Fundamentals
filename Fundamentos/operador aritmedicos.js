const [a,b,c,d] = [3,5,1,15]

const soma = a+b+c+d
const subtracao = d-b
const multiplicacao = a*b
const divisao = d / a
const modulo = a % 2

console.log(soma, subtracao,multiplicacao,divisao,modulo)

var resultadosOrdenados = 
{ Soma:soma,
Subtracao:subtracao,
Multiplicacao:multiplicacao,
Divisao:divisao,
Modulo:modulo
}
console.log(resultadosOrdenados)

const [Soma,Subtracao] = resultadosOrdenados
console.log(Soma, Subtracao)
c = []
const  {Soma, Modulo} = resultadosOrdenados
console.log(c)

