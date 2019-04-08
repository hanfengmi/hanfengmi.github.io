import React from 'react';
import './BlogItem.scss'

class BlogItem extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const {
            title,
            labels,
            created_at
        } = this.props.data

        const lable = labels.map((e,i)=> {
            return (
                <span className="lable-name" key={e.name}>
                    {e.name}
                </span>
            )
        })
        return (
            <div className="blog-item">
                <h5>{title}</h5>
                <p>labels -> </p>
                <p>created_at -> {created_at}</p>
                <p> github </p>
            </div>
        )
    }
}


export default BlogItem;