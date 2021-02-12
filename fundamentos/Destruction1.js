// novo recurso incrementado no es2015
const pessoa= {
   nome:'Ana',
   idade:5,
   endereco:{
       logadouro:'Rua ABC',
       numero:1000
   }
}
const{ nome,idade}=pessoa 
console.log(nome,idade)
// forma diferente de criar varivaeis usando destruction 
const{nome:n, idade:i}=pessoa 

// causando erro no destruction
const {sobrenome,bemHumorada=true}=pessoa 
console.log(sobrenome,bemHumorada)
// chamando de forma diferente arquivos de dentro do 


const {endereco:{logadouro,numero,cep}}=pessoa
console.log(logadouro,numero,cep)
//tentando chamar algo que ão existe dentro do objeto 
const {conta:{agencia,num}}=pessoa
console.log(agencia,num)