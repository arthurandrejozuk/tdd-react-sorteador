import { useListaParticipantes } from "../../state/hook/useListaParticipantes"

const ListaParticipantes = () => {
    const participantes: string[] = useListaParticipantes()
    return(
        <ul role="listbox">
            {participantes.map(participante => {
                return(
                    <li key={participante}>
                        {participante}
                    </li>
                )
            })}
        </ul>
    )
}

export default ListaParticipantes;