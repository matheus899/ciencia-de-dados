const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente 
    $ {dados.total_pessoas_conectadas}

}
