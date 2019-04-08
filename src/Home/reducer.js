const initState = {
    listData: {}
};

const todoListReducer = (state=initState, action) => {
    switch (action.type) {
        case 'LIST_DATA':
        console.log(action.payload,'action.payload')
            return {
                ...state,
                listData: action.payload
            };
        default: 
            return {
                ...state
            };
    }
}

export default todoListReducer;