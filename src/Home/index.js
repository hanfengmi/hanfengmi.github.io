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
        const {
            login,
            name
        } = this.props.todo
        console.log(this.props.todo, 'this.props.todo')
        return (
            <Frame>
                <div className="content">
                    
                </div>
                <div className="content-index">
                    这是第一屏
                </div>
                <div className="content-index content-index-s">
                    这是第二屏
                </div>
                <div className="content-index content-index-t">
                    这是第三屏
                </div>
            </Frame>
        )
    }
}

const mapStateToProps = (state) => ({
    todo:state.todoListReducer.listData
});

export default connect(mapStateToProps, { getTodoList })(Home);