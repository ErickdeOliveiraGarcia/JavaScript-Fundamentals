/* class Pesssoa {
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome e ${this.nome}`)
    }
}

const t1 = new Pesssoa('Erick')
t1.falar()

const t2 = new Pesssoa(`ALARAKBA`)
t2.falar()*/
function Pesssoa(nome){
        this.nome = nome
    
    this.falar = function() {
        console.log(`Meu nome e ${this.nome}`)
    }
}

const t1 = new Pesssoa('Erick')
t1.falar()

const t2 = new Pesssoa(`ALARAKBA`)
t2.falar()
