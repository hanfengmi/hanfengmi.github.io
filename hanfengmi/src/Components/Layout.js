import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

class Frame extends React.Component {
    // constructor(props) {
    //     super(props); 
    // }

    render() {
        return (
            <Fragment>
                <Header />
                <div className="header-to-content">
                        {this.props.children}
                </div>
                <Footer />
            </Fragment>
        )
    }
}


export default Frame;