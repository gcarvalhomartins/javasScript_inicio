// o contexto léxico é que dependendo de como chame a função ela sempre irá proucurar o escopo de mais abragencia
// então tome Muito cuidado quando estiver colocando valores em função no scopo principal 
// exemplo , executa o código preguisoço 
const valor='global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
   const valor='local'
   minhaFuncao()
}
exec()