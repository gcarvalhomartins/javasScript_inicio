//problema histórico do javascript,por conta de ,como var não possui scopo, ele ignora todos os comandos
// fazendo assim uma chamada totalmente diferente do que foi solicitada. 
const funcs=[]

for (var i=0 ;i<10;i++){
    funcs.push(function(){
          console.log(i)
    })
}
funcs[2]()
funcs[8]()
