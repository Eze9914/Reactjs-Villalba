const CartWidget = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <span style={{ fontSize: '1.5rem', marginRight: '5px' }}>🛒</span>
            <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>0</span>
        </div>
    )
}

export default CartWidget