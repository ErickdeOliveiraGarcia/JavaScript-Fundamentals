const escola = "Cod3r"

console.log(escola.charAt(2))//Mostra a posição 2 = d
console.log(escola.charAt(4))//Mostra a posição 4 = r
console.log(escola.charCodeAt(3))//Mostra um número segundo um a tabela = 51
console.log(escola.indexOf(`d`))//Mostra a posicao em que valor se encontra =  2

console.log(escola.substring(0,2)) //Mostra = Co
console.log(escola.substring(3))//Mostra = 3r

console.log (`Escola `.concat(escola.replace(3,`e`)).concat(" !"))

console.log(escola.replace(`r`,0))

console.log(`Ana, Maria, Pedro`.split(`,`))

console.log(7 / 0)
console.log(`10` / 2)
console.log(`3`+2)
console.log("Show!" * 2)
console.log(0.1 + 0.7)

console.log(10.4568.toFixed(2))

function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
  
    console.log('A string original é: "' + stringToSplit + '"');
    console.log('O separador é: "' + separator + '"');
    console.log('O array tem ' + arrayOfStrings.length + ' elementos: ' + arrayOfStrings.join(' / '));
  }