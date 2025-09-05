
import styled from "styled-components";
import Cabecalho from "../componentes/Cabecalho"

const Styled = styled.div`

    background-color: #FFF9EB;

`

const Default = ({children}:{children:  React.ReactNode}) => {
    
    
    return (
        <Styled>
            <Cabecalho />
            {children}
        </Styled>
    )
}

export default Default;