"use client"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simular envío
    console.log("Mensaje enviado:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  if (submitted) {
    return (
      <div
        style={{
          maxWidth: "600px",
          margin: "2rem auto",
          padding: "2rem",
          textAlign: "center",
          backgroundColor: "#d4edda",
          border: "1px solid #c3e6cb",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ color: "#155724", marginBottom: "1rem" }}>¡Mensaje Enviado! ✅</h2>
        <p style={{ color: "#155724" }}>Gracias por contactarnos. Te responderemos pronto.</p>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#333" }}>Contacto</h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
        {/* Información de contacto */}
        <div>
          <h3 style={{ color: "#333", marginBottom: "1.5rem" }}>Información de Contacto</h3>

          <div style={{ marginBottom: "2rem" }}>
            <h4 style={{ color: "#333", marginBottom: "0.5rem" }}>📍 Dirección</h4>
            <p style={{ color: "#666", margin: 0 }}>Av. SimDrive 123, Buenos Aires, Argentina</p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h4 style={{ color: "#333", marginBottom: "0.5rem" }}>📞 Teléfono</h4>
            <p style={{ color: "#666", margin: 0 }}>+54 11 1234-5678</p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h4 style={{ color: "#333", marginBottom: "0.5rem" }}>✉️ Email</h4>
            <p style={{ color: "#666", margin: 0 }}>info@simdrive.com</p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h4 style={{ color: "#333", marginBottom: "0.5rem" }}>🕒 Horarios</h4>
            <p style={{ color: "#666", margin: 0 }}>
              Lunes a Viernes: 9:00 - 18:00
              <br />
              Sábados: 9:00 - 14:00
            </p>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "2rem",
            borderRadius: "8px",
            border: "1px solid #e9ecef",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ color: "#333", marginBottom: "1.5rem" }}>Envíanos un mensaje</h3>

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
                Nombre *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #ced4da",
                  borderRadius: "5px",
                  fontSize: "1rem",
                }}
                placeholder="Tu nombre"
              />
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
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #ced4da",
                  borderRadius: "5px",
                  fontSize: "1rem",
                }}
                placeholder="tu@email.com"
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label
                htmlFor="subject"
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                Asunto *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #ced4da",
                  borderRadius: "5px",
                  fontSize: "1rem",
                }}
                placeholder="Asunto del mensaje"
              />
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label
                htmlFor="message"
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                Mensaje *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #ced4da",
                  borderRadius: "5px",
                  fontSize: "1rem",
                  resize: "vertical",
                }}
                placeholder="Escribe tu mensaje aquí..."
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                padding: "1rem",
                borderRadius: "5px",
                fontSize: "1.1rem",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
