import React from 'react';
import Frame from '../Components/Layout';
import { connect } from 'react-redux';
import './Index.scss';
import { getTodoList } from './action';
class Home extends React.Component {
    componentDidMount(){
        this.props.getTodoList();
    }
    render(){
        console.log(this.props.todo)
        return (
            <Frame>
                <div className="content">
                      
                </div>
                <div className="content2">
                    
                </div>
            </Frame>
        )
    }
}

const mapStateToProps = (state) => ({
    todo:state.todoListReducer
});

export default connect(mapStateToProps, { getTodoList })(Home);