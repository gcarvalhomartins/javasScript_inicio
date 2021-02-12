Number.prototype.entre=function( inicio, fim){//criando função para reconhecer number (numeros)
    return this >=inicio && this <= fim 
}
const imprimirResultado =function(nota){
    if(nota.entre(9,10)){
        console.log('quadro de Honra ')
    }else if(nota.entre(7,8.99)){
        console.log('aprovado')
    } else if(nota.entre(5,6.99)){
        console.log('recuperação')
    }else if (nota.entre(0.0,4.99)){
        console.log('reprovado')
    }else { // sempre usar o else para o final do escopo 
        console.log('Nota inválida')
    }
}
imprimirResultado(1.0)
imprimirResultado(10.0)
imprimirResultado(5.5)