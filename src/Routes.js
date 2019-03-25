import 'normalize.css'; 
import React from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home/index';
// import Auth from '../app/auth/Auth';
// BrowserRouter 服务器上用
// import lazyLoader from '../utils/lazyLoader';

class Routes extends React.Component {
    render(){
        console.log('进来了吗？ Routes')
        return (
            <HashRouter>
                <Switch>
                    <Route exact path={`/`} component={() => <Home />} />
                </Switch>
            </HashRouter>
        )
    }
}

export default Routes;