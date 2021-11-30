const initialState = {
    isReadyOther: false,
    items: null,

};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_OTHER' :
            return {
                ...state,
                items: action.payload,
                isReadyOther: true,
            };
        case 'SET_IS_READY_OTHER':
            return {
                ...state,
                isReadyOther: action.payload
            }
        default:
            return state;
    }
}