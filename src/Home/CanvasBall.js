import React, { Fragment } from 'react';
import './CanvasBall.scss';

const text = ['我','爱','你','哦','猴'];
class CanvasBall extends React.Component {

    componentDidMount(){
        this.drawCanvas();
    }

    drawCanvas(){
        var canvas = document.getElementById('rollBall');
        var ctx = canvas.getContext('2d');

        var LayerBallNum = 0;  // 层球数
        var LayerIntervalUp = 0; // 层间隔
        var canWidth = canvas.width /2; // 画布的宽
        var canHeight = canvas.height/2; // 画布的高
        var balls = [];// 存起来每一个小球
        var Radius = 220; // 球直径
        var angleX = Math.PI/100; // 滚动角度
        var angleY = Math.PI/100; //

        window.addEventListener("mousemove" , function(event){
            var x = event.clientX - canvas.offsetLeft - canWidth;
            var y = event.clientY - canHeight;
    
            angleY = -x*0.00005;
            angleX = -y*0.00005;
        });

        $('.canvas-button').on('click',function(e){
            e.stopPropagation();
            console.log(Animation.ball,e.target.tagName)
            if(e.target.tagName === 'SPAN'){
                Animation.ball = !Animation.ball;
            }
        })

        var Animation = { // 画轨迹
            isrunning: false,
            ball: true,
            init:function(){// 上下半球的层数轨道
                LayerIntervalUp = Math.round((Math.random()+1)*20)
                var num = LayerIntervalUp / 2 //上半球层数或下半球层数
                for(let i = -1;i <= num; i++) {
                    var l = new layer(num, i, 1);// 上半球
                    l.draw(); 
                    var l = new layer(num, i, -1); // 下半球
                    l.draw();
                }
            },
            start:function(){
                this.isrunning = true;
                animate();
            },
        }

        var layer = function(num,i,up){ // 
            this.radius = Math.sqrt(Math.pow(Radius , 2) - Math.pow(((num-i)/(num+1))*Radius , 2)) // 直径的平方 - 平分边的平方
            this.x = 0;
            this.y = 0;
            this.z = ((num-i)/(num+1))*Radius;
            this.up = up;
        }
        layer.prototype = {
            draw:function(){
                // console.log(this.radius)
                ctx.beginPath();
                ctx.arc(canWidth, canWidth, this.radius , 0, 2*Math.PI, true);
                ctx.strokeStyle = "#000";
                ctx.stroke();
                if (Animation.ball){
                    this.setBalls(this.radius)
                } else {
                    this.setTexts(this.radius)
                }
            },
            setBalls:function(radius){
                LayerBallNum = Math.round((Math.random()+1)*12)
                for(let i = 0;i < LayerBallNum; i++) { // 2
                    var deg = ((2 * Math.PI) / LayerBallNum) * i + 3.3;
                    var randomDeg = deg *  Math.round(Math.random()*10);
                    var ballItem = new ball(radius * Math.cos(randomDeg),radius * Math.sin(randomDeg),this.z*this.up,0.5)
                    ballItem.draw();
                    balls.push(ballItem);
                }
            },
            setTexts:function(radius){
                LayerBallNum = Math.round((Math.random()+1)*12)
                for(let i = 0;i < LayerBallNum; i++) { // 2
                    var deg = ((2 * Math.PI) / LayerBallNum) * i + 3.3;
                    var randomDeg = deg *  Math.round(Math.random()*10);
                    var ballItem = new ball(radius * Math.cos(randomDeg),radius * Math.sin(randomDeg),this.z*this.up,0.5)
                    ballItem.text();
                    balls.push(ballItem);
                }
            }
        }

        var ball = function(x,y,z,r){
            this.x = x; 
            this.y = y; 
            this.z = z; 
            this.r = r; 
            this.width = 2*r;
            this.texter = text[Math.round(Math.random()*4)]
        }
        ball.prototype = {
            draw:function(){
                var fl = 300 //焦距
                var scale = fl / (fl - this.z);
                ctx.save();
                ctx.beginPath();
                ctx.arc(this.x+canWidth, this.y+canHeight, this.r*scale , 0, 2*Math.PI, true);
                ctx.fillStyle = "rgba(250,250,250,1)"; 
                ctx.fill();
                ctx.restore();
            },
            text:function(){
                var fl = 250 //焦距
                var scale = fl / (fl - this.z);
                ctx.save();
                ctx.fillStyle = "#FFF";
                ctx.font = `12px serif`;
                ctx.fillStyle = "#00AAAA";
                ctx.fillText(this.texter,this.x+canWidth,this.y+canHeight);
                ctx.restore();
            }
        }


        function animate(){
            ctx.clearRect(0,0,canvas.width , canvas.height);
            rotateX();
            rotateY();
            rotateZ();
            for(var i=0;i<balls.length;i++){
                if ( Animation.ball ) {
                    balls[i].draw()
                } else {
                    balls[i].text()
                }
            }
            requestAnimationFrame(animate);
        }

        function rotateX(){
            var cos = Math.cos(angleX);
            var sin = Math.sin(angleX);
            for(var i=0;i<balls.length;i++){
                var y1 = balls[i].y * cos - balls[i].z * sin;
                var z1 = balls[i].z * cos + balls[i].y * sin;
                balls[i].y = y1;
                balls[i].z = z1;
            }
        }

        function rotateY(){
            var cos = Math.cos(angleY);
            var sin = Math.sin(angleY);
            for(var i=0;i<balls.length;i++){
                var x1 = balls[i].x * cos - balls[i].z * sin;
                var z1 = balls[i].z * cos + balls[i].x * sin;
                balls[i].x = x1;
                balls[i].z = z1;
            }
        }

        function rotateZ(){
            var cos = Math.cos(angleY);
            var sin = Math.sin(angleY);
            for(var i=0;i<balls.length;i++){
                var x1 = balls[i].x * cos - balls[i].y * sin;
                var y1 = balls[i].y * cos + balls[i].x * sin;
                balls[i].x = x1;
                balls[i].y = y1;
            }
        }

        Animation.init();
        Animation.start();


    }

    render(){
       
        return (
            <Fragment>
                <label className="canvas-button">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                </label>
                <canvas id="rollBall" width="600" height="600" style={{display:'block',margin:'0 auto'}}></canvas>
            </Fragment>
        )
    }
}

export default CanvasBall;