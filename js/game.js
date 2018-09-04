function Game(canvadId) {
  this.canvas = document.getElementById(canvadId);
  this.ctx = this.canvas.getContext("2d");
  this.canvas.width = window.innerWidth - 20;
  this.canvas.height = window.innerHeight - 20;
  this.fps = 60;
  this.selectedPlanets = [];
  this.reset();
}

Game.prototype.start = function() {
  this.interval = setInterval(function() {
    this.clear();
    this.moveAll();
    this.draw();
    this.eventListener();
    if(this.selectedPlanets.length === 2){
      this.selectedPlanets[0].arrRockets.forEach(function(rocket){
        rocket.rocketMovement(this.selectedPlanets[1]);
      }.bind(this));
    } 
  }.bind(this), 1000 / this.fps);
};

Game.prototype.stop = function() {
  clearInterval(this.interval);
};

Game.prototype.reset = function() {
  this.background = new Background(this);
  this.arrPlanets = [
    new Planet(this, Math.round(Math.random() * this.canvas.width), Math.round(Math.random() * this.canvas.height)), 
    new Planet(this, this.canvas.width * 0.25, this.canvas.height * 0.8), 
    new Planet(this, this.canvas.width * 0.6, this.canvas.height * 0.08), 
    new Planet(this, this.canvas.width * 0.9, this.canvas.height * 0.8)
  ];
  //this.createPlanets();
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}; 

Game.prototype.draw = function() {
  this.background.draw();
  this.arrPlanets.forEach(function(planet){
    planet.draw();
    planet.arrRockets.forEach(function(rocket){
      rocket.draw();
    });
  });
  //this.rocket.draw();
};

Game.prototype.moveAll = function() {
};

Game.prototype.eventListener = function() {
};

// Game.prototype.createPlanets = function() {
//   for(var i = 0; i <= 2; i++){
//     this.planets.push(new Planet(this, 30+i*100, 60));
//   }
// };

Game.prototype.planet_finder = function(x, y) {
  console.log(x, y);
  
  this.arrPlanets.forEach(function(planet){
      if(x > planet.x && x < planet.x + planet.w && y > planet.y && y < planet.y + planet.h) {
        this.selectedPlanets.push(planet);
        
      }
    }.bind(this));
  console.log(this.selectedPlanets);


  
};





