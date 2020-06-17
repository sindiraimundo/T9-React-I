import React from 'react'


function Card(props) {
    return (
        <div>
            <h1>{props.titulo}</h1>
            <h2>{props.subtitulo}</h2>
            <img src={props.imagem} alt={props.textoImg}></img>
        </div>
    )
}

export default Card;