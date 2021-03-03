// usandoa notação literal /valor 
const obj1={}
console.log(obj1)

// objeto em Js 
console.log(typeof Object,typeof new Object)// typeof object é uma função, porén new objet se torna um novo obj
const obj2 = new Object
console.log(obj2)

// funções construtoras 
function produto(nome,preco,desc){
    this.nome=nome
    this.getPrecoComDesconto=()=>{
        return preco*(1-desc)
    }
}
const p1=new produto('caneta',7.99,0.15)
const p2=new produto('Notebook',2989.99,0.25)
console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())

// função factory para objetos 
function criarFuncionario(nome,salarioBase,Faltas){
    return{
        nome,
        salarioBase,
        Faltas,
        getSalario(){
            return (salarioBase/30)*(30-Faltas)
        }
    }
}
const f1=criarFuncionario('Gabriel',1500,15)
console.log(f1.getSalario())

// object.creat 
const filha=Object.create(null)
filha.nome='ana'
console.log(filha)

// uma função famosa que retorna um objeto 
const fromJson=JSON.parse('{"infor:"Sou um Json"}')
console.log(fromJson.info)
