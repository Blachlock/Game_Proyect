function Counter(game, x, y) {
  this.game = game;

  this.w = game.canvas.width * 0.05;
  this.h = game.canvas.height * 0.05;

  this.x = game.planet.x;
  this.y = game.planet.y;

 

}

Counter.prototype.draw = function() {
  this.ctx.font = "70px sans-serif";
  this.ctx.fillStyle = "red";
  if(planet.arrRockets.length < 10) {
      this.ctx.fillText('0' + planet.arrRockets.length, planet.x + planet.w/3.4, planet.y + planet.h/1.6);
  } else {
      this.ctx.fillText(planet.arrRockets.length, planet.x + planet.w/3.4, planet.y + planet.h/1.6);
    };
  planet.arrRockets.forEach(function(rocket){
      rocket.draw();
  });

}

