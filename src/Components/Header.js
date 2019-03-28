import React from 'react';
import './Header.scss';
import Logo from './common/Logo';
import Menu from './common/Menu';
import { debounce } from '../../utils/util';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            top:true,
            scroll:false,
            fixed:props.fixed,
        }

        this.debounceScroll = debounce(()=>{
            // console.log(1111111)
            this.setState({
                top: false
            })
        }, 40)
        this.debounceNoScroll = debounce(()=>{
            // console.log(22222222)
            this.setState({
                top: true
            })
        }, 40)
    }

    componentDidMount(){
        window.onscroll = ()=>{
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop > 100){
                this.setState({
                    scroll:true 
                })
                this.debounceScroll();
            }else {
                this.setState({
                    scroll:false 
                })
                this.debounceNoScroll();
            }
        }
    }

    MouseEnter = debounce((e)=>{
        // console.log('鼠标移入')
        this.setState({
            top:false
        })
    },200)

    MouseLeave = debounce((e)=>{
        // console.log('鼠标移chu')
        if(this.state.scroll){
            return;
        }
        this.setState({
            top:true
        })
    },200)


    render() {
        const { top,fixed } = this.state;
        return (
            <div className={`header ${!top || fixed ? 'header-active' : ''}`} onMouseEnter={this.MouseEnter.bind(this)} onMouseLeave={this.MouseLeave.bind(this)} >
                <Logo />
                <Menu />
            </div>
        )
    }
}


export default Header;