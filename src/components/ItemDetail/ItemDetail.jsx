import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return (
        <article style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', maxWidth: '500px', textAlign: 'center' }}>
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} style={{ maxWidth: '100%', borderRadius: '10px', margin: '20px 0' }}/>
            </picture>
            <section>
                <p><strong>Categoría:</strong> {category}</p>
                <p><strong>Descripción:</strong> {description}</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>${price}</p>
            </section>
            <footer>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>
            </footer>
        </article>
    )
}
export default ItemDetail