import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Rodape from ".";
import { useListaParticipantes } from "../../state/hook/useListaParticipantes"
import { useSorteador } from "../../state/hook/useSorteador";

jest.mock("../../state/hook/useListaParticipantes", () => {
    return {
        useListaParticipantes: jest.fn()
    }
})

const mockNavegacao = jest.fn()
const mockSorteio = jest.fn();

jest.mock("../../state/hook/useSorteador", () => {
    return {
        useSorteador: () => mockSorteio
    }
})

jest.mock("react-router-dom", () => {
    
    return {
        useNavigate: () => mockNavegacao
    }
})

describe("onde não existe participantes suficientes", () => {
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue([])
    }) 
    test("A brincadeira não pode ser iniciada", () => {
        render(<RecoilRoot><Rodape noButton={false}/></RecoilRoot>)
        const botao = screen.getByRole("button")
        expect(botao).toBeDisabled();
    })
})

describe("quando existem participantes suficientes", () => {
    const participantes = ["Jose", "Carlos", "Joana"]
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes)
    })
    test("A brincadeira pode ser iniciada", () => {
        render(<RecoilRoot><Rodape noButton={false} /></RecoilRoot>)
        const botao = screen.getByRole("button");
        expect(botao).toBeEnabled();
    })
    test("A brincadeira foi iniciada",() => {
        render(<RecoilRoot><Rodape noButton={false} /></RecoilRoot>)
        const botao = screen.getByRole("button")
        fireEvent.click(botao)
        expect(mockNavegacao).toHaveBeenCalled()
        expect(mockNavegacao).toBeCalledWith("/sorteio")
        expect(mockSorteio).toHaveBeenCalledTimes(1)
    })
})