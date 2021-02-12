// pode se atribuir uma constante que recebe this como em self
// assim so chamar a constante que ela será como this 
function pessoa(){
    this.idade=0
    const self=this//pode usar esse drible 
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/,1000)
}
new pessoa