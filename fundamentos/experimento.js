// use apenas let no browser (navegador)
let a =3 
// evite criar funções globais , vai dar merda 
global.b=123

this.c=456
this.d=false 
this.e='teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)// mais usado no node.js
// outra forma 
// module.exports={e:456,f:false,g:'teste'} 
console.log(module.exports===this )
console.log(module.exports)

abc=3 // não fazer isso em casa , variavel maluca , vai dar merda 
console.log(global.abc)
