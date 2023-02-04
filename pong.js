"use strict";
document.addEventListener('DOMContentLoaded', init);

let id;
let x = window.innerWidth /2;
let y = window.innerHeight /2;
let vx = 5*randomV();
let vy = 5*randomV();

let ball;
let paddleL;
let paddleR;
let scoreL = 0;
let scoreR = 0;

let ballElement = document.getElementById("ball");
let ballWidth = ballElement.width;
let ballHeight = ballElement.height;
let paddleHeight = document.getElementById("pad1").height;
let paddleWidth = document.getElementById("pad1").width;

function random(max){
    return Math.floor(Math.random() * max);
}

function randomV(){
    let a = random(2);
    if(a === 0){
        return -1
    }
    return 1
}

function Ball() {
    this.id = "ball";
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
}

function Paddle(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
}

function place_objects(objects) {
    for (let object of objects) {
        let element = document.getElementById(object.id);
        element.style.left = object.x + "px";
        element.style.top = object.y + "px";
    }
}

function update() {
    
    if (ball.x <= 0 || ball.x > document.body.getBoundingClientRect().width - 64) {
        
        if(ball.x <= 0){
            scoreR++;
        } else {
            scoreL++;
        }

        ball.vx = -ball.vx;
        document.getElementById("score").innerHTML= `${scoreL}-${scoreR}`;
    }

    if (ball.y <= 0 || ball.y > document.body.getBoundingClientRect().height - 64) {
        ball.vy = -ball.vy;
    }

    let pad1 = document.getElementById("pad1");
    let pad1Rect = pad1.getBoundingClientRect();

    if (ball.x <= pad1Rect.right &&
        ball.x >= pad1Rect.left &&
        ball.y >= pad1Rect.top &&
        ball.y <= pad1Rect.bottom) {

        ball.vx = -ball.vx;
    }

    let pad2 = document.getElementById("pad2");
    let pad2Rect = pad2.getBoundingClientRect();

    if (ball.x + ballWidth <= pad2Rect.right &&
        ball.x + ballWidth >= pad2Rect.left &&
        ball.y >= pad2Rect.top &&
        ball.y <= pad2Rect.bottom) {
        ball.vx = -ball.vx;
    }

    ball.x += ball.vx;
    ball.y += ball.vy;

    place_objects([ball, paddleL, paddleR]);
}

function reset(){
    
    scoreL = 0;
    scoreR = 0;
    document.getElementById("score").innerHTML= `${scoreL}-${scoreR}`;

}

function init() {
    
    ball = new Ball();
    paddleL = new Paddle("pad1", 0, 200);
    paddleR = new Paddle("pad2", window.innerWidth - 20, 200);

    document.addEventListener("keydown", function (event) {
        
        switch(event.code) {

            case "KeyQ":
                if(paddleL.y>0){
                    paddleL.y -= 20;
                }
                break;

            case "KeyA":
                if(paddleL.y<window.innerHeight-paddleHeight){
                    paddleL.y += 20;
                }
                break;

            case "KeyP":
                if(paddleR.y>0){
                    paddleR.y -= 20;
                }
                break;

            case "KeyL":
                if(paddleR.y<window.innerHeight-paddleHeight){
                    paddleR.y += 20;
                }
                break;
          }
    
        place_objects([paddleL, paddleR]);
    });

    setInterval(update, 10);
}







