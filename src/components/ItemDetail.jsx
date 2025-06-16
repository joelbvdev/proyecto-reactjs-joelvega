import ItemCount from "./ItemCount";

export default function ItemDetail({ producto }) {
  return (
    <div style={{
      backgroundColor: "#333",
      padding: "2rem",
      borderRadius: "10px",
      color: "whitesmoke",
      width: "300px",
      margin: "2rem auto",
      textAlign: "center"
    }}>
      <h2>{producto.name}</h2>
      <p>Categoría: {producto.category}</p>
      <p>Precio: {producto.precio}</p>
      <ItemCount />
    </div>
  );
}
