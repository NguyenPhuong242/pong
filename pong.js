document.addEventListener("DOMContentLoaded" ,function();){
    launch();
}

function Ball() {
    this.id = "ball";
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
}
function place_objects(objects) {
    for(let object of objects) {
        let element = document.getElementById(object.id);
        element.style.left = object.x + "px";
        element.style.top = object.y + "px";
    }
}
function update() {
    ball.x += 5;
    ball.y += 5;
    place_objects([ball]);
}
let ball;
function init() {
    ball = new Ball();
    setInterval(update, 100);
}

function track_player_input(event) {
    if(event.type == "keydown") {
        switch(event.key) {
            case "a": buttons.p1_up = true; break;
            case "q": buttons.p1_down = true; break;
            case "p": buttons.p2_up = true; break;
            case "m": buttons.p2_down = true; break;
        }
    } 
    else if(event.type == "keyup") {
        switch(event.key) {
        case "a": buttons.p1_up = false; break;
        case "q": buttons.p1_down = false; break;
        case "p": buttons.p2_up = false; break;
        case "m": buttons.p2_down = false; break;
        }
    }
}
document.addEventListener("keydown", track_player_input);
document.addEventListener("keyup", track_player_input);
document.body.getBoundingClientRect();