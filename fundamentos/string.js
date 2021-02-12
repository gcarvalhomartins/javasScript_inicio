//string é um construtor de caracteres.
const escola= "Cod3r"
console.log(escola.charAt(4))//aparece somente à ultima letra 

console.log(escola.substring(1))//corta a primeira letra 
console.log(escola.substring(0,3))//corta a terceira  letra 

console.log('escola '.concat(escola).concat("!"))// concatenação 
console.log(escola.replace('3','e'))//substuir 

console.log('ana,maria,joão'.split(','))// converter para array   