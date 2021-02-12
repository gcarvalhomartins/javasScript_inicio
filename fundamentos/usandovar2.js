//o var quando não está dentro de uma função ele ignora os scopos
var numero=1
{
    var numero=2
    console.log('dentro =',numero)
}
console.log('fora =',numero)
// o console deu dentro 2 e fora 2 ,porque o var deu prioridade para o numero que estava dentro do scop
// ele sobrer escreveu a variavel!!.
