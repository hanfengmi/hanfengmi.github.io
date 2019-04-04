import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

class Frame extends React.Component {
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }
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