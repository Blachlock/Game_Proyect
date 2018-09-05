function Counter(game, x, y) {
  this.game = game;

  this.w = game.canvas.width * 0.05;
  this.h = game.canvas.height * 0.05;

  this.x = game.planet.x;
  this.y = game.planet.y;
}