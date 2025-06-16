import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  const baseDeProductos = [
    { id: "1", name: "Volante Logitech G29", category: "volantes", precio: "$150.000" },
    { id: "2", name: "Volante Thrustmaster T300", category: "volantes", precio: "$250.000" },
    { id: "3", name: "Volante Fanatec CSL", category: "volantes", precio: "$400.000" },
    { id: "4", name: "Palanca Thrustmaster TH8A", category: "palancas", precio: "$180.000" },
    { id: "5", name: "Palanca Logitech Driving Force", category: "palancas", precio: "$90.000" },
    { id: "6", name: "Butaca Sparco R100", category: "butacas", precio: "$320.000" },
    { id: "7", name: "Butaca OMP TRS-E", category: "butacas", precio: "$350.000" },
  ];
  

  useEffect(() => {
    const fetchProducto = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(baseDeProductos.find((p) => p.id === id));
        }, 1000);
      });
    };

    fetchProducto().then((res) => setProducto(res));
  }, [id]);

  if (!producto) {
    return <p style={{ color: 'whitesmoke', textAlign: 'center' }}>Cargando producto...</p>;
  }

  return (
    <div style={{ padding: '2rem', color: 'whitesmoke', textAlign: 'center' }}>
      <h2 style={{ fontWeight: 'bold' }}>{producto.name}</h2>
      <p>Categoría: {producto.category}</p>
      <p>Precio: {producto.precio}</p>
    </div>
  );
}

