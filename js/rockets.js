function Rocket(game, x, y) {
  this.game = game;
  
  this.w = game.canvas.width * 0.03;
  this.h = game.canvas.height * 0.04;

  this.img = new Image();
  this.img.src = 'img/planetas/rocket.png';

  this.x = x;
  this.y = y;
  this.distanceX;
  this.distanceY;

  this.rocketEquip;
  
}

Rocket.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}

Rocket.prototype.calculateDistance = function(planet) {
  
  this.distanceX = (planet.x - this.x)/100;
  this.distanceY = (planet.y - this.y)/100;
  // console.log(this.distanceX, this.distanceY);
}

Rocket.prototype.rocketMovement = function(planet) {

  if(this.x != planet.x) {
    this.x += this.distanceX;
    this.x = Math.round(this.x*100)/100;
  }
  if(this.y != planet.y) {
    this.y += this.distanceY;
    this.y = Math.round(this.y*100)/100;
  }
  if(this.x == planet.x && this.y == planet.y) {
    planet.arrRockets.push(this);
    this.game.selectedPlanets[0].arrRockets.pop();
    this.distanceX=undefined;
    this.distanceY=undefined;
  }
}