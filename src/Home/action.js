import fetch from '../../utils/fetchWrapper';

const listData = res => ({
    type: 'LIST_DATA',
    payload: res
});

export const getTodoList = (params, fn) => async (dispatch) => {
    try {

        await fetch.get('https://api.github.com/users/hanfengmi').then(data => {
            dispatch(listData(data));
        })

        fn();
    } catch (error) {

    }
}