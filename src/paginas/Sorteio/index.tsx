import { useState } from "react";
import { useListaParticipantes } from "../../state/hook/useListaParticipantes";
import {useResultadoDoSorteio} from "../../state/hook/useResultadoDoSorteio";

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
        <section>
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
        </section>
    )
}

export default Sorteio;