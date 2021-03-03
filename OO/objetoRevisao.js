//coleção dinâmica de pares chave/valor
// também pode ter funções dentro dos objetos 
// exemplo abaixo 
const produto=new Object
produto.nome='Fox '
produto['marca do produto']='genérica'
produto.preco=99.99

console.log(produto)
// como excluir os atributos do objeto com essa função 
delete produto.preco
delete ['marca do produto']
console.log(produto)

const carro={
    modelo:'A4',
    valor:89.000,
    proprietário:{
        nome:'Raul',
        idade:57,
        endereço:{
            logradouro:'Rua abc',
            numero:23
        }
    },
    condutores:[{
        nome:'júnior',
        idade:19

    },{
        nome:'ana',
        idade:34
    }],
    calcularValorseguro:function(){
    //......
    }
}
console.log(carro)