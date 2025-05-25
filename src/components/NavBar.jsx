import CartWidget from "./CartWidget";

export default function NavBar() {
    
    return (
        <nav style={{ display: 'flex', flexDirection:'column', justifyContent: 'center' , alignItems: 'flex-start', padding: '1rem', left: 0}}>
            <h1 style={{ color: 'whitesmoke', fontWeight: 'bold' }}>SimDrive</h1>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{cursor: 'pointer', color: '#f48c06', fontSize: '24px'}}>Inicio</li>
                <li style={{cursor: 'pointer', color: '#f48c06', fontSize: '23px'}}>Volantes</li>
                <li style={{cursor: 'pointer', color: '#f48c06', fontSize: '23px'}}>Palancas</li>
                <li style={{ cursor: 'pointer', color: '#f48c06', fontSize: '23px'}}>Butacas</li>
                <li style={{cursor: 'pointer', color: '#f48c06', fontSize: '24px', }}>Contacto</li>
            </ul>
            <CartWidget />
        </nav>
    )

}

