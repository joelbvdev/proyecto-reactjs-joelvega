import { useState } from "react";

export default function ItemCount() {
  const [cantidad, setCantidad] = useState(1);

  const aumentar = () => setCantidad(cantidad + 1);
  const disminuir = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <button onClick={disminuir}>-</button>
      <span style={{ margin: '0 1rem' }}>{cantidad}</span>
      <button onClick={aumentar}>+</button>
    </div>
  );
}
