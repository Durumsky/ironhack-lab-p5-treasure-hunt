class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  moveUp() {}

  moveDown() {}

  moveLeft() {}

  moveRight() {}

  draw() {
    image(game.playerImage, 100, 100, 100, 100);
    
  }
}

class Game {
  constructor() {
    this.player = new Player(10, 10);
  }

  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

    for (let i = 0; i <= 10; i++) {
      let x = i * SQUARE_SIDE;
      stroke(179, 128, 0);
      line(0, x, WIDTH, x);
      line(x, 0, x, WIDTH);
    }
  }

  preload() {
    this.playerImage = loadImage("assets/character-down.png");
  }
  draw() {
    this.player.draw();
  }
}


