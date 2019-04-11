import React from 'react';
import './Index.scss';
import { connect } from 'react-redux';
import { getOtherList } from './action';
import Loading from '../Components/Loading';
import BlogItem from '../Components/BlogItem'
class Other extends React.Component {
    componentDidMount(){
        this.props.getOtherList();
    }
    render(){
        const {
            otherList
          } = this.props;
          console.log(otherList,'otherList')
        const List = otherList.map((e,i)=>{
            return (
                <BlogItem key={e.title} data={e} />
            )
        })
        return (
            <Loading loading={this.props.loading} result={this.props.otherList}>
                <div className="work-front">
                    {List}
                </div>
            </Loading>
        )
    }
}


const mapStateToProps = (state) => ({
    otherList: state.workListReducer.otherData,
    loading: state.workListReducer.loading
});

export default connect(mapStateToProps , {getOtherList})(Other);