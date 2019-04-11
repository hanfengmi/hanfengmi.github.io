import fetch from '../../utils/fetchWrapper';
const loading = res => ({
    type: 'LOADING',
    payload: res
})
// 获取github 项目列表
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
// 获取前端issuse 列表
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

const otherData = res => ({
    type: 'OTHER_DATA',
    payload: res
});
const getOtherList = (params, fn) => async (dispatch) => {
    try {
        dispatch(loading(true));
        await fetch.get('https://api.github.com/repos/hanfengmi/for-miss-Hou/issues').then(data => {
            dispatch(otherData(data));
        })
        dispatch(loading(false));
        fn();
    } catch (error) {

    }
}


export {
    getGitList,
    getFrontList,
    getOtherList,
}