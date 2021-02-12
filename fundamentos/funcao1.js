// função sem retorno 
function imprimirsoma(a,b){
    console.log(a+b)
}
imprimirsoma(2,3)//pode atribuir parâmetros "fora da função"
imprimirsoma(2)// esta somando um valor com undefined ,irá dar "erro"
//para evitar esse tipo de erro pode-se usar o ||"ou" para fazer o cálculo

//função com retorno: pra uma ter retorno se usa = juntamente com a função Return
function soma(a,b=1){
    return(a+b)
}
console.log(soma(2,3))
console.log(soma(2))
