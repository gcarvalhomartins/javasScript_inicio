// exercicio 1 , Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores
function soma(a,b){
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
}
soma(3,5)
/*2 ) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/
function triangulo(a,b,c){
  if(a==b && b==c){
      console.log('equilatero')
  } else if( a==b && b!=c ){
      console.log('Isóceles')
  } else if (a != b && b != c){
      console.log('escaleno')
  }
}
triangulo(3,3,3)
triangulo(4,4,5)
triangulo(2,3,4,)
/*3)Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.*/
function calculo(base,expoente){
    const elevada=Math.pow(base,expoente)
    if(elevada !=calculo) {
        return console.log(`o calculo é igual a=${elevada} `)
    }
}
calculo(7,2)

/*4)Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/
function divisao(dividendo,divisor){
    const resultado=dividendo/divisor 
    if(dividendo != divisor){
        return console.log(`resultado da divisão é =${resultado}`)
    }
}
divisao(10,3)

/*05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto). */
//function valorDecimal(valorDecimal){
  // const valoremReais=`R$ ${valorDecimal.tofixed(2).tostring().replace(",",",")}`
    //console.log(valoremReais)
//}
//valorDecimal(0.1+0.2)
/*6)Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */
function emprestimo(capitalinical,taxadejuros,tempodeaplicacao){
    const jurosimples=capitalinical*taxadejuros*tempodeaplicacao
    if(capitalinical>=taxadejuros){
        return console.log(`seus juros simples são ,${jurosimples}`)
    }
}
emprestimo(1.500,0.2,3)

function emprestimo2(capitalinical,taxadejuros,tempodeaplicacao){
    taxadejuros=0.3 || console.log('taxa abaixo do esperado ')
    const juroscomposto=capitalinical*taxadejuros*tempodeaplicacao
    if(taxadejuros<0.3){
        return console.log(`crédito não aprovado`)
    } else if(taxadejuros>=0.3){
        console.log(` suas parcelas ficaram: ${juroscomposto},juntamente com 
        crédito aprovado de ${taxadejuros} ao mês`)
    }
}
emprestimo2(3.000,0.3,5)

/*07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.*/
function Bhaskara(ax2,bx,c){
    let resultados= []
    let delta = (bx **2)- (4*ax2*c)
    if(delta<0){
        return console.log('Delta negativo')
    }
    let x1= (-bx+Math.sqrt(delta))/2*ax2
    let x2= (-bx-Math.sqrt(delta))/2*ax2
    resultados.push(x1)
    resultados.push(x2)
    return resultados
}
console.log(Bhaskara(1,3,2))

/*08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todas as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).*/
/*Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)*/
let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}
 
console.log(avaliaPontuacoes(stringPontuacoes))

