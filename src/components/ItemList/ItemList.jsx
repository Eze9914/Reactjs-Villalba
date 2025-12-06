import Item from '../Item/Item'

const ItemList = ({products }) => {
    return(
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center'}}>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}
export default ItemList