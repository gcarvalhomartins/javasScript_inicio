// if so vai passar valores verdadeiros 
// ele necessita de um valor pra detectar se é verdadeiro ou Falso.
function soBoanoticia (nota){
    if (nota>=7){
        console.log('aprovado com '+nota)
    }
}
soBoanoticia(8.1)
soBoanoticia(6.1)

function seforVerdadeEufalo(valor){
    if(valor){
        console.log('É verdade .....'+ valor)// ira aparecer apenas valores verdadeiros 
    }
}
seforVerdadeEufalo(true)
seforVerdadeEufalo(" ")
seforVerdadeEufalo(!!"")//falor de falso em booleano 