const imprimirResultado =  function (nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadros de Honra')
            
        case 8: case 7:
            console.log("Aprovado")
            
        case 6: case 5: case 4:
            console.log('Recuperação')
            
        case 3, 2,1, 0:
            console.log('Reprovado')
        
        default:
            console.log('Nota Inválida')
    }
}

imprimirResultado(8.9)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado()