let isAtivo= false 
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
//booleanos são verdadeiros e falsos.
console.log(!!isAtivo)//usando !! como negação duas vezes se torna verdadeiro. 
console.log(!!'')// com espaçõ vazio ou com texto também se torna verdadeiro 

isAtivo = 2 
console.log(!isAtivo)//usando ! apenas uma vez ele se torna falso.
console.log(!!0)// da falso
console.log(!!"")//string vazia também da falso 
console.log(!!null)// nulo também é falso 
console.log(!!NaN)//false
console.log(!!undefined)// não definido também da falso
console.log(!!(isAtivo=false))// atribuição ligada a falso também da falso
console.log((''|| null || 0 || 'epa'))// usando a colocação || ele irá atribuir a única informação verdadeira.

// testando na prática 
let nome =''  // deu falso na primeira informação aparece na segunda usando || 
console.log(nome|| 'desconhecido')// se o usuário não colocar o nome irá aparecer desconhecido 