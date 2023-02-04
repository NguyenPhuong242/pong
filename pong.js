document.addEventListener('DOMContentLoaded', init);

let id;
let x = 200;
let y = 200;
let vx = 5;
let vy = 5;

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
        ball.vx = -ball.vx;
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

    if (ball.x <= pad2Rect.right &&
        ball.x >= pad2Rect.left &&
        ball.y >= pad2Rect.top &&
        ball.y <= pad2Rect.bottom) {

        ball.vx = -ball.vx;
    }

    ball.x += ball.vx;
    ball.y += ball.vy;
    place_objects([ball, paddleL, paddleR]);
}

let ball;
let paddleL;
let paddleR;

function init() {
    ball = new Ball();
    paddleL = new Paddle("pad1", 10, 200);
    paddleR = new Paddle("pad2", window.innerWidth - 40, 200);

    document.addEventListener("keydown", function (event) {
        if (event.code === "KeyQ") {
            paddleL.y -= 20;
        } else if (event.code === "KeyA") {
            paddleL.y += 20;
        } else if (event.code === "KeyP") {
            paddleR.y -= 20;
        } else if (event.code === "KeyL") {
            paddleR.y += 20;
        }
        place_objects([paddleL, paddleR]);
    });

    setInterval(update, 100);
}
