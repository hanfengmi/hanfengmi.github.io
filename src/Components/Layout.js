import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

class Frame extends React.Component {
    render() {
        return (
            <Fragment>
                <Header fixed={this.props.fixed}/>
                {this.props.children}
                {
                    this.props.noFoot?
                    '':
                    <Footer />
                }
            </Fragment>
        )
    }
}


export default Frame;