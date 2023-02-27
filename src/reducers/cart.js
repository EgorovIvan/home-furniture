const initialState = {
    items: [],
};

const cartReducer = (state = initialState, action) => {
    const findItem = state.items.find(item => item.id === action.id)

    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            if (findItem && (action.type === 'ADD_PRODUCT_TO_CART')) {
                findItem.count = findItem.count + 1
            } else {
                state.items.push({
                    ...action.payload,
                    count: isNaN(action.payload.count) ? 1 :
                        action.payload.count + 1,
                })

            }
        case 'DECREMENT_PRODUCT_FROM_CART':
            if (findItem && (action.type === 'DECREMENT_PRODUCT_FROM_CART')) {
                if (findItem.count > 0) {
                    findItem.count = findItem.count - 1
                }
            }
        case 'REMOVE_PRODUCT_FROM_CART':
            return {
                ...state,
                items: state.items.filter(o => o.id !== action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer

