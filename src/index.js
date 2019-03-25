import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import "babel-polyfill"
// import { LocaleProvider } from 'antd';
// import zh_CN from 'antd/lib/locale-provider/zh_CN';
// import 'moment/locale/zh-cn';
import thunk from 'redux-thunk';
import history from '../utils/history';
import storeTree from './store';
import Routes from './Routes';

const store = createStore(storeTree, applyMiddleware(thunk));
console.log('进来了吗？ Index')

ReactDom.render(
    <Provider store={store}>
        <Routes history={history}></Routes>
    </Provider>,
    document.getElementById('app')
)



