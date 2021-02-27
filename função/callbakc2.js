// função normal para chamada de notas baixas 
const notas =[7.7,6.5,5.2,8.9,3.6,7.1,9.0]

const notasbaixas1=[]
for(let i in notas){
    if (notas[i]<7){
        notasbaixas1.push(notas[i])
    }
}
console.log(notasbaixas1)

// com callback 
notasbaixas2=notas.filter(function(nota){
    return nota<7
})// essa função filter so irá aparecer os objetos verdadeiros, se der falso não ira aparecer
console.log(notasbaixas2)
// outro exemplo de callback 
const notasbaixas3=notas.filter(nota => nota<7)
console.log(notasbaixas3)