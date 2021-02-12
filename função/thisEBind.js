// esse objeto essa recebendo o This , sem ele na função abaixo, iria dar erro de sintaxe
// quando for usar o obj sempre use uma função com this dentro dela 

const pessoa ={
    saudacao:'Bom dia ',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()
//armazenando a função em uma variável irá dar um erro :
const falar=pessoa.falar
falar()// paradgma do Funcional com o OO
// usando Bind para realizar o processo para realizar o this dentro do oBJ 
const falarDepessoa=pessoa.falar.bind(pessoa)// sempre tem que passar um argumento para bInd 
falarDepessoa()// Bind que irá realizar essa amarração da variável 
