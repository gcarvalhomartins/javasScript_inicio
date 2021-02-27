// resumo do aula , quando for chamar apply, os paramentros precisam estar dentro de um array 
// o call não precisa de array 
function getpreco(imposto=0,moeda='R$'){
    return `${moeda} ${this.preco*(1-this.desconto)*(1+imposto)}`
}
const produto ={
    nome:'Notebook',
    preco:4589,
    getpreco
}
global.preco=20
global.desconto=0.1
console.log(getpreco())
console.log(produto.preco())

const carro={preco:4999,desc:0.20}
console.log(getpreco.call(carro))
console.log(getpreco.apply(carro[0.17,'$']))
