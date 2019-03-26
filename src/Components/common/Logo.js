import React from 'react';
import './Logo.scss'
import logo from '../img/logo.png'

class Logo extends React.Component {
    render() {
        return (
            <div className="header-logo">
                <img src={logo} />
                <span>McKonalds</span>
            </div>
        )
    }
}


export default Logo;