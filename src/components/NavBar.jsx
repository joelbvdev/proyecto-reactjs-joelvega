import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

export default function NavBar() {
  const linkStyle = {
    color: '#f48c06',
    fontSize: '23px',
    fontWeight: 'bold',
    textDecoration: 'none',
    cursor: 'pointer'
  };

  return (
    <nav style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '1rem'
    }}>
      <h1 style={{ color: 'whitesmoke', fontWeight: 'bold' }}>SimDrive</h1>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: 0
      }}>
        <li><Link to="/" style={linkStyle}>Inicio</Link></li>
        <li><Link to="/category/volantes" style={linkStyle}>Volantes</Link></li>
        <li><Link to="/category/palancas" style={linkStyle}>Palancas</Link></li>
        <li><Link to="/category/butacas" style={linkStyle}>Butacas</Link></li>
        <li><Link to="/contacto" style={linkStyle}>Contacto</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
}


