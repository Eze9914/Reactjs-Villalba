import { NavLink, Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  return (
    <nav>
        {/* Usamos el div container-custom para centrar el contenido del menú */}
        <div className="container-custom nav-content">
            <Link to='/' style={{ textDecoration: 'none', color: '#2c3e50', fontSize: '1.5rem', fontWeight: 'bold'}}>
                Mi Tienda 🛒
            </Link>
            
            <div className='Categories'>
                <NavLink to={'/category/celular'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink>
                <NavLink to={'/category/tablet'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tablets</NavLink>
                <NavLink to={'/category/notebook'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Notebooks</NavLink>
            </div>

            <CartWidget />
        </div>
    </nav>
  )
}

export default NavBar