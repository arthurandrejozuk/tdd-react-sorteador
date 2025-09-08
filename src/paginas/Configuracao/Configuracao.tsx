import Formulario from "../../componentes/Formulario";
import ListaParticipantes from "../../componentes/ListaParticipantes";
import Rodape from "../../componentes/Rodape";

const Configuracao = () => {
    return(
        <>
            <Formulario/>
            <ListaParticipantes/>
            <Rodape noButton={false} />
        </>
    )
}

export default Configuracao;