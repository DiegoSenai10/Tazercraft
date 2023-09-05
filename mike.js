const btnSortear = document.querySelector('.sortear');
const textarea = document.querySelector('textarea')
const tagResultado = document.querySelector('.resultado p')
const popUpResultado = document.querySelector('resultado')

function pegarDadosFormualario() {
    const valorCampo = textarea.value;
    const listaNomes = valorCampo.split(",")
    const tamanhoArray = listaNomes.length
    const posicaoNomes = gerarNumeroAleatorio (tamanhoArray);
    const nome = listaNomes[posicaoNomes]
    mostrarResultado(nome);
    textarea.value = ""
}

btnSortear.addEventListener("click", pegarDadosFormualario);

function gerarNumeroAleatorio(tamanhoArray) {
    return Math.floor(Math.random()*(tamanhoArray-0)+0);
}

function mostrarResultado(nome) {
    tagResultado.innerHTML = `Resultado: ${nome}`
    popUpResultado.classList.add("Resultado");
}