const initialState = {
    searchQuery: '',
    sortBy: 'recommendations'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_QUERY' :
            return {
                ...state,
                searchQuery: action.payload,
            };
        case 'SET_SORT' :
            return {
                ...state,
                sortBy: action.payload,
            };
        default:
            return state;
    }
}