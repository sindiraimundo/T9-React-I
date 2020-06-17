import React from 'react';
import Button from '../../componentes/Button/Button';
import BemVinda from '../../componentes/BemVinda/BemVinda';
import './Home.css';
import imagemGoogle from '../../img/google.png'


function Home() {
    const cliqueBotao = () => {
        alert('oi')
    }
    return (
        <div className="cabecalho">
            <img src={imagemGoogle} alt="logo do google"></img>
            <input className="cxinputado" type="text"/>
            <div className="btnPesquisa">
               {/* puxando do componente<Button clicar={() => console.log('oi')} texto="Diga oi"/> */}
               {/* vindo de função vindo de fora*/}
               <Button 
               clicar={cliqueBotao}
               texto="Diga oi"/>
               <Button 
               clicar={() => alert('tchau')}
               texto="Diga tchau"/>
            </div>
            <BemVinda
                nome= "Maria Lucia"
                sobrenome="Pereira"
                cidade="Canhotinho"
            />
            <BemVinda
                nome= "Fernando"
                sobrenome="Gutemberg"
                cidade="São Paulo"
            />
        </div>
    );
}

export default Home;