const initialState = {
    isReadyChairs: false,
    items: null,

};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CHAIR' :
            return {
                ...state,
                items: action.payload,
                isReadyChairs: true,
            };
        case 'SET_IS_READY_CHAIRS':
            return {
                ...state,
                isReadyChairs: action.payload
            }
        default:
            return state;
    }
}