const imprimirNota=function(nota){
    if (nota>=7){
      console.log('Aprovado')
    }else{
      console.log( 'reprovado')
    }
}
imprimirNota(6.1)
imprimirNota(7.0)
imprimirNota('epa!!')// cuidado com a tipagem fraca, não irá dar erro,porém tera dor de cabeça.