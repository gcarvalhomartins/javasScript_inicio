// IMPORTANTE!.let tem a grande diferença que é op scopo por bloco.
// o let permite que aja duas varivaeis uma fora do scopo e uma dentro do scopo
//Possibilitando a existência de duas variaveis em conjunto !!.
let numero=1 
{
    let numero= 2 // o let 
    console.log('dentro=',numero)
}
console.log('fora=',numero)