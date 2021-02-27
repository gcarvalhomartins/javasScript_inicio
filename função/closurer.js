// closure é o escopo criado quando a função é declarada 
// esse escopo permite a função acessar e manipular variáveis externas  à função 
 const x='Global '

 function fora(){
     const x='local'
     function dentro(){
         return x
     }
     return dentro
 }
 const minhaFunção=fora()
 console.log(minhaFunção())
 