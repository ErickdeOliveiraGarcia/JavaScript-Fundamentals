Array.prototype.forEach = function(callback){
    for(let i=0;1<this.length;i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha','Aldo','Daniel','Raquel']

aprovados.forEach2(function(nome, indice, array){
    console.log(`${indice+1})${nome}`)
})


/*
function calcforEach(valor){
for(var i=0;i<aprovados.length;i++){
    aprovados1 = []
    aprovados1 = aprovados
    
}
return console.log(indice,aprovados1)
}
calcforEach(aprovados)
*/