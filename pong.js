"use strict";
document.addEventListener("DOMContentLoaded", init);

function Ball() {
    this.id = "ball";
    this.x = 0;
    this.y = 0;
    this.vx = 5;
    this.vy = 5;
}
function place_objects(objects) {
    for (let object of objects) {
        let element = document.getElementById(object.id);
        element.style.left = object.x + "px";
        element.style.top = object.y + "px";
    }
}
function update() {
    let X = document.body.getBoundingClientRect().width;
    let Y = document.body.getBoundingClientRect().height;
    
    if (ball.x < 0 || ball.x > X  - 64) {
        ball.vx = -ball.vx;
    }
    if (ball.y < 0 || ball.y > Y - 64) {
        ball.vy = -ball.vy;
    }

    ball.x += ball.vx;
    ball.y += ball.vy;

    
    // place_objects([p1]);
    // place_objects([p2]);
    place_objects([ball]);
}
let ball;
// let p1;
// let p2;

function init() {
    ball = new Ball();
    setInterval(update, 1);
}

function Pad1(){
    this.id = "p1"
    this.x = 0;
    this.y = 0;
    this.vx = 10;
    this.vy = 10;

}
function Pad2(){
    this.id = "p2"
    this.x = 0;
    this.y = 0;
    this.x = 10;
    this.vy = 10;
}



function track_player_input(event) {
    if (event.type == "keydown") {
        switch (event.key) {
            case "a": buttons.p1_up = true; break;
            case "q": buttons.p1_down = true; break;
            case "p": buttons.p2_up = true; break;
            case "m": buttons.p2_down = true; break;
        }
    }
    else if (event.type == "keyup") {
        switch (event.key) {
            case "a": buttons.p1_up = false; break;
            case "q": buttons.p1_down = false; break;
            case "p": buttons.p2_up = false; break;
            case "m": buttons.p2_down = false; break;
        }
    }
}
document.addEventListener("keydown", track_player_input);
document.addEventListener("keyup", track_player_input);
