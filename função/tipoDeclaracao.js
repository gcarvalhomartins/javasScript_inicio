// quando se usar uma function declaration
// pode se chamar ela antes da função 
// como por exemplo 
console.log(soma(3,4))
function soma(x,y){
    return x+y
}

// com uma function expression
const sub=function(x,y){
return x-y
}
// a chamada da função deve sempre estar abaixo da função 
console.log(sub(10,7))
// caso contrário irá dar erro de sintaxe no js 

// na named function também deve ser chamada depois da função 
const multi=function mult(x,y){
    return x*y
}
console.log(multi(5,5))
