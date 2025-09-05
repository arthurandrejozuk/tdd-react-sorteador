import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import FormularioComLista from "."

describe("Deve possuir o conjunto da seção de Formulario", () => {
    test("Verifica se há um titulo", async () => {
        render(<RecoilRoot><FormularioComLista /></RecoilRoot>)
        const titulo = await screen.findByText("Vamos começar!");
        expect(titulo).toBeInTheDocument()
    })
    test("lista de participantes e formulario existe", async () => {
        render(<RecoilRoot><FormularioComLista /></RecoilRoot>)
        const formulario = await screen.findByRole('form');
        const listaDeParticipantes = await screen.findByRole('listbox')
        expect(formulario).toBeInTheDocument();
        expect(listaDeParticipantes).toBeInTheDocument();
    })
})