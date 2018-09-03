function Planet(game, x, y) {
  this.game = game;

  this.w = 80;
  this.h = 80;

  this.img = new Image();
  this.img.src = 'img/planetas/blue_planet.png';

  this.x = x;
  this.y = y;
}

Planet.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}


