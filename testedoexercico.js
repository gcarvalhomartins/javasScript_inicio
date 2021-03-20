// testando this global

function carro(velocidadeMaxima=200,delta=5){
    const self=this
    let velocidadeatual=0
    self.acelerar=function(){
        if (velocidadeatual+delta<=velocidadeMaxima){
            velocidadeatual+=delta
        } else {
            velocidadeatual=velocidadeMaxima
        }
    }
    self.getatual=function(){
        return velocidadeatual
    }
}
const celta=new carro
celta.acelerar()
celta.acelerar()
celta.acelerar()
celta.acelerar()
console.log(celta.getatual())


const usuarios={ nome:'Gabriel',Senha:19.9}





//testando memoria fotografica
function Baskara(ax2,bx,c){
    let resultado=[]
    let delta =(bx**2)-(4*ax2-c)
    if(delta<0){
        return console.log('Delta negativo')
    }
    let x1=(-bx+Math.sqrt(delta))/2*ax2
    let x2=(-bx-Math.sqrt(delta))/2*ax2
    resultado.push(x1)
    resultado.push(x2)
    return resultado
}
console.log(Baskara(1,0,3))


function NotBrowser(criarUsuario){
    return {
        Newusuario:()=>console.log(`usuario ${criarUsuario} criado com sucesso`)
    }
}
const expondousuario=NotBrowser('Conseguiu')
expondousuario.Newusuario()
// testando saida de seja be vindo ao úsuario 


// testando criação de análise de OO 
function produto(nome,preco,desconto){
    const self=this
    self.nome=nome
    self.desconto=()=>{
        return preco*(1-desconto)
    }
}
const p1= new produto('Notebook',1499.99,0.4)
console.log(p1.desconto())

function Analise(nome,SB,ausencia){
  return {nome,
    SB,
    ausencia,
    Calculodesalario(){
        return (SB/30)*(30-ausencia)
    }
  }
}
const funcionario1=new Analise('Matheus',5000.00,20)
console.log(funcionario1.Calculodesalario())
