"use client"

import { useState, useContext } from "react"
import { CartContext } from "./CartContext"

export default function ItemCount({ producto, stock = 10, initial = 1, onAdd }) {
  const [qty, setQty] = useState(initial)
  const { addItem } = useContext(CartContext)

  const handleAdd = () => {
    if (qty > 0 && qty <= stock) {
      addItem(producto, qty)
      if (onAdd) {
        onAdd(producto, qty)
      }
    }
  }

  const handleSubtract = () => {
    if (qty > 1) {
      setQty(qty - 1)
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        padding: "1.5rem",
        border: "1px solid #e9ecef",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <button
          onClick={handleSubtract}
          disabled={qty <= 1}
          style={{
            backgroundColor: qty <= 1 ? "#6c757d" : "#007bff",
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            cursor: qty <= 1 ? "not-allowed" : "pointer",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          -
        </button>
        <span
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            minWidth: "3rem",
            textAlign: "center",
            color: "#333",
          }}
        >
          {qty}
        </span>
        <button
          onClick={() => qty < stock && setQty(qty + 1)}
          disabled={qty >= stock}
          style={{
            backgroundColor: qty >= stock ? "#6c757d" : "#007bff",
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            cursor: qty >= stock ? "not-allowed" : "pointer",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          +
        </button>
      </div>

      <p style={{ margin: 0, fontSize: "0.9rem", color: "#666" }}>Stock disponible: {stock}</p>

      <button
        onClick={handleAdd}
        disabled={qty <= 0 || qty > stock}
        className="btn-success"
        style={{
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          padding: "0.75rem 2rem",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: "bold",
        }}
      >
        Agregar al carrito ({qty})
      </button>
    </div>
  )
}




