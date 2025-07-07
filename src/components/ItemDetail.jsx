import { useState, useContext } from "react"
import { CartContext } from "./CartContext"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"

export default function ItemDetail({ producto }) {
  const { isInCart } = useContext(CartContext)
  const [showItemCount, setShowItemCount] = useState(true)

  const handleAddToCart = (item, quantity) => {
    setShowItemCount(false)
  }

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "2rem",
        borderRadius: "10px",
        border: "1px solid #ddd",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        color: "#333",
        maxWidth: "600px",
        margin: "2rem auto",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#333", marginBottom: "1rem" }}>{producto.name}</h2>
      <p style={{ marginBottom: "0.5rem", textTransform: "capitalize" }}>
        <strong>Categoría:</strong> {producto.category}
      </p>
      <p style={{ marginBottom: "1.5rem", fontSize: "1.5rem", color: "#28a745", fontWeight: "bold" }}>
        {producto.precio}
      </p>

      {showItemCount && !isInCart(producto.id) ? (
        <ItemCount producto={producto} stock={producto.stock || 5} onAdd={handleAddToCart} />
      ) : (
        <div style={{ marginTop: "1rem" }}>
          <p style={{ color: "#28a745", marginBottom: "1rem", fontSize: "1.1rem" }}>✅ Producto agregado al carrito</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              to="/"
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "0.75rem 1.5rem",
                textDecoration: "none",
                borderRadius: "5px",
                fontWeight: "bold",
              }}
            >
              Seguir comprando
            </Link>
            <Link
              to="/cart"
              style={{
                backgroundColor: "#28a745",
                color: "white",
                padding: "0.75rem 1.5rem",
                textDecoration: "none",
                borderRadius: "5px",
                fontWeight: "bold",
              }}
            >
              Ir al carrito
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

