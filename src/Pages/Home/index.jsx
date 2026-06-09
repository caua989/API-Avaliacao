import { Link } from 'react-router-dom'
import './style.css'

function Home () {
    return (
        <>
        <h1>Pagina inicial</h1>
        <h3> </h3>
        <h2>Esse pagina tem a função de ser a principal</h2>
        <h3> </h3>
        <h3> </h3>
        <h2>O botao para "Equipe" levara para uma pagina com os membros do grupo e sua principal função</h2>
        <h3> </h3>
        <h2>O botao para "Extra" levara para uma pagina extra</h2>
        <h3> </h3>
        <h2>O botao para "API" levara para uma pagina com a API funcionando</h2>
        <h3> </h3>

        <Link to="/Equipe" >
        <button>navegar para Equipe</button>
        </Link>

        <Link to="/Extra" >
        <button>navegar para extra</button>
        </Link>

        <Link to="/Paginaapi" >
        <button>navegar para API</button>
        </Link>
        </>

    )
}

export default Home