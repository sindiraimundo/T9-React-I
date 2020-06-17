import React from 'react';

function Button(props) {//importante colocar a propriedade props quando for utiliza-lá
    // const props ={
    //     clicar: () => {},
    //     texto: ''
    // }
    return (
        // <button onClick={() =>{alert('Pesquisa Google')}}>Pesquisa Google</button>
        // <button onClick={() =>{alert('Está com sorte')}}>Estou com Sorte</button>
        
        <button onClick={props.clicar}> {props.texto}</button>// button utilizando o props
    );
}

export default Button;

