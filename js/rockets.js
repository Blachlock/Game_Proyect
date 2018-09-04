function Rocket(game, x, y) {
  this.game = game;

  this.w = game.canvas.width * 0.03;
  this.h = game.canvas.height * 0.04;

  this.img = new Image();
  this.img.src = 'img/planetas/rocket.png';

  this.x = x + 100;
  this.y = y;
}

Rocket.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}

Rocket.prototype.rocketMovement = function(planet) {

  if (this.x < planet.x && planet.x != undefined) {
    this.x += 1;
  } else if (this.x > planet.x && planet.x != undefined) {
     this.x -= 1;
  } 
  if (this.y < planet.y && planet.y != undefined) {
    this.y += 1;
  } else if (this.y > planet.y && planet.y != undefined) {
    this.y -= 1;
  } 
  if (this.x == planet.x && this.y == planet.y) {
    this.selectedPlanets = [];
  }     
    

  //if(this.x > planet.x && this.x < planet.y + planet.w && this.y > planet.y && this.y < planet.y + planet.h){
    //this.selectedPlanets[1].arrRockets.push(rocket);
  //}
};