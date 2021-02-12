// objetos são {} chaves 
// objeto é uma coleção de chave,pode ser incluído até mesmo booelanos,funções,arrays,etc....
const prod1={}
prod1.nome='celular ultra mega'
prod1.preço=4998.90
prod1['Desconto Legal']=0.40

console.log(prod1)
//segunda forma de criar um objeto 
const prod2={
    nome:'camisa Polo',// dentro do objeto sempre utilizar : 'dois Pontos'
    preco: 79.90,
     obj :{ // pode se "repetir palavras dentro do objeto"
         blabla:1,
        obj:{// porque cada objeto é único....
            blabla:2
        }

     }
    }

console.log(prod2)