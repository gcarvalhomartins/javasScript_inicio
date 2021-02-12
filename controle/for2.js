const notas = [6.7,7.4,9.8,8.1,7.7]
for (i in notas){
    console.log(i,notas[i])
}
const pessoa={
 nome:'ana',
 sobrenome:'Silva',
 idade:18,
 peso:64
}
for (let atributo in pessoa ){
    console.log(`${atributo}=${pessoa[atributo]}`)
}
//IMPORTANTE!!!!!!! 
// sempre usar let dentro do for, nunca esqueça disso 