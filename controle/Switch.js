const imprimirResultado= function (nota){
    switch (Math.floor(nota)) {
case 10:// entre um case e outro pode-se colocarvárias senteças de código 
case 9: //porém se for o mesmo código pode-se usar esse exemplo que o js reconhece 
      console.log('Quadro de Honra')
    break
case 8: case 7: 
      console.log('aprovado')
    break
case 6: case 5: case 4: 
      console.log('Recuperação')
    break
case 3: case 2: case 1:
      console.log('Reprovado')
    break  
      default: console.log('Nota inválida')// default subtitui o else em switch
    }
}
imprimirResultado(8.3)

const testeResultado=function(alpha){
  switch (Math.floor(alpha)){
    case 100:
    console.log('Camisa Polo')
    break
    case 99:
    console.log('Camiseta')
    break
    case 60:
    console.log('chata')
    break
  }
}
testeResultado(99)
// o switch não retorna verdadeiro ou falso, ele apenas retorna valores.
//!IMPORTANTE TODA AS VEZES QUE USAR O SWITCH DEVE-SE COLOCAR O BREAK,PARA SAIR DO CASE, SE NÃO ELE IRÁ 
// CONTINUAR AUTOMÁTICAMENTE REPETINDO O CASE!