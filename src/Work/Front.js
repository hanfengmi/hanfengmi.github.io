import React from 'react';
import './Front.scss';
import { connect } from 'react-redux';
import { getFrontList } from './action';
import Loading from '../Components/Loading';
import BlogItem from '../Components/BlogItem'
class Front extends React.Component {
    componentDidMount(){
        this.props.getFrontList();
    }
    render(){
        const {
            frontList
          } = this.props;
        const List = frontList.map((e,i)=>{
            return (
                <BlogItem key={e.title} data={e} />
            )
        })
        return (
            <Loading loading={this.props.loading} result={this.props.frontList}>
                <div className="work-front">
                    {List}
                </div>
            </Loading>
        )
    }
}

const mapStateToProps = (state) => ({
    frontList: state.workListReducer.frontData,
    loading: state.workListReducer.loading
});

export default connect(mapStateToProps, { getFrontList })(Front);