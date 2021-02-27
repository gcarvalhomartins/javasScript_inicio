// IMPORTANTE , SEMPRE QUE USAR O THIS ESTARÁ USANDO O GLOBAL

let comparacomThis=function(param){
    console.log(this===param)
}
comparacomThis(global)

const obj={
  comparacomThis=comparacomThis.bind(obj)
}
comparacomThis(global)

let comparacomThisArrow=param=>console.log(this===param)
comparacomThisArrow(global)
comparacomThisArrow(module.exports)

comparacomThisArrow=comparacomThisArrow.bind(obj)



