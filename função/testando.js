function usuario(nome) {
    const self=this
    self.nome=nome
    self.falar=function(){
        console.log(`seja bem vindo ${nome}`)
    
    } 
        
}
// é a mesma forma de instanciar do primeiro exemplo 
const p2=new usuario('Gabriel')
p2.falar() 

function calculoNotas(avaliacao,peso){
    const self=this 
    self.avaliacao
    self.notas=function(avaliacao1,avaliacao2,avaliacao3){
      return console.log(avaliacao1*avaliacao2+avaliacao3)
    }
    
}
const nota1= new calculoNotas()
nota1.notas(4,5,7)

function NotBrowser(Criarusuario){
         return {
            newusuario:()=>console.log(`olá novo ${Criarusuario},seja bem vindo a plataforma `)
         }
    }
const p9=NotBrowser('João marcelo ')
p9.newusuario()

