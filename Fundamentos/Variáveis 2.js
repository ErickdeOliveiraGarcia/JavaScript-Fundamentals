{var numero = 1}
{let numero1 = 1}
{
    
    console.log(`Var executa dentro = ${numero}`)
    console.log(`Let executa fora do escopo ${numero1}`)
}

console.log(`Var executa fora = ${numero}`)
console.log(`Let executa dentro do escopo ${numero1}`)