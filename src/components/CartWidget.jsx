import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom"

export default function CartWidget() {
  const { getTotalItems } = useContext(CartContext)
  const totalItems = getTotalItems()

  return (
    <Link to="/cart" style={{ textDecoration: "none" }}>
      <div
        style={{
          position: "relative",
          marginLeft: "10px",
          cursor: "pointer",
          fontSize: "1.5rem",
        }}
      >
        🛒
        {totalItems > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-10px",
              right: "-10px",
              backgroundColor: "#dc3545",
              borderRadius: "50%",
              color: "white",
              padding: "2px 6px",
              fontSize: "12px",
              fontWeight: "bold",
              minWidth: "18px",
              textAlign: "center",
            }}
          >
            {totalItems}
          </span>
        )}
      </div>
    </Link>
  )
}


