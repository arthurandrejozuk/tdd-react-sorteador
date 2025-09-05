import { realizaSorteio } from "./realizaSorteio";

describe("dado um sorteio de amigo secreto", () => {
    test("cada participante não sorteie o proprio nome", () => {
        
        const participantes = ["Ana", "Carlos", "João", "Cleber", "José"];
        // Chama o realizaSorteio que retorna um Map
        const sorteio = realizaSorteio(participantes);
        // para cada participante ele pega o amigo secreto e verifica se não é igual o participante
        participantes.forEach(participante => {
           const amigoSecreto = sorteio.get(participante);
           expect(amigoSecreto).not.toEqual(participante);
        })
    })
})