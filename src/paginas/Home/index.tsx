
import FormularioComLista from "../../componentes/FormularioComLista";
import Rodape from "../../componentes/Rodape";

import Default from "../../layout/Default";

const Home = () => {
    return (
        <Default>
            <FormularioComLista />
            <Rodape noButton={false} />
        </Default>
    )
}

export default Home;