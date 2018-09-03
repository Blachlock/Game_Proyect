function Planet(game) {
  this.game = game;

  this.w = 80;
  this.h = 80;

  this.img = new Image();
  this.img.src = 'img/rollo_planetas/blue_planet.png';

  this.x = 30;
  this.y = 60;
}

Planet.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}


