import React, { useRef, useState } from 'react'
import { useAdicionarParticipante } from '../../state/hook/useAdicionarParticipante';
import { useMensagemDeErro } from '../../state/hook/useMensagemDeErro';
import styled from 'styled-components';

const Form = styled.form`

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px;
    border-radius: 32px;
    width: 100%;
    input, button{
      padding: 20px;
      font-size: 16px;
      border: 2px solid;
      box-shadow: 12px 6px 1px;
    }
    button{
      border-top-right-radius: 24px;
      border-bottom-right-radius: 24px;
      width: 20%;
    }
    button:disabled{
      background-color: #ffffff;
    }
    input{
      border-top-left-radius: 24px;
      border-bottom-left-radius: 24px;
      width: 40%;
    }
  

`

const ErrorMessage = styled.p`
  
    padding: 32px;
    font-size: 20px;
    color: red;

`

const Formulario = () => {
  
  const [nome, setNome] = useState('')
  const inputRef = useRef<HTMLInputElement>(null);
  const adicionarNaLista = useAdicionarParticipante();
  const mensagemDeErro = useMensagemDeErro();

    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        adicionarNaLista(nome);

        setNome('');
        inputRef.current?.focus();
    }

  return (
  <>
  <Form role='form' onSubmit={adicionarParticipante}>
        <input ref={inputRef} value={nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder='Insira os nomes dos participantes' />
        <button disabled={!nome}>Adicionar</button>
        
      </Form>
      {mensagemDeErro && <ErrorMessage role='alert'>{mensagemDeErro}</ErrorMessage>}
  </>
  )
}

export default Formulario;
