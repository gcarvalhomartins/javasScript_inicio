// todas essas funções são para vizualizar os dados para exportalos para outro lugar 
// lê também as entradas 
const pessoa ={
    Nome:'Rebeca',
    idade:19,
    peso:58
}
// algumas funções Muito utilizadas 
console.log(Object.keys(pessoa))

console.log(Object.entries(pessoa))

//usado para fazer dados em My sql 
Object.entries(pessoa).forEach(([chave,valor]) =>{
    console.log(`${chave},${valor}`)
})

Object.defineProperties(pessoa,'dataNascimento',{
    enumerable:true,
    writable:false,
    value:'01/10/2000'
})
console.log(Object.keys(pessoa))

// object.assing ecs 2015 
const dest={a:1}
const o1={b:2}
const o2={c:3,a:4}
const obj=Object.assign(dest,o1,o2)

Object.freeze(obj)
obj.c=1234
console.log(obj)