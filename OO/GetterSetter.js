// get e seter é para melhoar o encapisulamento do objeto, porém o usuario pode alterar o valor a qualquer momento

const sequencia={
    _valor:1,
    get valor(){return this._valor++},
    set valor(valor){
        if (valor>this._valor){
            this._valor=valor
        }
    }
}
console.log(sequencia.valor,sequencia.valor)
sequencia.valor=1000
console.log(sequencia.valor,sequencia.valor)
// o set ,não deixar retroceder o valor,é como uma contagem toda hora para frente 
//o get você fornece o valor a qual não pode voltar 
// como no exemplo abaixo o set não irá deixar retroceder a contagem 
sequencia.valor=900
console.log(sequencia.valor,sequencia.valor)
