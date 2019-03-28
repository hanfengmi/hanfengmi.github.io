import 'normalize.css'; 
import './style.scss';
import React from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import lazyLoader from '../utils/lazyLoader';


const Home = lazyLoader(() => import('./Home/index'));
const Work = lazyLoader(() => import('./Work/index'));

const PageNotFoundFront = lazyLoader(() => import('./Components/404'))

class Routes extends React.Component {
    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route exact path={`/`} component={() => <Home />} />
                    <Route exact path={`/work`} component={() => <Work />} />
                    <Route component={() => <PageNotFoundFront />} />
                </Switch>
            </HashRouter>
        )
    }
}

export default Routes;