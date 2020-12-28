let snakebit;
let snake = [];
let frame;
let foodbit;
let food = [];
let borderTp = false;
let score;

function setup() {
  createCanvas(500, 500);
  restart();
}

function draw() {
  background(0);
  if (frame % 10 == 0) {

    if (snake[0].dir != "") {
      for (let i = snake.length - 1; i >= 1; i--) {
        snake[i].posX = snake[i - 1].posX;
        snake[i].posY = snake[i - 1].posY;
      }
    }
    snake[0].update();
  }

  for (let i = 0; i < snake.length; i++) snake[i].draw(i);
  for (let i = 0; i < food.length; i++) food[i].draw();

  frame++;
  frame %= 100;

  document.getElementById("score").innerHTML = "Score: " + score;

  if (snake.length >= (width * height)/10) alert("You won! Wow, congrats on that achievement.")
}


function restart() {
  snake = [];
  food = [];

  for (let i = 4; i > 1; i--) {
    snake.push(new Snake(i * 10, 10));
    food.push(new Food());
  }

  frame = 0;
  score = 0;
}

function toggleBorders() {
  if (confirm("do you want to restart?")) {
    switch (borderTp) {
      case true:
        borderTp = false;
        break;
      case false:
        borderTp = true;
        break;
    }
    restart(); 
  }
}

function toggleLoop(){
  if (isLooping()){
    document.getElementById("startStopButton").value="Resume";
    noLoop();
  } else {
    document.getElementById("startStopButton").value="Stop";
    loop();
  }
}