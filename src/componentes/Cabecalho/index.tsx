import styled from "styled-components";

const Header = styled.header`
    
    display: flex;
    justify-content: center;
    background-color: #4B69FD;
    align-items: center;
    img{
        display: flex;
        align-items: center;
    }
    .logo{
        width: 400px;
    }
    .wavy{
        z-index: 10;
        position: relative;
        top: 10px;
        width: 600px;
    }
`

const Cabecalho = () => (
    <Header>
        <img className="logo" src="/assets/Logo.png" alt="Sorteador de Amigo Secreto" />
        <img className="wavy" src="/assets/Wavy.png" alt="Uma moça sorteando um amigo secreto" />
    </Header>
)

export default Cabecalho;