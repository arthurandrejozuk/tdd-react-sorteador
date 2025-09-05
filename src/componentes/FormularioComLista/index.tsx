import styled from "styled-components";
import Formulario from "../Formulario";
import ListaParticipantes from "../ListaParticipantes";
import Rodape from "../Rodape";
import { useListaParticipantes } from "../../state/hook/useListaParticipantes";

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
    h3{
        margin-top: 60px;
        font-size: 32px;
        color: #4B69FD;
        font-weight: 600;
    }
`



const FormularioComLista = () => {

    const listaDeParticpantes = useListaParticipantes()

    return (
        <Styled>
            <h3>Vamos começar!</h3>
            <Formulario />
           {listaDeParticpantes ? <Rodape/> :<ListaParticipantes/>}
        </Styled>
    )   
}

export default FormularioComLista;