import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss'

class Menu extends React.Component {
    render() {
        return (
            <ul className='header-menu'>
                <Link to="/">
                    <li>首页</li>
                </Link>
                <Link to="/work">
                    <li>工作</li>
                </Link>
                <Link to="/like">
                    <li>好玩</li>
                </Link>
            </ul>
        )
    }
}


export default Menu;