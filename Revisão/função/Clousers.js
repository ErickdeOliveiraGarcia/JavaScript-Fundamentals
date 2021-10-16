//Clousers e escopo criado quando uma fnção é declaradaa
//Esse escopo vai perimitir a função de acessar e manipular váriaveis externas a função

//Contexto léxico em ação!
const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
console.log(x)