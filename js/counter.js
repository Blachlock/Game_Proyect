function Counter(game, x, y) {
  this.game = game;

  this.w = game.canvas.width * 0.05;
  this.h = game.canvas.height * 0.05;

  this.img = new Image();
  this.img.src = 'img/planetas/rocket.png';

  this.x = x + 100;
  this.y = y;
}