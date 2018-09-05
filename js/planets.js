function Planet(game, x, y) {
  this.game = game;

  this.w = game.canvas.width * 0.08;
  this.h = game.canvas.width * 0.08;

  this.img = new Image();
  this.img.src = 'img/planetas/player_planet.png';

  this.x = x;
  this.y = y;

  this.arrRockets = [
    new Rocket(game, x, y), 
    new Rocket(game, x, y+10), 
    new Rocket(game, x, y+20), 
    new Rocket(game, x, y+30)
  ];

  //this.rocket = new Rocket(this);
}

Planet.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);

}


