import { Link } from 'react-router-dom'

const Item = ({id, name, img, price, stock}) => {
    return (
        <article style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <header>
                <h2 style={{ fontSize: '1.2rem', margin: '0 0 10px 0' }}>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} style={{ width: '100px', height: '100px', objectFit: 'cover', marginBottom: '10px' }}/>
            </picture>
            <section>
                <p style={{ margin: '5px 0' }}>Precio: ${price}</p>
                <p style={{ margin: '5px 0' }}>Stock: {stock}</p>
            </section>
            <footer style={{ marginTop: 'auto' }}>
                <Link to={`/item/${id}`} style={{ backgroundColor: '#333', color: 'white', padding: '8px 16px', borderRadius: '4px', textDecoration: 'none', display: 'inline-block', marginTop: '10px'}}>Ver detalle</Link>
            </footer>
        </article>
    )
}
export default Item