function Pessoa() {
    this.idade = 0

    const self = this
    setInterval (function(){
        self.idade+++
        console.log(self.idade)
    }.bind(this),1000)
}

new Pessoa  

function sumNumbers(firstNumber,secondNumber = 0) {
	const sum = this + firstNumber + secondNumber;

	console.log(sum)
}

const bindResultFunction = sumNumbers.bind(5)

bindResultFunction(5) // 10