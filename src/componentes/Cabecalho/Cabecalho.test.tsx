import { render, screen } from "@testing-library/react"
import Cabecalho from ".";


describe("Testes no componente de cabeçalho", () =>{
    test("Verifica se o texto alt de cabeçalho existe na tela", async () => {
        render(<Cabecalho/>)
        const textoCabecalhoAlt = await screen.findByAltText("Sorteador de Amigo Secreto");      
        expect(textoCabecalhoAlt).toBeInTheDocument();
    })
    test("Verifica se imagem do cabeçalho existe na tela", async () => {
        render(<Cabecalho/>)
        const imagemCabecalho = await screen.findByAltText("Uma moça sorteando um amigo secreto")
        expect(imagemCabecalho).toBeInTheDocument();
    })
    test("Verifica se todas as imagens estão na tela", async () => {
        render(<Cabecalho/>)
        const imagem = await screen.findAllByRole("img"); 
        expect(imagem).toHaveLength(2);
    }) 
})