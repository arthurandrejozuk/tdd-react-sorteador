import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { useListaParticipantes } from "../../state/hook/useListaParticipantes"
import Sorteio from "."
import {useResultadoDoSorteio} from "../../state/hook/useResultadoDoSorteio"

// Faz o mock de função useListaParticipantes
jest.mock("../../state/hook/useListaParticipantes", () => {
    return {
        useListaParticipantes: jest.fn()
    }
})

jest.mock("../../state/hook/useResultadoDoSorteio", () => {
    return {
        useResultadoDoSorteio: jest.fn()
    }
})


describe("A pagina de sorteio", () => {
    const resultado = new Map([
        ["Ana", "José"],
        ["Carlos", "Ana"]
    ])
    const participantes = [
        "Carlos",
        "Agata",
        "José"
    ]
    // Utiliza o useListaParticipantes como mock e insere um valor
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
        (useResultadoDoSorteio as jest.Mock).mockReturnValue(resultado)
    })
    test("todos os participantes podem exibir o seu amigo secreto", () => {
        render(<RecoilRoot><Sorteio/></RecoilRoot>)
        // Exibe todas as options onde estão localizados os participantes
        const opcoes = screen.queryAllByRole("option");
        expect(opcoes).toHaveLength(participantes.length)
    })
    test("O amigo é exibido quando solicitado", () => {
        render(<RecoilRoot><Sorteio/></RecoilRoot>)
        const select = screen.getByPlaceholderText("Selecione o seu nome");
        fireEvent.change(select, {
            target: {
                value: participantes[0]
            }
        })
        const botao = screen.getByRole("button")
        fireEvent.click(botao);
        const amigoSecreto = screen.getByRole("alert");
        expect(amigoSecreto).toBeInTheDocument()
    })
})