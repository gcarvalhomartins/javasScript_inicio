// ARROW É UMA FUNÇÃO ANONIMA 
// a função arrow tem dois objetivos ,sempre ter o this constante e forma reduzida de escrita da função 
// primeiro exemplo de uma função normal depois uma função arrow 
 let dobro=function (a){
     return 2*a
 }
 //função arrow 
 dobro=(a)=>{
     return 2*a
 }
 // tirando o corpo da função, teremos um retorno implicito 
dobro=a=>2*a
console.log(dobro(Math.PI))
// se for colocado um corpo para função obrigatoriamente deve ser colocado o return 
let ola =function(){
    return 'ola '
}
ola =()=> 'ola'
ola= _=>'ola'//possui um parametro 

