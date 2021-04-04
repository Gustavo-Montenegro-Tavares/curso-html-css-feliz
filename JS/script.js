const pokemon = parseInt(Math.random() * 10);
console.log(numeroSortido);
const botao = document.querySelector("button");

function verificaPokemon(){
    const input = document.querySelector("input");
    const chute = input.value;

    if(pokemon == chute){
        input.value = "Você acertou!!!";
    }else{
        input.value = "Você errou!!!";
}

}
botao.onclick = verificaPokemon;

