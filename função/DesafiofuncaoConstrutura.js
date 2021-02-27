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
// transformar uma class em função função construtora 
function pessoa2(nome2) {
       this.nome2=nome2
       this.falar=function(){
           console.log(`Meu nome é ${nome2}`)
       }
}
// é a mesma forma de instanciar do primeiro exemplo 
const p2=new pessoa2('Gabriel')
p2.falar() 