import shuffle from "just-shuffle";

// Função para sortear amigo secreto
export function realizaSorteio (participantes: string[]) {
      const totalDeParticipantes = participantes.length;
        const embaralhado = shuffle(participantes);
        const resultado = new Map<string, string>()
        for(let i = 0; i < totalDeParticipantes; i++) {

            const indiceDoAmigo = i === (totalDeParticipantes - 1) ? 0 : i + 1;
            resultado.set(embaralhado[i], embaralhado[indiceDoAmigo]);

        }
        return resultado;
}