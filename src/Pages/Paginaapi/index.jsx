import { Link } from 'react-router-dom'
import './style.css'

function Paginaapi () {
    return (
        <>
        <h1>Tentei</h1>

        <Link to="/" >
        <button>navegar para pagina inicial</button>
        </Link>
        </>

    )
}

export default Paginaapi
//import { Await, Link } from 'react-router-dom';
//import './style.css';
//import { useEffect, useState } from 'react';
//import { getCharacters } from '../../API/futorama';
//import Card from '../../components/Card';
 
//function Paginaapi() {
 
    //const [carrgando, setCarrando] = useState(true);
    //const [personagens, setPersonagens] = useState([]);
 
    //useEffect(() => {
        //async function carregar() {
            //const dados = await getCharacters()
            //setPersonagens(dados)
            //setCarrando(false)
        //}
 
 
 
        //carregar()
    //}, [])
 
    //if (carrgando) {
        //return (
            //<> CARREGANDO... </>
        //)
    //}
 
    //return (
        //<div className='home page'>
            //<h2 className='titulo-lista'>Personagens - Futorama</h2>
 
            //<div className='lista-personagens'>
                //{personagens.map((personagem) => (
                    //<Card personagem={personagem} />
                //))}
            //</div>
        //</div>
    //)
//}
 
//export default Paginaapi