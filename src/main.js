const game = new Game();

function preload() {
  game.preload();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");

  game.treasure.setRandomPosition();
  //to make sure player and treasure do not start at the same position:
  while (
    game.treasure.col === game.player.col &&
    game.treasure.row === game.player.row
  ) {
    game.treasure.setRandomPosition();
  }

  game.treasure.treasureFound();
}

function draw() {
  clear();
  game.drawGrid();
  game.player.drawPlayer();
  game.treasure.drawTreasure();
}

function keyPressed() {
  if (keyCode === 38) {
    game.player.moveUp();
  }
  if (keyCode === 39) {
    game.player.moveRight();
  }
  if (keyCode === 40) {
    game.player.moveDown();
  }
  if (keyCode === 37) {
    game.player.moveLeft();
  }
}

//WHY IS THIS FUNCTION NOT EVEN LOGGIN?
//Shouldn't all functions in the main be activated?

// function treasureFound() {
//   console.log('TEST');
//   if (
//     game.player.row === game.treasure.row &&
//     game.player.col === game.treasure.col
//   )   {
//   return game.player.score++ && game.treasure.setRandomPosition();
// }
//}
