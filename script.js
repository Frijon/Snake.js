let snakebit;
let snake = [];
let frame;
const GAME_WIDTH = 800;
const GAME_HEIGHT = 500;

function setup() {
  createCanvas(GAME_WIDTH, GAME_HEIGHT);
  snakebit = new Snake();
  snake.unshift(snakebit);
  frame = 0;
}

function draw() {
  background(0);
  if (frame % 10 == 0) {
    snake[0].update();

    for (let i = 1; i < snake.length; i++) {
      snake[i].posx = snake[i - 1].posx;
      snake[i].posy = snake[i - 1].posy;
    }
  }

  for (let i = 0; i < snake.length; i++) {
    snake[i].draw(i);
  }

  frame++;
  frame %= 100;
}

//new snakebits get spawned on top of 1st one