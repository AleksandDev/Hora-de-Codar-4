var planetas = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"]
function verficarExistencia() {
    var verificacao = true 
    while (verificacao) {
         const planets = prompt("Digite o nome do Planeta: ")
         if (planets && planets.toUpperCase() == planetas){
        planetas.push(planets)
        } else {
            verificacao = false
        }
}
}
document.getElementById("demo").innerHTML = planets