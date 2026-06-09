import { Link } from 'react-router-dom'
import './style.css'

function Equipe () {
    return(
        <>
        <h1>Membros da equipe</h1>
        <h3> </h3>
        <h3>Membro 1: Cauã</h3>
        <h3>Responsavel pelo react</h3>
        <h3> </h3>
        <h3>Membro 2: Nathalia</h3>
        <h3>Responsavel pela API</h3>

        <Link to="/" >
        <button>navegar para pagina inicial</button>
        </Link>
        </>
    )
}

export default Equipe