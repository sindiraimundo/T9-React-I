import React from 'react'
import gato from '../../img/gato.jpg'
import cachorro from '../../img/cachorro.jpg'
import pets from '../../img/pets.png'

class SecaoPets extends React.Component {
    constructor() {
        super();
        this.state = {
            imagem: pets
        }

    }

    render() {

        return (
            <div>
                <img src={this.state.imagem} alt="foto de pet"></img> 


                <button onClick={() => {
                    this.setState({ imagem: gato })
                }}>Gato</button>
                <button onClick={() => {
                    this.setState({ imagem: cachorro })
                }}>Cachorro</button>
            </div>
        );
    }
}

export default SecaoPets;