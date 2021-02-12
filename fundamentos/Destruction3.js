//usando a destruction em função 
function rand({min=0, max=1000}){// usando o desctruction na função 
    const valor =Math.random()*(max-min)+min
    return Math.floor(valor)
}
const obj={max:50,min:40}
console.log(rand(obj))
//console.log(rand({max:50, min:40})) outra forma que pode chamar a função
console.log(rand({min:955}))
console.log(rand({})) // passando aleatóriamente 
console.log(rand())// irá dar erro objeto ou função não especificada. 