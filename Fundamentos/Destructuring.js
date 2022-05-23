const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereço : {
        logradouro: ' Rua  ABC',
        numero: 1000
    }
}

const{nome, idade} = pessoa
console.log(nome, idade)

const {nome:a, idade:b} = pessoa
console.log(a,b)

const{endereço: { logradouro, numero, cep}} = pessoa
console.log( logradouro, numero, cep)

const { sobrenome, bemHumorada = !!true } = pessoa 

console.log(sobrenome, bemHumorada)