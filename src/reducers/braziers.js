const initialState = {
    isReadyBraziers: false,
    items: null,
};

const braziersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BRAZIER' :
            return {
                ...state,
                items: action.payload,
                isReadyBraziers: true,
            };
        case 'SET_IS_READY_BRAZIER':
            return {
                ...state,
                isReadyBraziers: action.payload
            };
        default:
            return state;
    }
}

export default braziersReducer