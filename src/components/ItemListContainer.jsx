import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProducts, getProductsByCategory } from "../firebase/productService";

export default function ItemListContainer({ mensaje }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let products;
        if (categoryId) {
          products = await getProductsByCategory(categoryId);
        } else {
          products = await getProducts();
        }
        setProductos(products);
      } catch (error) {
        console.error("Error cargando productos:", error);
        setProductos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <p style={{ color: "#333", fontSize: "1.2rem" }}>Cargando productos...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ color: "#333", textAlign: "center", marginBottom: "2rem" }}>
        {mensaje || "Nuestros Productos"}
      </h2>
      {productos.length > 0 ? (
        <ItemList productos={productos} />
      ) : (
        <p style={{ textAlign: "center", color: "#666" }}>No hay productos disponibles.</p>
      )}
    </div>
  );
}



