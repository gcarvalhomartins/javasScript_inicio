// Funçõ em js é First class object( Citizens)
// Higher-order function 
// pode tratar função como dados 

// criar função de forma literal 
function fun1(){ }// não retornando valor , a função da undefined

// armazenar em uma variável com função anonima 
const fun2=function(){ }

// armazenar em um array 
const array= [function(a,b){ return a+b},fun1,fun2]
console.log(array[0](2,3))

// armazenar em um atributo de objetos 
const obj={}
obj.falar=function(){return 'opa'}
console.log(obj.falar())

// como passar uma função como parâmetro 
function run(fun){
    fun()
}
run(function(){ console.log('executando....')})

// uma função pode retornar um função/contendo uma função 
function soma(a,b){
    return function (c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)// 4 é o retorno da função c, que foi passada como parâmetro 
// também se pode usar uma const cincoMais=soma(2,3)
// e chamala depois como o exemplo :1cincoMais(4)