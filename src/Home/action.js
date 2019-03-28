// import request from '../../utils/request';

const listData = res => ({
    type: 'LIST_DATA',
    payload: res
});

export const getTodoList = (params, fn) => async (dispatch) => {
    try {
        // const result = await request('/api/change/list', {
        //     method: 'GET',
        //     data: params
        // });
        const result = {
            res:200,
            data:['1','2','3']
        }
        await dispatch(listData(result));
        fn();
    } catch (error) {

    }
}