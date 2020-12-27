function keyPressed(){
    if (keyCode === UP_ARROW){
        snake[0].nextdir = "up";
    }

    if (keyCode === DOWN_ARROW){
        snake[0].nextdir = "down";
    }

    if (keyCode === RIGHT_ARROW){
        snake[0].nextdir = "right";
    }

    if (keyCode === LEFT_ARROW){
        snake[0].nextdir = "left";
    }

    if (keyCode == 71){
        Snake.addbit();
    }
}