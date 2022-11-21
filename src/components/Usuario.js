import React from "react"

export default function Usuario() {

    const [nome, setNome] = React.useState('Catana')
    const [imagem, setImagem] = React.useState('assets/img/catanacomics.svg')
    return (
        <div data-test="user" class="usuario">
            <img data-test="profile-image" onClick={() => setImagem(prompt('Insira uma nova imagem'))} src={imagem} />
            <div class="texto">
                <strong>catanacomics</strong>
                <span data-test="name">
                    {nome}
                    <ion-icon data-test="edit-name" onClick={() => setNome(prompt('Digite um novo nome'))} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}


