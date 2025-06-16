import { Link } from 'react-router-dom';

export default function Item({ producto }) {
  return (
    <div style={{
      backgroundColor: "#333",
      color: "whitesmoke",
      borderRadius: "10px",
      padding: "1rem",
      margin: "1rem",
      width: "200px",
      textAlign: "center"
    }}>
      <Link to={`/item/${producto.id}`} style={{ color: "#f48c06", textDecoration: "none" }}>
        <h3>{producto.name}</h3>
      </Link>
      <p>Categoría: {producto.category}</p>
      <p>Precio: {producto.precio || "Consultar"}</p>
    </div>
  );
}
