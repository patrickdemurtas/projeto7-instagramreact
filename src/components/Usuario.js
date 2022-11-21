import React from "react"

export default function Usuario() {

    const [nome, setNome] = React.useState('Catana')
    const [imagem, setImagem] = React.useState('assets/img/catanacomics.svg')
    return (
        <div class="usuario">
            <img onClick={() => setImagem(prompt('Insira uma nova imagem'))} src={imagem} />
            <div class="texto">
                <strong>catanacomics</strong>
                <span>

                    {nome}

                    <ion-icon onClick={() => setNome(prompt('Digite um novo nome'))} name="pencil"></ion-icon>

                </span>
            </div>
        </div>
    )
}


