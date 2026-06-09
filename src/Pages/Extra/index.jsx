import { Link } from 'react-router-dom'
import './style.css'

function Extra () {
    return(
        <>
        <h1>Pagina extra</h1>
        <h3> </h3>
        <h3>Eu estava sem ideia então decidi chamar essa pagina de "Extra"</h3>

        <Link to="/" >
        <button>navegar para pagina inicial</button>
        </Link>
        </>
    )
}

export default Extra