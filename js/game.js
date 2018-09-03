function Game(canvadId) {
  this.canvas = document.getElementById(canvadId);
  this.ctx = this.canvas.getContext("2d");
  
  this.fps = 60;


  this.reset();
}

Game.prototype.start = function() {
  this.interval = setInterval(function() {
    this.clear();
    this.moveAll();
    this.draw();
    this.eventListener();

    
  }.bind(this), 1000 / this.fps);
};

Game.prototype.stop = function() {
  clearInterval(this.interval);
};



Game.prototype.reset = function() {
  this.background = new Background(this);
  this.planet = new Planet(this, 30, 60);
  this.planet2 = new Planet(this, 300, 60);
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

