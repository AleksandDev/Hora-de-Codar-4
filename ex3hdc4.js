var list = ['maçã', 'banana', 'laranja', 'amora']
const frutas = prompt("Digite o nome da fruta que deseja remover do carrinho: ").toLowerCase();
if (list.includes( frutas )){
    list.splice(list.indexOf(frutas), 1)
    alert(`${list} já existe na lista`)
} else {
   alert('Fruta inexistente')
}
