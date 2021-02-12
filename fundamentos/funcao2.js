//armazenando uma função na variavel 
const imprimirSoma= function(a,b){
    console.log(a+b)
}
imprimirSoma(2,3)
//funcao arrow ,nova funcao de 2015
const soma= (a,b)=>{ //forma reduzida de colocar uma função com dois parametros 
 return(a+b)
}
console.log(soma(2,3))// se coloca os parametros fora da função. 

//reduzir ainda mais a função com retorno implicito 
const subtracao =(a,b) => a-b // função sem chaves é uma função de única linha 
console.log(subtracao(2,3))
// outro exemplo 
const imprimi2=a => console.log(a)
imprimi2('legal!!!')     