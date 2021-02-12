Number.prototype.resultado=function(alpha,omega){
 return this >=alpha && this <=omega 
}
const teste=function(nota){
    if(nota.resultado(9.00,10.00)){
        console.log('Quadro de Honra ')
    } else if(nota.resultado(3.00,8.99)){
        console.log('Recuperação')
    } else if(nota.resultado(1.99,2.99)){
        console.log('não tem jeito ')
    } else {
        console.log('nota invalida')
    }
}
teste(8)         


// exemplo de login em html function login(){
    //let done =0
    //let usuario=documento.login-inputs.usuario.value;
    //usuario=usuario.toLowerCase();
    //let senha=document.login-inputs.senha.value;
    //senha=senha.toLowerCase();
    //if (usuario==="admin" && senha=="admin"){
      //  window.location
    //} 
//}
