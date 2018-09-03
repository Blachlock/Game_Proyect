function Rocket(game) {
  this.game = game;

  this.w = 50;
  this.h = 50;

  this.img = new Image();
  this.img.src = 'img/planetas/rocket.png';

  this.x = 110;
  this.y = 70;
}

Rocket.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}

