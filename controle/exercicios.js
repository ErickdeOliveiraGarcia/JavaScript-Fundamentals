function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('aprovado com '+nota)
    
    }else{'Reprovado com'+ nota}
}

console.log(soBoaNoticia(6))
soBoaNoticia(8)


function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade...'+ valor)

    }
}
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo
