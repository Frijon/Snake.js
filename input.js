function keyPressed(){
    if (keyCode === UP_ARROW && snake[0].dir != "down"){
        snake[0].nextDir = "up";
    }

    if (keyCode === DOWN_ARROW && snake[0].dir != "up"){
        snake[0].nextDir = "down";
    }

    if (keyCode === RIGHT_ARROW && snake[0].dir != "left"){
        snake[0].nextDir = "right";
    }

    if (keyCode === LEFT_ARROW && snake[0].dir != "right"){
        snake[0].nextDir = "left";
    }

    if (keyCode == 71){
        Snake.addbit();
    }
}