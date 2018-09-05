function Rocket(game, x, y) {
  this.game = game;

  this.w = game.canvas.width * 0.03;
  this.h = game.canvas.height * 0.04;

  this.img = new Image();
  this.img.src = 'img/planetas/rocket.png';

  this.x = x;
  this.y = y;
}

Rocket.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}

Rocket.prototype.rocketMovement = function(planet) {

  if (this.x + this.w < planet.x && planet.x != undefined) {
    this.x += 2;
  } else if (this.x - this.w > planet.x + planet.w && planet.x != undefined) {
     this.x -= 2;
  } 
  if (this.y + this.h < planet.y && planet.y != undefined) {
    this.y += 2;
  } else if (this.y > planet.y +planet.h && planet.y != undefined) {
    this.y -= 2;
  } 
   if (this.x + this.w > planet.x && this.x + this.w > planet.x && this.y + this.h > planet.y && this.y + this.h > planet.y) {
    var sendRockets = 3;
    for (i = 0; i < this.arrRockets.length; i++) {
      this.selectedPlanets[1].arrRockets.push(sendRockets);
    }
   }  
    

  // if(this.x > planet.x && this.x < planet.x + planet.w && this.y > planet.y && this.y < planet.y + planet.h){
  //   this.selectedPlanets[1].arrRockets.push(rocket);
  // }
}