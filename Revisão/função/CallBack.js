const fabricantes = ["Mercedes","Audi","BMW"]

function imprimir(nome, indice){
    console.log(`${indice +1}. ${nome} `)
}

//fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

function logArrayElements(element, index) {
    console.log("a[" + index + "] = " + element);
}
[2, 5, 9].forEach(logArrayElements);