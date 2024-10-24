var planetas = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"]
function verficarExistencia() {
         const planets = prompt("Digite o nome do Planeta: ").toLowerCase();
         if (planetas.includes( planets[0].toUpperCase() )){

             alert(`${planetas} já existe na lista`)
        } else {
            planetas.push(planets)
        }
}
verficarExistencia()
