import React from 'react';

// function Input(props) {
//     return (
//     <input type={props.tipoDoInput}></input>
    
//     );
// }

function Input() {
    let valor = "Digite seu nome aqui";//armazenando valor do componente na variavel valor
    return (
        <div>
            <input onChange={(e) =>{//adicionando evento de pegar cada valor digitado no input
                valor = e.target.value;
                console.log(valor);//retornando cada valor digitado
            }}></input>
            <p>{valor}</p>
        </div>

    )

}



export default Input;
