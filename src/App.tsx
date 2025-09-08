import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Home from "./paginas/Home";
import Configuracao from "./paginas/Configuracao/Configuracao";
import Sorteio from "./paginas/Sorteio";


function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/configuracoes" element={<Configuracao />} />
          <Route path="/sorteio" element={<Sorteio/>} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
