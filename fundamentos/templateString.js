// template string permite expressões embutidas,abrage mais coisas. 
const nome='rebeca'
const concatenacao='olá '+ nome +'!'//string normal 
console.log(concatenacao)
//template string pode ter várias polarizações.
const template=`
olá 
${nome}!`// ${template} o dolar com chaves é o template!!
console.log(concatenacao,template)
//expressoes
console.log(`1+1 = ${1+1}`)
const up= texto => texto.toUpperCase()
console.log(`Eii.... ${up('cuidado !')}`)