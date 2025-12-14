import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Main from "./components/Main/Main.jsx";

import InicioPage from "./pages/inicio.jsx";
import DatosPage from "./pages/datos.jsx";
import ProductosPage from "./pages/productos.jsx";
import TemporadasPage from "./pages/temporadas.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="/datos" element={<DatosPage />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/temporadas" element={<TemporadasPage />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
