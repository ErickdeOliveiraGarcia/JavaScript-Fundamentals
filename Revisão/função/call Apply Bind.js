//Call
  /*O método call() é uma função capaz de alterar o valor this. Por padrão, o primeiro parâmetro que recebe
   é o valor do this e o demais parâmetros são da função que invoca o método Call.

No exemplo a seguir, criaremos um objeto e uma função que faz referência ao this sem ter o this 
referenciado em seu escopo.
*/
const article = {
    title: 'Descomplicando call, apply e bind',
    language: 'JavaScript',
  };
  
  function print() {
    console.log(`${this.title} em ${this.language}.`);
  }
  
  print();
  print.call(article);


//------------------------------------------
// Apply
/*O Apply funciona exatamente como o método Call, porém seu segundo parâmetro recebe um 
Array dos parâmetros da função, enquanto o primeiro parâmetro continua recebendo o 
valor que será atribuído ao this. Vejamos um novo exemplo, mas agora utilizando o apply:*/

function sumNumbers(firstNumber, secondNumber) {
	const sum =  this + firstNumber + secondNumber;

	console.log(sum)
}

sumNumbers.apply(5, [2, 7]) // 14

//Bind
/*O Bind por sua vez funciona de uma maneira diferente do call e do apply, 
ao invés de executar uma função, este retorna uma nova função. 
O seu primeiro parâmetro continua recebendo o valor que será atribuído
 ao this e os demais argumentos serão os parâmetros que definirão os valores atribuídos da primeira função.

Vejamos um exemplo a seguir:*/

function sumNumbers(firstNumber,secondNumber = 0) {
	const sum = this + firstNumber + secondNumber;

	console.log(sum)
}

const bindResultFunction = sumNumbers.bind(5)

bindResultFunction(5) // 10