// IMPORTANTE!! O WHILE SÓ ENTENDE VERDADEIRO OU FALSO ,PARA SAIR DO LAÇO 
//IMPORTANTE !! O while é focado em estar toda hora execuntando repetições 
function imprimirAleaotiramente(max,min){
    const valor=Math.random()*(max-min)+min//PRESTA ATENÇÃO AO MENCIONAR OS VALORES !!!
    return Math.floor(valor)
}
let opcao=0

while (opcao!=-1){
    opcao=imprimirAleaotiramente(-1,10)
    console.log(`opção escolhida foi ${opcao}. `)
}
console.log('Até a próxima!')