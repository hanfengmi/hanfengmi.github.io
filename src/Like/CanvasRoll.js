import React, { Fragment } from 'react';
import './CanvasRoll.scss';

class CanvasRoll extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            type:0,
        }
        this.drawCanvas = this.drawCanvas.bind(this)
    }

    componentDidMount(){
        var canvas = document.getElementById('canvasRoll');
        canvas.width = $(window).width();
        canvas.height = $(window).height() - 60;
        canvas.addEventListener('mousedown', this.drawCanvas, false);
        canvas.addEventListener('mousedown', beginMove.bind(this), false);
        canvas.addEventListener('mouseup', removeMove.bind(this), false);


        function beginMove(){
            canvas.addEventListener('mousemove', this.drawCanvas, false);	
        }
        function removeMove(){
            canvas.removeEventListener('mousemove', this.drawCanvas, false);	
        }
    }

    drawCanvas(e){
        var canvas = document.getElementById('canvasRoll');
        var ctx = canvas.getContext('2d');
        
        var canWidth = canvas.width /2; // 画布的中心x
        var canHeight = canvas.height/2; // 画布的中心y
        var canLeft = canvas.offsetLeft;
        var canTop = canvas.offsetTop;
        var rolls = [];// 存起来每一
        var size = 1;// 小球大小
    
        var deg = 45;
       

        var CanvasRoll = {
            init:function(type,clientX,clientY){
                console.log(type)
                
                var b = new ball(clientX - canLeft,clientY - canTop);
                if(type == 0){
                    b.first();
                }else if (type == 1){
                    b.draw();
                }
                
                // rolls.push(b);
            }
        }

        var ball = function(cx,cy){
            this.x = cx;
            this.y = cy;
            this.toO = Math.sqrt(Math.pow((cx - canWidth),2) - Math.pow((cy - canHeight),2));
        }
        ball.prototype = {
            first:function(){

                ctx.beginPath();
                ctx.fillStyle = "rgba(250,250,250,1)"; 
                ctx.arc(canWidth, canHeight, 10 , 0, 2*Math.PI, true);// 画圆心
                ctx.fill();// 填充
                ctx.arc(this.x, this.y, 2 , 0, 2*Math.PI, true);// 鼠标点击处画点
                ctx.fill();// 填充

                ctx.strokeStyle = '#fff';	
                ctx.lineWidth = 1;			
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(canWidth, canHeight);
                ctx.stroke();
            },
            draw:function(){
                
            }
        }
        CanvasRoll.init(this.state.type,e.clientX,e.clientY)

    }
    render(){
       
        return (
            <div className="canvas-roll">
                <canvas id="canvasRoll" width="600" height="600" style={{display:'block',margin:'0 auto'}}></canvas>
            </div>
        )
    }
}

export default CanvasRoll;