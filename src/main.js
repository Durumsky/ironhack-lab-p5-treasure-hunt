const game = new Game();



function preload(){
  game.preload();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  //game.setup()
}

function draw() {
  game.drawGrid();
  game.draw()
  //player.draw();
}
