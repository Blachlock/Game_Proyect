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
  this.planet = new Planet(this, 30, 60);
  this.planet2 = new Planet(this, 300, 500);
  this.rocket = new Rocket(this);
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}; 

Game.prototype.draw = function() {
  this.background.draw();
  this.planet.draw();
  this.planet2.draw();
  this.rocket.draw();
};

Game.prototype.moveAll = function() {
};

Game.prototype.eventListener = function() {
};

Game.prototype.planet_finder = function(x, y) {
  if (x > 300 && x < 380 && y > 500 && y < 580) {
    this.destinox = this.planet2.x + this.planet2.w;
    this.destinoy = this.planet2.y;
  };
  if (x > 30 && x < 110 && y > 60 && y < 140) {
    this.destinox = this.planet.x + this.planet.w;
    this.destinoy = this.planet.y;
  } else {
    console.log("false");
    return false;
  }
};





