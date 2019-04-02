import fetch from '../../utils/fetchWrapper';
console.log(fetch,'fetch')

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
        let result = fetch.get('https://api.github.com/repos/hanfengmi/hanfengmi.github.io/issues',)
        
        await dispatch(listData(result));
        fn();
    } catch (error) {

    }
}