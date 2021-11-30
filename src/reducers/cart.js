const initialState = {
    items: [
    ]
};

export default (state = initialState, action) =>  {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART' :
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ],
            };
        case 'REMOVE_PRODUCT_FROM_CART':
            return {
                ...state,
                items: state.items.filter(o => o.id !== action.payload)
            }
        default:
            return state;
    }
}