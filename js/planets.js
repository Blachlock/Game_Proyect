function Planet(game, x, y) {
  this.game = game;

  this.w = game.canvas.width * 0.08;
  this.h = game.canvas.width * 0.08;

  this.img = new Image();
  this.img.src = 'img/planetas/player_planet.png';

  this.x = x;
  this.y = y;
  
  this.arrRockets = [];

  this.conquer = false;

  this.planetEquip = '';

  this.rocket = new Rocket(game);
}

Planet.prototype.draw = function() {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}

Planet.prototype.generateRockets = function() {
    this.arrRockets.push(new Rocket(this.game, this.x, this.y, this.rocketEquip));
}

Planet.prototype.conquerPlanet = function() {
    if(this.arrRockets.length >= 10) {
     this.conquer = true;
    }
}