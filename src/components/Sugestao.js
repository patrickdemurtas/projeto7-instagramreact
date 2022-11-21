export default function Sugestao() {

    const conteudoSugestoes = [
        { imagem: "assets/img/bad.vibes.memes.svg", texto: "bad.vibes.memes" },
        { imagem: "assets/img/chibirdart.svg", texto: "chibirdart" }
    ]

    return (

            conteudoSugestoes.map(conteudo => <ConteudoSugest dadossugest={conteudo} />)

            

    )
}

function ConteudoSugest(props) {
    return (
        <div class="sugestao">
        <div class="usuario">
            <img src={props.dadossugest.imagem} />
            <div class="texto">
                <div class="nome">{props.dadossugest.texto}</div>
                <div class="razao">Segue você</div>
            </div>
        </div>
        <div class="seguir">Seguir</div>
        </div>
    )
}