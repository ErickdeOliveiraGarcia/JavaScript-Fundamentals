const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa)

falarDePessoa()

const falar2 = pessoa.falar
falarDePessoa()

function sumNumbers(firstNumber, secondNumber) {
	const sum =  this + firstNumber + secondNumber;

	console.log(sum)
}

sumNumbers.apply(5, [2, 7]) // 14