import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.scss'
import me from '../img/me.png'

class AboutMe extends React.Component {
    render() {
        return (
            <div className="about-me">
                <Link to="/me">
                    <img className="about-me-png" alt='关于我' src={me} />
                </Link>
            </div>
        )
    }
}


export default AboutMe;