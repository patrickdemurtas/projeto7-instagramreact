export default function Post() {

    const conteudoPosts = [
        { imagemuser: "assets/img/meowed.svg", usuario: "meowed", imagemconteudo: "assets/img/gato-telefone.svg", imagemlike: "assets/img/respondeai.svg", curtido: "respondeai", quantidade: "101.523" },
        { imagemuser: "assets/img/barked.svg", usuario: "barked", imagemconteudo: "assets/img/dog.svg", imagemlike: "assets/img/adorable_animals.svg", curtido: "adorable_animals", quantidade: "99.159" }
    ]

    return (
        <div class="post">

            {conteudoPosts.map(conteudo => <TopoConteudo dados={conteudo} />)}

        </div>

    )
}

function TopoConteudo(props) {
    return (
        <div>
            <div class="topo">
                <div class="usuario">
                    <img src={props.dados.imagemuser} />
                    {props.dados.usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div class="conteudo">
                <img src={props.dados.imagemconteudo} />
            </div>
            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div class="curtidas">
                    <img src={props.dados.imagemlike} />
                    <div class="texto">
                        Curtido por <strong>{props.dados.curtido}</strong> e <strong>outras {props.dados.quantidade} pessoas</strong>
                    </div>
                </div>
            </div>


        </div>
    )

}





