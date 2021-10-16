const saudacao = 'Opa' 

function exec(){
    const saudacao = 'Falaaa'
    return console.log(saudacao)
}

//Objetos são grupos aninhados de pares nome/valor 

const cliente = {
    nome:'Pedro',
    idade:32,
    endereço: {
        logradouro : 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente.endereço[1])