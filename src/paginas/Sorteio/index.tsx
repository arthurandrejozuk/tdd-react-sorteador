import { useState } from "react";
import { useListaParticipantes } from "../../state/hook/useListaParticipantes";
import {useResultadoDoSorteio} from "../../state/hook/useResultadoDoSorteio";
import Default from "../../layout/Default";
import styled from "styled-components";
import Rodape from "../../componentes/Rodape";


const Styled = styled.section`
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    bottom: 32px;
    border-top: 2px solid;
    border-top-right-radius: 32px;
    border-top-left-radius: 32px;
    background-color: #FFF9EB;
    gap: 40px;
    form{
        display: flex;
        padding: 32px;
        width: 40%;
        select{
            width: 100%;
            padding: 16px;
            border-top-left-radius: 32px;
            border-bottom-left-radius: 32px;
            border: 1px solid;
            font-size: 20px;
            box-shadow: 8px 8px 1px 1px black;
        }
        button{
            border-top-right-radius: 32px;
            border-bottom-right-radius: 32px;
            width: 20%;
            border: 1px solid black;
            border-left: 0px;
            font-size: 20px;
            box-shadow: 8px 8px 1px 1px black;
            background-color: #d68b00;
            color: white;
            cursor: pointer;
        }
    }
    p{
        color: #d68b00;
        font-size: 28px;
    }
`

const Sorteio = () => {
    const listaParticipantes = useListaParticipantes();
    const [participanteDaVez, setParticipanteDaVez] = useState("")
    const [amigoSecreto, setAmigoSecreto] = useState("")
    const resultado = useResultadoDoSorteio()
    const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        if(resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!)
        }
    }    
    return(
        <Default>
            <Styled>
                <form onSubmit={sortear}>
                    <select
                    value={participanteDaVez}
                    onChange={(event) => setParticipanteDaVez(event.target.value)}
                    placeholder="Selecione o seu nome"
                    required name="participanteDaVez" id="participanteDaVez">
                        {listaParticipantes.map(participante => (
                            <option>
                                {participante}
                            </option>
                        ))}
                    </select>
                <button>Sortear</button>
                </form>
                {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
            </Styled>
        </Default>
    )
}

export default Sorteio;