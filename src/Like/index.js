import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import Frame from '../Components/Layout';
import './Index.scss';
import CanvasBall from './CanvasBall'
import CanvasRoll from './CanvasRoll'
class Like extends React.Component {
    render(){
        return (
            <Frame fixed noFoot>
                <div className="like-content">
                    <Route path={`/like` } exact component={() => 
                        <div className="like-list">
                            <Link to="/like/1">神奇的球</Link>
                            <Link to="/like/2">神奇的线</Link>
                            <Link to="/like/3">神奇的我</Link>
                            <Link to="/like/4">神奇的你</Link>
                        </div>}/>
                    <Route path={`/like/1`} component={() => <CanvasBall />} />
                    <Route path={`/like/2`} component={() => <CanvasRoll />} />
                    <Route path={`/like/3`} component={() => <div>并没有东西</div>} />
                    <Route path={`/like/4`} component={() => <div>并没有东西</div>} />
                </div>
            </Frame>
        )
    }
}
export default Like;