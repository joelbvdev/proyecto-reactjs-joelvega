import { useState, useContext } from "react"
import { CartContext } from "./CartContext"
import { createOrder } from "../firebase/orderService"

export default function CheckoutForm() {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext)
  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
    confirmEmail: "",
  })
  const [loading, setLoading] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)
  const [orderId, setOrderId] = useState("")
  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setBuyer({ ...buyer, [name]: value })

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!buyer.name.trim()) {
      newErrors.name = "El nombre es obligatorio"
    }

    if (!buyer.phone.trim()) {
      newErrors.phone = "El teléfono es obligatorio"
    } else if (!/^\d{8,}$/.test(buyer.phone.replace(/\s/g, ""))) {
      newErrors.phone = "El teléfono debe tener al menos 8 dígitos"
    }

    if (!buyer.email.trim()) {
      newErrors.email = "El email es obligatorio"
    } else if (!/\S+@\S+\.\S+/.test(buyer.email)) {
      newErrors.email = "El email no es válido"
    }

    if (!buyer.confirmEmail.trim()) {
      newErrors.confirmEmail = "Confirma tu email"
    } else if (buyer.email !== buyer.confirmEmail) {
      newErrors.confirmEmail = "Los emails no coinciden"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      const order = {
        buyer: { ...buyer },
        items: cart.map((item) => ({
          id: item.id,
          name: item.name,
          precio: item.precio,
          precioNumerico: item.precioNumerico || 0,
          quantity: item.quantity,
        })),
        total: getTotalPrice(),
      }

      const newOrderId = await createOrder(order)

      if (newOrderId) {
      
        setOrderId(newOrderId)
        setOrderComplete(true)
        
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Hubo un error al procesar tu pedido. Intenta nuevamente.")
    } finally {
      setLoading(false)
    }
  }

  const handleNewPurchase = () => {

    clearCart()
    setOrderComplete(false)
    setOrderId("")
    setBuyer({ name: "", phone: "", email: "", confirmEmail: "" })
    setErrors({})
  }


  if (orderComplete && orderId) {
    return (
      <div
        style={{
          backgroundColor: "#d4edda",
          border: "3px solid #c3e6cb",
          borderRadius: "15px",
          padding: "4rem 2rem",
          textAlign: "center",
          margin: "2rem auto",
          maxWidth: "800px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Efecto de confeti */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
            animation: "shimmer 2s infinite",
          }}
        />

        {/* Emoji grande animado */}
        <div
          style={{
            fontSize: "6rem",
            marginBottom: "1.5rem",
            animation: "bounce 1s ease-in-out infinite alternate",
          }}
        >
          🎉
        </div>

        {/* Título principal */}
        <h1
          style={{
            color: "#155724",
            marginBottom: "1rem",
            fontSize: "3rem",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          ¡PEDIDO CONFIRMADO!
        </h1>

        {/* Mensaje secundario */}
        <p
          style={{
            color: "#155724",
            fontSize: "1.4rem",
            marginBottom: "2.5rem",
            fontWeight: "500",
          }}
        >
          🎊 Tu orden ha sido procesada exitosamente 🎊
        </p>

        {/* ID de orden MUY destacado */}
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "2rem",
            borderRadius: "12px",
            marginBottom: "2.5rem",
            border: "2px solid #28a745",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <p
            style={{
              color: "#155724",
              fontWeight: "bold",
              fontSize: "1.3rem",
              margin: "0 0 1rem 0",
            }}
          >
            📋 ID de tu orden:
          </p>
          <p
            style={{
              color: "#155724",
              fontFamily: "monospace",
              fontSize: "1.6rem",
              fontWeight: "bold",
              margin: 0,
              backgroundColor: "#f8f9fa",
              padding: "1rem",
              borderRadius: "8px",
              border: "2px dashed #28a745",
              letterSpacing: "2px",
            }}
          >
            {orderId}
          </p>
        </div>

        {/* Email de confirmación */}
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.7)",
            padding: "1.5rem",
            borderRadius: "8px",
            marginBottom: "2.5rem",
          }}
        >
          <p
            style={{
              color: "#155724",
              fontSize: "1.2rem",
              margin: 0,
            }}
          >
            📧 Recibirás un email de confirmación en: <br />
            <strong style={{ fontSize: "1.3rem", color: "#0d4f1c" }}>{buyer.email}</strong>
          </p>
        </div>

        {/* Botón para nueva compra MÁS GRANDE */}
        <button
          onClick={handleNewPurchase}
          style={{
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            padding: "1.5rem 3rem",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1.3rem",
            boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
            transition: "all 0.3s ease",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#218838"
            e.target.style.transform = "translateY(-3px) scale(1.05)"
            e.target.style.boxShadow = "0 8px 16px rgba(0,0,0,0.4)"
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#28a745"
            e.target.style.transform = "translateY(0) scale(1)"
            e.target.style.boxShadow = "0 6px 12px rgba(0,0,0,0.3)"
          }}
        >
          🛒 Realizar otra compra
        </button>

        {/* Mensaje adicional */}
        <p
          style={{
            color: "#155724",
            fontSize: "1rem",
            marginTop: "2rem",
            fontStyle: "italic",
          }}
        >
          ¡Gracias por tu compra en SimDrive! 🏎️
        </p>
      </div>
    )
  }


  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #e9ecef",
        borderRadius: "8px",
        padding: "2rem",
        margin: "2rem 0",
      }}
    >
      <h3 style={{ color: "#333", marginBottom: "1.5rem", textAlign: "center" }}>Finalizar Compra</h3>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="name"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Nombre completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={buyer.name}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "0.75rem",
              border: errors.name ? "2px solid #dc3545" : "1px solid #ced4da",
              borderRadius: "5px",
              fontSize: "1rem",
            }}
            placeholder="Ingresa tu nombre completo"
          />
          {errors.name && <span style={{ color: "#dc3545", fontSize: "0.875rem" }}>{errors.name}</span>}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="phone"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Teléfono *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={buyer.phone}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "0.75rem",
              border: errors.phone ? "2px solid #dc3545" : "1px solid #ced4da",
              borderRadius: "5px",
              fontSize: "1rem",
            }}
            placeholder="Ej: 1234567890"
          />
          {errors.phone && <span style={{ color: "#dc3545", fontSize: "0.875rem" }}>{errors.phone}</span>}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="email"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={buyer.email}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "0.75rem",
              border: errors.email ? "2px solid #dc3545" : "1px solid #ced4da",
              borderRadius: "5px",
              fontSize: "1rem",
            }}
            placeholder="tu@email.com"
          />
          {errors.email && <span style={{ color: "#dc3545", fontSize: "0.875rem" }}>{errors.email}</span>}
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <label
            htmlFor="confirmEmail"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Confirmar Email *
          </label>
          <input
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            value={buyer.confirmEmail}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "0.75rem",
              border: errors.confirmEmail ? "2px solid #dc3545" : "1px solid #ced4da",
              borderRadius: "5px",
              fontSize: "1rem",
            }}
            placeholder="Confirma tu email"
          />
          {errors.confirmEmail && <span style={{ color: "#dc3545", fontSize: "0.875rem" }}>{errors.confirmEmail}</span>}
        </div>

        <div
          style={{
            backgroundColor: "#f8f9fa",
            padding: "1rem",
            borderRadius: "5px",
            marginBottom: "1.5rem",
          }}
        >
          <h4 style={{ color: "#333", marginBottom: "0.5rem" }}>Resumen del pedido:</h4>
          <p style={{ color: "#666", margin: "0" }}>
            {cart.length} producto{cart.length !== 1 ? "s" : ""} - Total: ${getTotalPrice()?.toLocaleString()}
          </p>
        </div>

        <button
          type="submit"
          disabled={loading || cart.length === 0}
          style={{
            width: "100%",
            backgroundColor: loading ? "#6c757d" : "#28a745",
            color: "white",
            border: "none",
            padding: "1rem",
            borderRadius: "5px",
            fontSize: "1.1rem",
            fontWeight: "bold",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Procesando pedido..." : `Confirmar pedido - $${getTotalPrice()?.toLocaleString()}`}
        </button>
      </form>
    </div>
  )
}





