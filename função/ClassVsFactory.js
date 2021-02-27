// isto é uma classe de criação de objetos
//IMPORTANTE!! não recomendado para usar no browser ,pode causar vários erros no sistema elaborado 

class pessoa {
    constructor(nome){
        this.nome=nome
    }
    falar(){
        console.log(`meu nome é ${this.nome}`)
    }
}
const p1=new pessoa ('João')
p1.falar()

// agora umfa função factory que criar objetos instântaneos , melhor forma de usar no browser 
const Criarpessoa =nome =>{
    return{
        falar:() =>console.log(`Meu nome é ${nome}`)
    }
}
const p2=Criarpessoa('joão')
p2.falar() 