const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop() //Massa quebrou o carro!!!
console.log(pilotos)

pilotos.push('Versrtappen')
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice ode adicioar e remover elementos 
pilotos.splice(2,0, 'Bottas','Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1) //massa quebrou
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(1,4)// novo array
console.log(algunsPilotos1)

/*const algunsPilotos2 = pilotos.slice(1,2)
console.log(algunsPilotos2)*/
