let contador=1 // while tem que ter algum false para sair do laço
while (contador <=10){
    console.log(`contador = ${contador}`)
    contador++// operador unário 
}
for( let i=1; i <=10 ; i++){// mesmo exemplo de cima porém usado em for, ele pode ser usado como laço, apenas // algumas determinadas situações 
 console.log(`i = ${i}`)
}
const notas= [6.7,7.4,9.8,8.1,7.7]
for( let i=0; i<notas.length; i++){
    console.log(`notas =${notas[i]}`)
}
