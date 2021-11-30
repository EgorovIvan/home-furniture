
export default (state, action) =>  {
    switch (action.type) {
        case 'IS_AUTH':
            return {
                ...state,
                isAuth: true,
                roomId: action.payload.roomId,
                userName: action.payload.userName
            };

        case 'SET_USERS':
            return {
                ...state,
                users: action.payload
            }

        case 'SET_MESSAGES':
            return {
                ...state,
                messages: [...state.messages, action.payload],
            }

        default:
            return state;
    }
}