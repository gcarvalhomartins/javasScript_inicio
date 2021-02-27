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


