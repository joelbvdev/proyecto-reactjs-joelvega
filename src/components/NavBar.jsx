"use client"

import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

export default function NavBar() {
  const linkStyle = {
    color: "#f48c06",
    fontSize: "20px",
    fontWeight: "bold",
    textDecoration: "none",
    cursor: "pointer",
    padding: "0.5rem 0",
    transition: "color 0.3s ease",
  }

  const activeLinkStyle = {
    ...linkStyle,
    borderBottom: "2px solid #f48c06",
  }

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#333",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      {/* Logo/Título */}
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 style={{ color: "whitesmoke", fontWeight: "bold", margin: 0, cursor: "pointer" }}>SimDrive</h1>
        </Link>
      </div>

      {/* Enlaces de navegación */}
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "2rem",
          padding: 0,
          margin: 0,
          alignItems: "center",
        }}
      >
        <li>
          <Link to="/" style={linkStyle}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/category/volantes" style={linkStyle}>
            Volantes
          </Link>
        </li>
        <li>
          <Link to="/category/palancas" style={linkStyle}>
            Palancas
          </Link>
        </li>
        <li>
          <Link to="/category/butacas" style={linkStyle}>
            Butacas
          </Link>
        </li>
        <li>
          <Link to="/contacto" style={linkStyle}>
            Contacto
          </Link>
        </li>
      </ul>

      {/* Widget del carrito */}
      <CartWidget />
    </nav>
  )
}



