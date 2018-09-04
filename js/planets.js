function Planet(game, x, y) {
  this.game = game;

  this.w = 80;
  this.h = 80;

  this.img = new Image();
  this.img.src = 'img/planetas/player_planet.png';

  this.x = x;
  this.y = y;

  this.arrRockets = [
    new Rocket(game, x+100, y), 
    new Rocket(game, x+100, y+65), 
    new Rocket(game, x+100, y+130), 
    new Rocket(game, x+100, y+195)
  ];

  //this.rocket = new Rocket(this);
}

Planet.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);

}


