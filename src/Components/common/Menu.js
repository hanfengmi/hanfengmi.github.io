import React from 'react';
import './Menu.scss'

class Menu extends React.Component {
    render() {
        return (
            <ul className='header-menu'>
                <li>首页</li>
                <li>工作</li>
                <li>杂项</li>
            </ul>
        )
    }
}


export default Menu;