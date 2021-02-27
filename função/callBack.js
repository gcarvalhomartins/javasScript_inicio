//principal objetivo do callback é retornar algo em determinada situação
// ele também funciona em loop ,porém apenas de ir e vir , ele manda algo e retorna algo 
// call back é um loop que sempre passa o nom e chama um indice
const fabricantes= ["Mercedes","audio","Bmw"]
 function imprimirNome(nome,indice){
       console.log(`${indice+1}.${nome}`)
 }
 fabricantes.forEach(imprimirNome)
 fabricantes.forEach(fabricante=>console.log(fabricante))

