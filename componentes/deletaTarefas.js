const BotaoDeleta = () => {
    const BotaoDeleta = document.createElement('button')

    BotaoDeleta.innerText = 'deletar'
    BotaoDeleta.addEventListener('click', deletarTarefa)
    return BotaoDeleta
}

const deletarTarefa = (evento) => {
    const BotaoDeleta = evento.target

    const tarefaCompleta = BotaoDeleta.parentElement

    tarefaCompleta.remove()

    return BotaoDeleta
}

export default BotaoDeleta