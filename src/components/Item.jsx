import { Link } from "react-router-dom"

export default function Item({ producto }) {
  
  const getProductImage = (producto) => {
    
    const imageMap = {
      
      "volante-thrustmaster": "/images/volante-thrustmaster-t300.jpeg",
      "volante-logitech": "/images/volante-logitech-g29.jpeg",
      "volante-fanatec": "/images/volante-fanatec.jpeg",

      
      "palanca-thrustmaster": "/images/palanca-thrustmaster-th8a.jpeg",
      "palanca-logitech": "/images/palanca-logitech-shifter.jpeg",

      
      "butaca-omp": "/images/butaca-omp.jpeg",
      "butaca-sparco": "/images/butaca-sparco.jpeg",
    }

    
    if (imageMap[producto.id]) {
      return imageMap[producto.id]
    }

    
    const productName = producto.name?.toLowerCase() || ""

    if (producto.category === "volantes") {
      if (productName.includes("thrustmaster") || productName.includes("t300")) {
        return imageMap["volante-thrustmaster"]
      }
      if (productName.includes("logitech") || productName.includes("g29")) {
        return imageMap["volante-logitech"]
      }
      if (productName.includes("fanatec")) {
        return imageMap["volante-fanatec"]
      }
      
      return imageMap["volante-thrustmaster"]
    }

    if (producto.category === "palancas") {
      if (productName.includes("thrustmaster") || productName.includes("th8")) {
        return imageMap["palanca-thrustmaster"]
      }
      if (productName.includes("logitech") || productName.includes("driving force")) {
        return imageMap["palanca-logitech"]
      }
      
      return imageMap["palanca-thrustmaster"]
    }

    if (producto.category === "butacas") {
      if (productName.includes("omp") || productName.includes("trs")) {
        return imageMap["butaca-omp"]
      }
      if (productName.includes("sparco")) {
        return imageMap["butaca-sparco"]
      }
      
      return imageMap["butaca-omp"]
    }

    
    return "/images/volante-thrustmaster-t300.jpeg"
  }

  
  const createFallbackImage = (category) => {
    const categoryEmojis = {
      volantes: "🏎️",
      palancas: "⚙️",
      butacas: "🪑",
    }

    const categoryColors = {
      volantes: "#007bff",
      palancas: "#28a745",
      butacas: "#dc3545",
    }

    return {
      emoji: categoryEmojis[category] || "📦",
      color: categoryColors[category] || "#6c757d",
      text: category.charAt(0).toUpperCase() + category.slice(1),
    }
  }

  const fallback = createFallbackImage(producto.category)
  const productImage = getProductImage(producto)

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #e9ecef",
        borderRadius: "8px",
        padding: "1.5rem",
        textAlign: "center",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        transition: "transform 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      {}
      <div
        style={{
          width: "100%",
          height: "200px",
          borderRadius: "5px",
          marginBottom: "1rem",
          backgroundColor: "#f8f9fa",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {}
        <img
          src={productImage || "/placeholder.svg"}
          alt={producto.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "#ffffff",
          }}
          onError={(e) => {
            
            e.target.style.display = "none"
            e.target.nextElementSibling.style.display = "flex"
          }}
        />

        {}
        <div
          style={{
            display: "none",
            width: "100%",
            height: "100%",
            backgroundColor: fallback.color,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: "white",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>{fallback.emoji}</div>
          <div style={{ fontSize: "1rem", fontWeight: "bold" }}>{fallback.text}</div>
        </div>
      </div>

      <h3 style={{ color: "#333", marginBottom: "1rem" }}>{producto.name}</h3>
      <p style={{ color: "#666", marginBottom: "1rem", textTransform: "capitalize" }}>Categoría: {producto.category}</p>
      <p style={{ color: "#28a745", fontSize: "1.4rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
        {producto.precio}
      </p>
      <Link
        to={`/item/${producto.id}`}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "0.75rem 1.5rem",
          textDecoration: "none",
          borderRadius: "5px",
          fontWeight: "bold",
          display: "inline-block",
        }}
      >
        Ver detalle
      </Link>
    </div>
  )
}





