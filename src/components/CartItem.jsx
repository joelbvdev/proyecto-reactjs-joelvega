export default function CartItem({ prod, removeItem }) {
  const precioNumerico = prod.precioNumerico || Number.parseInt(prod.precio.replace(/[$.,]/g, "")) || 0

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.5rem",
        margin: "1rem 0",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        border: "1px solid #e9ecef",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div style={{ flex: 1 }}>
        <h4 style={{ margin: "0 0 0.5rem 0", color: "#333" }}>{prod.name}</h4>
        <p style={{ margin: "0 0 0.5rem 0", color: "#666" }}>
          <strong>Cantidad:</strong> {prod.quantity} | <strong>Precio unitario:</strong> {prod.precio}
        </p>
        <p style={{ margin: "0", fontWeight: "bold", color: "#28a745", fontSize: "1.1rem" }}>
          Subtotal: ${(precioNumerico * prod.quantity).toLocaleString()}
        </p>
      </div>
      <button
        onClick={() => removeItem(prod.id)}
        style={{
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
          marginLeft: "1rem",
        }}
      >
        Eliminar
      </button>
    </div>
  )
}



  