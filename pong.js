"use strict";
document.addEventListener('DOMContentLoaded', init);

let id;
let x;
let y;
let vx;
let vy;

function Ball() {
    this.id = "ball";
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
}
function place_objects(objects) {
    for (let object of objects) {
        let element = document.getElementById(object.id);
        element.style.left = object.x + "px";
        element.style.top = object.y + "px";
    }
    ball.x = x;
    ball.y = y;
    ball.vx = 5;
    ball.vy = 5;
}

function update() {
    if(ball.x <= 0|| ball.x > document.body.getBoundingClientRect().width +64){
        ball.vx = -ball.vx;
    }
    if(ball.y <= 0|| ball.y > document.body.getBoundingClientRect().height +64){
        ball.vy = -ball.vy;
    }

    ball.x += ball.vx;
    ball.y += ball.vy;
    place_objects([ball]);
}
let ball;

function init() {
    ball = new Ball();
    setInterval(update, 100);
}
init();