class Snake {

    constructor(posx, posy) {
        this.posX = posx;
        this.posY = posy;
        this.size = 10;

        this.velX = 0;
        this.velY = 0;

        this.dir = "";
        this.nextDir = "";
    }

    update() {

        if (this.posX % 10 == 0 && this.posY % 10 == 0) {
            this.dir = this.nextDir;
            switch (this.dir) {
                case "up":
                    this.velX = 0;
                    this.velY = -Snake.maxVel;
                    break;
                case "down":
                    this.velX = 0;
                    this.velY = Snake.maxVel;
                    break;
                case "right":
                    this.velX = Snake.maxVel;
                    this.velY = 0;
                    break;
                case "left":
                    this.velX = -Snake.maxVel;
                    this.velY = 0;
                    break;
            }
        }

        this.posX += this.velX;
        this.posY += this.velY;

        if (borderTp) {
            this.posX = (this.posX + width) % width;
            this.posY = (this.posY + height) % height;
            
            document.getElementById("borderTpToggle").value="Walkthrough borders: on";
        } else {
            if (this.posX < 0 || this.posX > width || this.posY < 0 || this.posY > height) {
                alert("You hit a wall! You lost!");
                restart();
            }
            document.getElementById("borderTpToggle").value="Walkthrough borders: off";
        }

        for (let i = 1; i < snake.length; i++) if (this.posX == snake[i].posX && this.posY == snake[i].posY) {
            alert("Halt stop");
            restart();
        }
        for (let i = 0; i < food.length; i++) {
            if (this.posX == food[i].posX && this.posY == food[i].posY) {
                food[i] = new Food();
                Snake.addbit();
                Snake.addbit();
                score++;
            }
        }
    }

    draw(i) {
        if (i == 0) {
            fill(255, 0, 0);
            rect(this.posX, this.posY, this.size, this.size);
        }
        else {
            fill(255);
            rect(this.posX, this.posY, this.size, this.size);
        }
    }

    static addbit() {
        snakebit = new Snake(snake[snake.length - 1].posX, snake[snake.length - 1].posY);
        snake.push(snakebit);
    }
}

Snake.maxVel = 10;
