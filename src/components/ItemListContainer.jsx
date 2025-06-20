import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";

export default function ItemListContainer({ mensaje }) {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);

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
    const fetchProductos = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (categoryId) {
            resolve(baseDeProductos.filter(p => p.category === categoryId));
          } else {
            resolve(baseDeProductos);
          }
        }, 1000);
      });
    };

    fetchProductos().then((res) => setProductos(res));
  }, [categoryId]);

  return (
    <div style={{ padding: '2rem', color: 'whitesmoke', textAlign: 'center' }}>
      <h2 style={{ fontWeight: 'bold' }}>{mensaje}</h2>
      {productos.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
}



