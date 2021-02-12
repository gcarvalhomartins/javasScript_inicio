function comprar(trabalho1,trabalho2){// operadores binário com excessão da operação lógica que é unário 
    const comprarsorvete=trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2)// operação logica exclusiva ou beatwise
    const comprarTv32 = trabalho1 != trabalho2  // ou exclusivo pode ser simulado com diferença. 
    const manterSaudavel= !comprarsorvete // operador unário  negação lógica 
       return{comprarsorvete,comprarTv50,comprarTv32,manterSaudavel}
       
}
console.log(comprar(true,true))
console.log(comprar(true,false))
console.log(comprar(false,true))
console.log(comprar(false,false))












