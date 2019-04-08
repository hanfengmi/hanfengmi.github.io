import fetch from '../../utils/fetchWrapper';
const loading = res => ({
    type: 'LOADING',
    payload: res
})

const gitData = res => ({
    type: 'GIT_DATA',
    payload: res
});
const getGitList = (params, fn) => async (dispatch) => {
    try {
        dispatch(loading(true));
        await fetch.get('https://api.github.com/users/hanfengmi').then(data => {
            dispatch(gitData(data));
        })
        dispatch(loading(false));
        fn();
    } catch (error) {

    }
}

const frontData = res => ({
    type: 'FRONT_DATA',
    payload: res
});
const getFrontList = (params, fn) => async (dispatch) => {
    try {
        dispatch(loading(true));
        await fetch.get('https://api.github.com/repos/hanfengmi/hanfengmi.github.io/issues').then(data => {
            dispatch(frontData(data));
        })
        dispatch(loading(false));
        fn();
    } catch (error) {

    }
}

export {
    getGitList,
    getFrontList,
}