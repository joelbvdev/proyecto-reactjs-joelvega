import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer mensaje="Bienvenido a la Tienda SimDrive" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer mensaje="Productos filtrados" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/contacto" element={<h2 style={{ color: 'whitesmoke', textAlign: 'center' }}>Página de contacto (en construcción)</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

