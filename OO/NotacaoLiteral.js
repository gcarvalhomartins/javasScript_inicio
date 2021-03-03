const a =1
const b=2
const c=3

// forma antiga de criar objetos 
const obj1={a:a ,b:b,c:c}
// nova forma com Js6 
const obj2={a,b,c}
console.log(obj1,obj2)

// criando objeto atraves de uma string 
const NomeAttr='nota'
const Valorattr=7.99

const obj3={}
obj3[NomeAttr]=Valorattr
console.log(obj3)

// outra forma de chamar um objeto usando string 
const obj4={[NomeAttr]:Valorattr}
console.log(obj4)

// antiga forma de colocar função em objetos 
const obj5={
    funcao1:function(){
        // chamada function expression 
    },
    // nova forma de chamar unma função em objeto Js6
    funcao2(){

    }
}
console.log(obj5)
