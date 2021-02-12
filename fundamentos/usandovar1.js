//ATENÇÃO JUMENTO: VAI USAR VAR COLOCA ELE DENTRO DE UMA FUNÇÃO!!.
// Importante: quando eu defino uma variavel dentro de uma função so poderei imprimir o valor dentro do scop 
// fora dele vai dar erro!!!. 
//importante se eu colocar uma variavel fora de um função ela irá para o Window(vai dar merda)
// ou seja toda vez que for colocar uma variavel coloque ela dentro de uma função e imprima dentro do scop!!.
{
    {
        {
            {
               var sera= 'sera???'
            }
        }
    }
}
console.log(sera)//conceito scopo é o local onde a variavel é visivel 
// a variavel var mesmo que seja exposta fora do bloco de chaves ,ela irá reconhecer o valor
//variavel definida com var so tem dois scopos visíveis
//outro exemplo 
function teste(){// com este tipo de função o valor so será imprimido se a chamada estiver dentro do scop
    var local=123 
    //console.log(local) pra não dar erro 
}
teste()// deste jeito da erro 
console.log(local)