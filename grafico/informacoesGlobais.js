const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem   <span> ${dados.total_pessoas_mundo} bilhões </span> de pessoas e que aproximadamente 
    <span>${dados.total_pessoas_conectadas} bilhões </span> estão coectadas em algum rede social e passam em média <span> ${horas} </span> horas e 
    <span> ${ minutos}</span> minutos conectas.
    <br> isso significa que aproximadamente ${porcentagemConectada}%
    e pessoas estão conectadas em alguma rede social.`

}

vizualizarInformacoesGlobais()

    