// presta atençao vagabundo 
// if está sem as chaves do objeto ou seja , apenas uma linha depois ficara pertecendo ao if
function teste1(num){
    if(num>7)// aqui o 
    console.log(num)
    
    console.log('final')// a partir daqui ja não pertence mais ao if 
}
teste1(6)
teste1(8)// sempre usa chave {}  
function teste2(num){
    if(num>7);{// cuidado com ;, ele é como uma setença de código vazia!!!.
        console.log(num)
    }
}
teste2(6)
teste2(8)