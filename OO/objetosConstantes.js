// pessoa ->123{ .....}
const pessoa = {nome:'João'}
pessoa.nome='pedro'
console.log(pessoa)

// pessoa -> 456-> {......}
//pessoa ={ nome:'ana'}

// para congelar um objeto ou seja ,ele não vai sofrer alteração caso solicitado 
// para isso se usa o comando 
Object.freeze(pessoa)
pessoa.nome='Maria'
console.log(pessoa.nome)
// com freeze voce não pode excluir ,nem alterar.
// ele se torna constante 
