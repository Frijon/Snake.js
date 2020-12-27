function keyPressed(){
    if (keyCode === UP_ARROW){
        snake.nextdir = "up";
    }

    if (keyCode === DOWN_ARROW){
        snake.nextdir = "down";
    }

    if (keyCode === RIGHT_ARROW){
        snake.nextdir = "right";
    }

    if (keyCode === LEFT_ARROW){
        snake.nextdir = "left";
    }
}