import Item from "./Item";

export default function ItemList({ productos }) {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    }}>
      {productos.map((prod) => (
        <Item key={prod.id} producto={prod} />
      ))}
    </div>
  );
}
