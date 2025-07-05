"use client"

import { useContext } from "react"
import { CartContext } from "./CartContext"
import CartItem from "./CartItem"
import CheckoutForm from "./CheckoutForm"
import { Link } from "react-router-dom"

export default function Cart() {
  const { cart, removeItem, clearCart, getTotalPrice } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "3rem",
          backgroundColor: "#f8f9fa",
          borderRadius: "10px",
          margin: "2rem auto",
          maxWidth: "600px",
        }}
      >
        <h2 style={{ color: "#333", marginBottom: "1rem" }}>Tu carrito está vacío</h2>
        <p style={{ color: "#666", marginBottom: "2rem" }}>¡Agrega algunos productos para comenzar!</p>
        <Link
          to="/"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "0.75rem 2rem",
            textDecoration: "none",
            borderRadius: "5px",
            display: "inline-block",
            fontWeight: "bold",
          }}
        >
          Ver productos
        </Link>
      </div>
    )
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "2rem",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#333" }}>Tu Carrito de Compras</h2>

      <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "1fr" }}>
        {/* Lista de productos */}
        <div style={{ backgroundColor: "#fff", borderRadius: "10px", padding: "1rem" }}>
          <h3 style={{ color: "#333", marginBottom: "1rem" }}>Productos ({cart.length})</h3>
          {cart.map((prod) => (
            <CartItem key={prod.id} prod={prod} removeItem={removeItem} />
          ))}

          <div
            style={{
              marginTop: "1.5rem",
              padding: "1rem",
              backgroundColor: "#f8f9fa",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3 style={{ margin: 0, color: "#333" }}>Total: ${getTotalPrice()?.toLocaleString()}</h3>
            <button
              onClick={clearCart}
              style={{
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Vaciar carrito
            </button>
          </div>
        </div>

        {/* Formulario de checkout */}
        <CheckoutForm />
      </div>
    </div>
  )
}


