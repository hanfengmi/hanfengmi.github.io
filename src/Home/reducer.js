const initState = {
    listData: []
};

const todoListReducer = (state=initState, action) => {
    switch (action.type) {
        case 'LIST_DATA':
        // console.log(action.payload.data)
            return {
                ...state,
                listData: action.payload.data
            };
        default: 
            return {
                ...state
            };
    }
}

export default todoListReducer;