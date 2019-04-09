import React from 'react';
import Frame from '../Components/Layout';
import { connect } from 'react-redux';
import './Index.scss';
import { getTodoList } from './action';
import CanvasBall from './CanvasBall'
class Home extends React.Component {
    componentDidMount(){
        this.props.getTodoList();
    }
    render(){
        const {
            login,
            name
        } = this.props.todo
        console.log(this.props.todo, 'this.props.todo')
        return (
            <Frame>
                <div className="content">
                    
                </div>
                <div className="content2">
                    <CanvasBall />
                        {/* My Name is {name} */}
                </div>
            </Frame>
        )
    }
}

const mapStateToProps = (state) => ({
    todo:state.todoListReducer.listData
});

export default connect(mapStateToProps, { getTodoList })(Home);