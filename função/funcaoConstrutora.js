// IMPORTANTE O THIS NESSA FUNÇÃO ESTÁ ENCARREGADO DE COLOCAR PARTES DA FUNÇÃO PARA FORA DA FUNÇÃO 
// DESAFIO DO EXERCICIO COLOCAR THIS COMO SELF E IMPLEMENTAR NA FUNÇÃO 

function carro(velocidadeMaxima=200,delta=5){
    //atributo privado 
    let velocidadeatual=0

    // metodo publico 
    this.acelerar=function(){
        if(velocidadeatual+delta<= velocidadeMaxima){
            velocidadeatual+=delta
        }else {
            velocidadeatual=velocidadeMaxima
        }
    }
    // metodo publico 
    this.getvelocidadeatual=function(){
        return velocidadeatual
    } 
}
 
const uno =new carro
uno.acelerar()
console.log(uno.getvelocidadeatual())

// podese intanciar outro objeto a partir da mesma função como exemplo 
const ferrari=new carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeatual())
