const initialState = {
    isReadySwing: false,
    items: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SWING' :
            return {
                ...state,
                items: action.payload,
                isReadySwing: true,
            };
        case 'SET_IS_READY_SWING':
            return {
                ...state,
                isReadySwing: action.payload
            }
        default:
            return state;
    }
}