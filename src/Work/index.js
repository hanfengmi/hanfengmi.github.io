import React from 'react';
import Frame from '../Components/Layout';
import './Index.scss';
import Button from '../Components/common/Button';
class Work extends React.Component {

    componentDidMount(){
        $('.work-banner').scroll(function () {
            // $('.work-list').scrollTop($(this).scrollTop());
            console.log(12312321)
        });
        $('.work-list-box').scroll(function () {
            // $('.work-list').scrollTop($(this).scrollTop());
            console.log(1111111111)
        });
    }
    render(){
        return (
            <Frame fixed noFoot>
                <div className="work-content">
                    <div className="work-banner"></div>
                    <div className="work-container">
                        <div className="work-header">
                            <Button text="Han" />
                            <Button style="btn-shine" text="Zhao" />
                            <Button style="btn-slide-line" text="Ke" />
                            <Button style="btn-slide-line center" text="Hello" />
                        </div>
                    </div>
                </div>
            </Frame>
        )
    }
}

export default Work;