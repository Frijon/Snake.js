class Food {
    constructor(){
        let x = 10*(Math.floor((Math.random() * (width / 10)) + 1));
        let y = 10*(Math.floor((Math.random() * (height / 10)) + 1));

        for (let i = 0; i < snake.length; i++){
            while (x == snake[i].posX && y == snake[i].posY) {
                x = 10*(Math.floor((Math.random() * (width / 10)) + 1));
                y = 10*(Math.floor((Math.random() * (height / 10)) + 1));
            }
        }

        this.posX = x;
        this.posY = y; 
        this.size = 10;
    }

    draw(){
        fill(0, 200, 0);
        circle(this.posX + this.size / 2, this.posY + this.size / 2, this.size);
    }
}