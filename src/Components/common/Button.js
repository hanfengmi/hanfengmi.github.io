import React from 'react';
import './Button.scss'

class Button extends React.Component {
    constructor(props){
        super(props);
        // btn-pill
        // btn-shine
        // btn-slide-line
        // btn-slide-line center
    }
    render() {
        return (
            <button className={`han-button ${this.props.style || 'btn-pill'}`}>
                <span>{this.props.text}</span>
            </button>
        )
            // <button className="btn-shine">
            //     <span>Shine</span>
            // </button>
            // <button className="btn-slide-line">
            //     <span>Slide Line</span>
            // </button>
            // <button className="btn-slide-line center">
            //     <span>Line Center</span>
            // </button> 
            // )
    }
}


export default Button;