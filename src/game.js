class Game {
  constructor() {
    this.player = new Player(0, 0);
    this.treasure = new Treasure(0, 0);
  }

  preload() {
    this.playerImage = loadImage("assets/character-down.png");
    this.playerUp = loadImage("assets/character-up.png");
    this.playerLeft = loadImage("assets/character-left.png");
    this.playerRight = loadImage("assets/character-right.png");
    this.playerDown = loadImage("assets/character-down.png");
    this.treasureImg = loadImage("assets/treasure.png");
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
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.score = 0;
    
  }

  moveUp() {
    this.col <= 0 ? this.col = 0 : this.col--;
    game.playerImage = game.playerUp;
    game.treasure.treasureFound()
  }

  moveDown() {
    this.col >= 9 ? this.col = 9 : this.col +=1;
    game.playerImage = game.playerDown;
    game.treasure.treasureFound()
  }

  moveLeft() {
    this.row  <= 0 ? this.row = 0 : this.row--,
    game.playerImage = game.playerLeft;
    game.treasure.treasureFound()
  }

  moveRight() {
    this.row >= 9 ? this.row = 9 : this.row++;
    game.playerImage = game.playerRight;
    game.treasure.treasureFound()
  }

  drawPlayer() {
    image(game.playerImage, this.row * 100, this.col * 100, 100, 100);
  }
}

class Treasure {
  setRandomPosition(col, row) {
    this.row = Math.floor((Math.random() * WIDTH) / 100);
    this.col = Math.floor((Math.random() * WIDTH) / 100);
  }

  drawTreasure() {
    image(game.treasureImg, this.row * 100, this.col * 100, 100, 100);
  }

  treasureFound() {
    // console.log(game.player.score)
    // console.log(game.player.row)
    const vikingScore = document.querySelector('#vikings-score')
    if (this.row === game.player.row && this.col === game.player.col) {
      this.setRandomPosition();
      game.player.score++;
      
      //console.log(vikingScore)
      vikingScore.innerText = game.player.score
    }
    if (game.player.score >= 10){
      //console.log('you win')
      const gameOver = document.createElement('h3');
      gameOver.innerText = 'Well done, oh you viking King!';
      vikingScore.appendChild(gameOver);

    }
  }
}
