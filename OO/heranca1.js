//HERANÇA É UM PROTOTIPO PARA GARANTIR A REALIZAÇÃO DA AÇÃO 
// CASO ELE NÃO ACHE A FUNÇÃO DO FILHO ELE VAI PROCURAR NO PAI 
// E PROTOTYPE SEMPRE VAI ESTAR DENTRO DE FUNÇÕES 
// É UMA ÓTIMA MANEIRA DE REUTILIZAR CÓDIGO 

const ferrari={ 
  modelo:'f40',
  vellMax:324
}
const volvo={
    modelo:'V40',
    vellMax:200
}
console.log(ferrari.__proto__)
console.log(ferrari.__proto__===Object.prototype)
console.log(volvo.__proto__===Object.prototype)
console.log(Object.prototype.__proto__===null)

// criando função com prototype 
function MeuObjeto(){}
console.log(typeof Object,typeof MeuObjeto)
// são objetos diferentes 
console.log(Object.prototype,MeuObjeto.prototype)
// porque esse objeto é feito pela função do MeuObjeto , e ele é sobre a função do prototype 

