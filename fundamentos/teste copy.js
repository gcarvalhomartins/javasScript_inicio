let usuario=''
const apresentacao=`olá ${usuario}
iremos vê os resultados de suas avaliações agora gostaria de prosseguir ?`
const reposta='sim'
const continuacao=`estaremos analisando suas notas, apenas um momento.....
notas analisadas com sucesso. `

console.log(usuario || 'usuario não encontrado',apresentacao,reposta,continuacao)

let avaliacao1=6.00
let avaliacao2=6.00
let avaliacao3=4.00
let  peso1=1.00
let  peso2=1.00
const apresentacao2=`você obteve pesos de notas por participações
 ${peso1}, e ,${peso2} com isso iremos tirar média escolar juntamente com suas provas,que foram 
 ${avaliacao1},e,${avaliacao2},na sua prova final,você tirou ${avaliacao3}`
const calculo=avaliacao1*peso1+avaliacao2*peso2/avaliacao3
const media=calculo/(peso1,peso2)
console.log(apresentacao2,'sua media é',media)

// teste de relacional 
console.log('Teste relacional','1'==1)
console.log('teste relaciona 2 ','2'=== 2)
console.log('teste relacionla 3',3===3)
 
//testando objetos com destruction
let  cliente={

    nome:'hotmail',
    endereço:'gcarvalhomartins23@gmail.com',
    senhas:'**********',
    camisa:{
        tamanho:'M',
        preco:79.90,
        detalhe:'estampa personalizada',

    }
     
}
const {nome,endereço,detalhe}=cliente
console.log(nome,endereço,detalhe)