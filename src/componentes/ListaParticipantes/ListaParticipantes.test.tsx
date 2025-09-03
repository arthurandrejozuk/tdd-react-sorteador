import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import ListaParticipantes from ".";
import { useListaParticipantes } from "../../state/hook/useListaParticipantes";

jest.mock("../../state/hook/useListaParticipantes", () => {
    return {
        useListaParticipantes: jest.fn()
    }
})

describe("Testes com componente ListaParticipantes vazio", () => {
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue([])
    })
    test("Deve ter uma lista vazia de participantes", () => {
        render(<RecoilRoot><ListaParticipantes/></RecoilRoot>)
        const itens = screen.queryAllByRole("listitem");
        expect(itens).toHaveLength(0);
    })
 
})

describe("Teste com componente ListaParticipantes com participantes", () => {
        const participantes = ["José", "Joana"]    
        beforeEach(() => {
            (useListaParticipantes as jest.Mock).mockReturnValue(participantes)
        })
       test("Deve ter uma lista preenchida de participantes", () => {
        render(<RecoilRoot><ListaParticipantes/></RecoilRoot>)
        const itens = screen.queryAllByRole("listitem");
        expect(itens).toHaveLength(participantes.length)
    })
})
