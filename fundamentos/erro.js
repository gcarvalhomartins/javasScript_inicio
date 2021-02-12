function tratarerroElancar(erro){
    throw new Error('Sorry!') // também se pode lançar números 
    // também pode lançar um atributo com objeto 
    // como 
    //throw {
        //nome:erro.name
        //msg:mensagem:erro
    //    date:new date ,pode colocar uma ID para identificar o erro      } 
}
function imprimirNomeGritado(obj){
    try{
    console.log(obj.name.toUppercase()+'!!!!')// esta com name , nome em inglÊS ,no console,está nome em 
                                              // portugues , por isso o erro!!!.
    } catch (e){
        tratarerroElancar(e)
    } finally{ // finaly sempre vai aparecer, idenpente se der certo ou não. 
        console.log('final')
    }
  
}
const obj = {nome:'Roberto'}
imprimirNomeGritado(obj)
