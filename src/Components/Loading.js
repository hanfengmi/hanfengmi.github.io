import React, { Fragment } from 'react';

class Loading extends React.Component {
    constructor(props){
        super(props)
    }
    
    render() {
        console.log(this.props.loading)
        return (
            this.props.loading ?
            <div className="loader">
                <div className="inner one"></div>
                <div className="inner two"></div>
                <div className="inner three"></div>
            </div>:
            <Fragment>
                {this.props.children}
            </Fragment>
        )
    }
}


export default Loading;