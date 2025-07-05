"use client"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from "./components/Cart"
import Contact from "./components/Contact"

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh" }}>
        <NavBar />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<ItemListContainer mensaje="Bienvenido a la Tienda SimDrive" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer mensaje="Productos filtrados" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App



