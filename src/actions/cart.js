export const decFromCart = obj => ({
    type: 'DECREMENT_PRODUCT_FROM_CART',
    payload: obj,
    id: obj.id
})
export const addToCart = obj => ({
    type: 'ADD_PRODUCT_TO_CART',
    payload: obj,
    id: obj.id
})

export const removeFromCart = id => ({
    type: 'REMOVE_PRODUCT_FROM_CART',
    payload: id
})

