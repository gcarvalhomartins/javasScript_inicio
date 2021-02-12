// IMPORTANTE essa não é a melhor função ,evitar estar usando esse tipo de sintaxe,realiada apenas para exemplo 
// Bruto
function area(largura,altura){
    const area=largura* altura 
    if(area>20) {
        console.log(`Valor acima do permitido : ${area}m2`)
    } else {
        return area
    }
}
console.log(are(2,2))
console.log(area(2))// undefined 
console.log(area())// not a number 
console.log(area(2,3,17,22,44))// IMPORTANTE EVITAR PASSAR VÁRIOS PARAMENTOS QUE NÃO FORAM ESCRITOS 
