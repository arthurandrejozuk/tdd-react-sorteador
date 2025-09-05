import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Home from "./paginas/Home";
import Configuracao from "./paginas/Configuracao/Configuracao";


function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/configuracoes" element={<Configuracao/>} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
