let snake;
const GAME_WIDTH = 800;
const GAME_HEIGHT = 500;

function setup() {
    createCanvas(GAME_WIDTH, GAME_HEIGHT);
    snake = new Snake();
  }
  
  function draw() {
    background(220);
    snake.update();
    snake.draw();
  }