const products = [
    { 
        id: '1', 
        name: '📱 Iphone 12', 
        price: 1000, 
        category: 'celular', 
        img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=500&auto=format&fit=crop', 
        stock: 25, 
        description: 'El clásico de Apple con procesador A14 Bionic.' 
    },
    { 
        id: '2', 
        name: '📲 Samsung S21', 
        price: 800, 
        category: 'celular', 
        img: 'https://http2.mlstatic.com/D_869468-MLA81789423532_012025-O.jpg', 
        stock: 15, 
        description: 'Potencia Android con la mejor pantalla del mercado.' 
    },
    { 
        id: '3', 
        name: '💻 Ipad 8va gen', 
        price: 1200, 
        category: 'tablet', 
        img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=500&auto=format&fit=crop', 
        stock: 10, 
        description: 'Ideal para diseño y productividad ligera.' 
    },
    { 
        id: '4', 
        name: '💻 Macbook Air', 
        price: 1800, 
        category: 'notebook', 
        img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=500&auto=format&fit=crop', 
        stock: 5, 
        description: 'La notebook más ligera y potente con chip M1.' 
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}