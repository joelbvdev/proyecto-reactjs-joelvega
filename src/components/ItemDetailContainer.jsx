import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getProductById } from "../firebase/productService";

export default function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const product = await getProductById(id);
        setProducto(product);
      } catch (error) {
        console.error("Error cargando producto:", error);
        setProducto(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <p style={{ color: "#333", fontSize: "1.2rem" }}>Cargando producto...</p>
      </div>
    );
  }

  if (!producto) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h2 style={{ color: "#333" }}>Producto no encontrado</h2>
        <p style={{ color: "#666" }}>El producto que buscas no existe.</p>
      </div>
    );
  }

  return <ItemDetail producto={producto} />;
}



