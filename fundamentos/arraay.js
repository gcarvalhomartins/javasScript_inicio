//array é heterogêneo pode ser colocado vários valores de deferentes formas apenas usando , para separar
//array são [] colchetes 
const valores = [7.7,8.9,9.0,9.2]
console.log(valores[0],valores[3])
console.log(valores[4])//irá dar valor undeffined 

valores [4] = 10//pode acrescentar depois os valores com indices 
console.log(valores)

valores [10] = 10 
console.log(valores)// o console irá responder que falta 5 itens para chegar ao indice 10
// pode-se acessar a quantidade de elementos contidos no array através de 
console.log(valores.length)
// colocando em prática o heterogêneo do array:aceita: Bolears,number,strings,etc...
valores.push( {id:3},false,null,'teste')
console.log(valores)
console.log(valores.pop())// retorna o último valor do array 
//para deletar valores do array se usa 
delete valores[0] // o indice selecionado vai ser excluido
console.log(valores)

console.log(typeof valores)// para ve onde se encaixa o array ,ou seja ele é um objeto!.  