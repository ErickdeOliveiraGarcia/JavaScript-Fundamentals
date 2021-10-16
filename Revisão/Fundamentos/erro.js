function tratarErroELancar(erro){
    throw {nome: erro.name,
    date: new Date}
    
}
function imprimirGritado(obj){
    
    try {
    console.log(obj.nome.toUpperCase()+ '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome:'Roberto'}
imprimirGritado(obj)