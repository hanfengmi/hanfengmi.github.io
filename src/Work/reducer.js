const initState = {
    loading: false,
    workList:[],// github列表
    frontData: [],// 前端相关知识
    otherData: [],// 随笔

};

const workListReducer = (state=initState, action) => {
    switch (action.type) {
        case 'GIT_DATA':
            return {
                ...state,
                workList: action.payload
            };
        case 'FRONT_DATA':
            return {
                ...state,
                frontData: action.payload
            };
        case 'OTHER_DATA':
            return {
                ...state,
                otherData: action.payload
            };  

        case 'LOADING':
            return {
                ...state,
                loading: action.payload
            };
        default: 
            return {
                ...state
            };
    }
}

export default workListReducer;