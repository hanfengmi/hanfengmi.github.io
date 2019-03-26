import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

class Frame extends React.Component {
    render() {
        return (
            <Fragment>
                <Header />
                {this.props.children}
                <Footer />
            </Fragment>
        )
    }
}


export default Frame;