function Game(canvadId) {
  this.canvas = document.getElementById(canvadId);
  this.ctx = this.canvas.getContext("2d");
  
  this.fps = 60;
  this.destinox;
  this.destinoy;
  this.reset();
}

Game.prototype.start = function() {
  this.interval = setInterval(function() {
    this.clear();
    this.moveAll();
    this.draw();
    this.eventListener();
    if(this.destinox || this.destinoy){
      this.rocket.rocketMovement(this.destinox, this.destinoy)
    }
  }.bind(this), 1000 / this.fps);
};

Game.prototype.stop = function() {
  clearInterval(this.interval);
};

Game.prototype.reset = function() {
  this.background = new Background(this);
  this.planets = [
    new Planet(this, 30, 60), 
    new Planet(this, 300, 450), 
    new Planet(this, 600, 60), 
    new Planet(this, 900, 450)
  ];
  //this.createPlanets();
  console.log(this.planets);
  //new Planet(this, 30, 60);
  // this.planet2 = new Planet(this, 300, 500);
  this.rocket = new Rocket(this);
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}; 

Game.prototype.draw = function() {
  this.background.draw();
  this.planets.forEach(function(planet){
    planet.draw();
  });
  this.rocket.draw();
};

Game.prototype.moveAll = function() {
};

Game.prototype.eventListener = function() {
};

// Game.prototype.createPlanets = function() {
//   for(var i = 0; i <= 2; i++){
//     this.planets.push(new Planet(this, 30+i*100, 60));
//   }
// }
Game.prototype.planet_finder = function(x, y) {

  this.planets.forEach(function(planet){
    if(x > planet.x && x < planet.x + planet.w && y > planet.y && y < planet.y + planet.h) {
      this.destinox = planet.x + planet.w;
      this.destinoy = planet.y ;
    }
  }.bind(this));
  // if (x > 300 && x < 380 && y > 500 && y < 580) {
  //   this.destinox = this.planet2.x + this.planet2.w;
  //   this.destinoy = this.planet2.y;
  // };
  // if (x > 30 && x < 110 && y > 60 && y < 140) {
  //   this.destinox = this.planet.x + this.planet.w;
  //   this.destinoy = this.planet.y;
  // } else {
  //   console.log("false");
  //   return false;
  // }
};





