

import { useNavigate } from "react-router-dom";
import { useListaParticipantes } from "../../state/hook/useListaParticipantes"
import { useSorteador } from "../../state/hook/useSorteador";

const Rodape = () => {
    const participantes = useListaParticipantes();

    const navigate = useNavigate();

    const sortear = useSorteador()
    
    const iniciar = () => {
        
        sortear()
        navigate("/sorteio")
    }

    return(
        <footer>
            <button  onClick={iniciar} disabled={participantes.length < 3 ? true : false}>
                Iniciar brincadeira
            </button>
        </footer>
    )
}

export default Rodape;