
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Home/Index'



class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path={`/`} component={() => <Home />} />
            {/* <Route exact path={`/home`} component={() => <Home />} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default Root;
