//o let em loop,se torna algo bem melhor ,por conta da realização da ação solicitada
//reconhecendo todos os scopos.
const funcs=[]

for (let i=0 ;i<10;i++){
    funcs.push(function(){
          console.log(i)
    })
}
funcs[2]()
funcs[8]()








