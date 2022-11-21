export default function Story() {

    const conteudoStories = [
        { imagem: "assets/img/9gag.svg", usuario: "9gag" },
        { imagem: "assets/img/meowed.svg", usuario: "meowed" }
    ]

    return (

        conteudoStories.map(conteudo => <ImagemUsuarioStory story={conteudo}/>
            
        )



    )
}

function ImagemUsuarioStory(props){
    return(
        <div class="story">
                <div class="imagem"><img src={props.story.imagem} /></div>
                <div class="usuario">{props.story.usuario}</div>
            </div>
    )

}