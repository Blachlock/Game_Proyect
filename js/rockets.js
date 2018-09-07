function Rocket(game, x, y, rocketTeam) {
  this.game = game;
  
  this.w = game.canvas.width * 0.02;
  this.h = game.canvas.height * 0.03;

  this.rocketBlue = new Image();
  this.rocketBlue.src = 'img/planetas/rocketBlue.png';

  this.rocketRed = new Image();
  this.rocketRed.src = 'img/planetas/rocketRed.png';

  this.x = x;
  this.y = y;
  this.distanceX;
  this.distanceY;
  this.planetDestiny = undefined;
  this.rocketTeam = rocketTeam;
  this.who();
  
}

Rocket.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}

Rocket.prototype.calculateDistance = function(planet) {
  
  this.distanceX = (planet.x - this.x)/100;
  this.distanceY = (planet.y - this.y)/100;
  this.planetDestiny = planet;
   console.log(this.distanceX, this.distanceY);
}

Rocket.prototype.rocketMovement = function() {
  if(this.x != this.planetDestiny.x) {
    this.x += this.distanceX;
    this.x = Math.round(this.x*100)/100;
  }

  if(this.y != this.planetDestiny.y) {
    this.y += this.distanceY;
    this.y = Math.round(this.y*100)/100;
  }

  if(this.x == this.planetDestiny.x && this.y == this.planetDestiny.y) {
    if(this.planetDestiny.planetTeam == this.rocketTeam || this.planetDestiny.arrRockets.length == 0 || this.planetDestiny.planetTeam == 0) {
      this.planetDestiny.arrRockets.push(this);
    } else {
      this.planetDestiny.arrRockets.pop();
    }
    this.game.rocketsMove.shift();
  }
}
Rocket.prototype.who = function() {
  if(this.rocketTeam == 'blue') {
    this.img = this.rocketBlue;
  } else if (this.rocketTeam == 'red'){
    this.img = this.rocketRed;
  }
}