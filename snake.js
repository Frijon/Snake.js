class Snake {
    static maxvel = 10;

    constructor() {
        this.posx = 100;
        this.posy = 100;
        this.size = 10;

        this.velx = 0;
        this.vely = 0;

        this.dir = "";
        this.nextdir = "";
    }

    update() {

        if (this.posx > GAME_WIDTH) this.posx = 0 - this.size;
        if (this.posx + this.size < 0) this.posx = GAME_WIDTH;

        if (this.posy > GAME_HEIGHT) this.posy = 0 - this.size;
        if (this.posy + this.size < 0) this.posy = GAME_HEIGHT;

        if (this.posx % 20 == 0 && this.posy % 20 == 0) {
            this.dir = this.nextdir;
            switch (this.dir) {
                case "up":
                    this.velx = 0;
                    this.vely = -Snake.maxvel;
                    break;
                case "down":
                    this.velx = 0;
                    this.vely = Snake.maxvel;
                    break;
                case "right":
                    this.velx = Snake.maxvel;
                    this.vely = 0;
                    break;
                case "left":
                    this.velx = -Snake.maxvel;
                    this.vely = 0;
                    break;
            }
        }

        this.posx += this.velx;
        this.posy += this.vely;
    }

    draw(i) {
        if (i == 0) {
            fill(255, 0, 0);
            rect(this.posx, this.posy, this.size, this.size);
        }
        else {
            fill(255);
            rect(this.posx, this.posy, this.size, this.size);
        }
    }

    static addbit() {
        snakebit = new Snake();
        snake.push(snakebit);
    }
}