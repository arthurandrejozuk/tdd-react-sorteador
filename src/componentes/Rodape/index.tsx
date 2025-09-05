

import { useNavigate } from "react-router-dom";
import { useListaParticipantes } from "../../state/hook/useListaParticipantes"
import { useSorteador } from "../../state/hook/useSorteador";
import styled from "styled-components";

const Styled = styled.footer`
    margin-top: 32px ;
    display: flex;
    align-items: center;
    gap: 32px;
    padding-bottom: 40px;
    button{
        padding: 12px 28px;
        box-shadow: 8px 8px 1px 1px black;
        font-size: 20px;
        border-radius: 32px;
        display: flex;
        align-items: center;
        gap: 16px;
        background-color: #FE652B;
        color: white;
    }
    button:disabled{
        background-color: #fe632b4e;
        box-shadow: 8px 8px 1px 1px gray;
    }

`

const Rodape = () => {
    const participantes = useListaParticipantes();

    const navigate = useNavigate();

    const sortear = useSorteador()
    
    const iniciar = () => {
        
        sortear()
        navigate("/sorteio")
    }

    return(
        <Styled>
            <button onClick={iniciar} disabled={participantes.length < 3 ? true : false}>
                <img src="/assets/Play.png" alt="" />
                <p>Iniciar brincadeira!</p>       
            </button>
            <img src="/assets/Bags.png" alt="" />
        </Styled>
    )
}

export default Rodape;