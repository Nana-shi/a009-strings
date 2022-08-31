//Crie a const para a frase aqui

const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
const fraseTrocada = (frase.replaceAll("verde", "rosa"))
const fraseTrocada2 = (fraseTrocada.replaceAll("azul", "laranja"))
const fraseMaiuscula = "MAS NÃO DEIXE O GATO SAIR\""

console.log(fraseTrocada2)

console.log(fraseTrocada2.includes("verde"))
console.log(fraseTrocada2.includes("laranja"))

console.log(fraseTrocada2.replace("mas não deixe o gato sair\"" , fraseMaiuscula))

console.log(frase.substr(0, 73) + frase.slice(74).toUpperCase())
