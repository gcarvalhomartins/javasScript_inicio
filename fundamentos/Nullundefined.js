//valor não atribuido é undefined
let valor // não inicializa 
 console.log(valor)
// null não tem valor nem endereço, que aponta algum lugar na memória .
 valor = null
 console.log(null)
// se eu tiver um valor atribuido à pessoa, posso colocar o null que ele não terá mais valor.
// não é legal usar undefined, sempre ular undefined,quando o sistema mesmo reconhcer isso. 
// na ocasião para tem um valor vazia melhor colocar null 
// tentar acessar algo que está null irá dar erro. 
//console.log(valor.toString()) erro!!!
const produto= {}
console.log(produto.preco)//produto vazio irá receber undefined ou seja não definido
console.log(produto)//irá aparecer o produto vazio 

produto.preco= 3.50// produto definido como objeto 
console.log(produto)

produto.preco= undefined // evitar de usar,deixar que o sistema mesmo atribua que o valor não está definido 
console.log(!!produto.preco)//convertido para booleano irá sempre dar false 
//delete produto.preco para tirar o atributo incluido no sistema não usar undefined ou nulo
// melhor decisão deixar o produto vazio como produto.preco= {} ou const preco={ }
produto.preco= null// dizer que o produto esta sem preço pode usar o null ou -1
console.log(!!produto.preco)//null para booleanos também irá dar false 

