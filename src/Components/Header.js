import React from 'react';
import './Header.scss'
import Logo from './common/Logo'

class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <Logo />
                {/* <Menu /> */}
            </div>
        )
    }
}


export default Header;