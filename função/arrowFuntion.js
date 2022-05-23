function Pessoa() {
    this.idade = 0

    setInterval(()=>{
        this.idade++
        console.log(this.idade)
    })
}

new Pessoa

function Carro(fabricante, modelo, ano) {
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.ano = ano;
  }
  function Pessoa(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  }
  
  var meucarro = new Carro("Eagle", "Talon TSi", 1993);
  var carrodoken = new Carro("Nissan", "300ZX", 1992);


console.log(meucarro.fabricante)