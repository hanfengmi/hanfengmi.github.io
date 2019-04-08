import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import Frame from '../Components/Layout';
import './Index.scss';
import Button from '../Components/common/Button';
import Front from './Front.js';
import Node from './Node.js';
import Tool from './Tool.js';
import Other from './Other.js';
class Work extends React.Component {
    render(){
        return (
            <Frame fixed noFoot>
                <div className="work-content">
                    <div className="work-banner"></div>
                    <div className="work-container">
                        <div className="work-header">
                            <Link to="/work/front"><Button text="前端" /></Link>
                            <Link to="/work/node"><Button style="btn-shine" text="Node" /></Link>
                            <Link to="/work/tool"><Button style="btn-slide-line" text="工具" /></Link>
                            <Link to="/work/other"><Button style="btn-slide-line center" text="杂项" /></Link>
                        </div>
                        <div className="work-box">
                            <Route path={`/work` } exact component={() => <Front />}/>
                            {/* <Redirect from="/work" to="/work/front"></Redirect>   */}
                            <Route path={`/work/front`} component={() => <Front />} />
                            <Route path={`/work/node`} component={() => <Node />} />
                            <Route path={`/work/tool`} component={() => <Tool />} />
                            <Route path={`/work/other`} component={() => <Other />} />
                        </div>
                    </div>
                </div>
            </Frame>
        )
    }
}

export default Work;