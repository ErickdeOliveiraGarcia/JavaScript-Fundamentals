console.log(Math.floor(6.6))

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome 
    this.exec = function(){
        console.log('Execç...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('opa')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()