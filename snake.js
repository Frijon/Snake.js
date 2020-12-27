class Snake {
    static maxvel = 2;

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
   
        if (this.posx % 5 == 0 && this.posy % 5 == 0) {
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

    draw() {
        rect(this.posx, this.posy, this.size, this.size);
    }
}