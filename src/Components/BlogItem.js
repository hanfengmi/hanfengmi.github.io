import React from 'react';
import './BlogItem.scss';

class BlogItem extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const {
            title,
            labels,
            created_at,
            number,
            html_url,
        } = this.props.data
        console.log(this.props.data)
        const label = labels.map((e,i)=> {
            return (
                <span className="lable-name" key={e.name} style={{ background:`#${e.color}`}} >
                    {e.name}
                </span>
            )
        })
        return (
            <div className="blog-item">
                <h5>{title}</h5>
                <div className="label">
                    <span className="create-time">{created_at}</span>
                    <p className="lable-box">{ label }</p>
                </div>
                <p className="to-github">
                    GitHub：<a href={`${html_url}`} target='_blank'><i className="fa fa-github-square fa-2x"></i></a>
                </p>
            </div>
        )
    }
}


export default BlogItem;