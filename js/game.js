function Game(canvadId) {
  this.canvas = document.getElementById(canvadId);
  this.ctx = this.canvas.getContext("2d");
  this.canvas.width = window.innerWidth - 20;
  this.canvas.height = window.innerHeight - 20;
  this.fps = 60;
  this.reset();
  this.selectedPlanets = [];
  this.generateRockets();
  this.arrayRocketPlanetDestino = 0;
  this.numberRockets = 2;
  
  
}

Game.prototype.start = function() {
    this.interval = setInterval(function() {
      this.clear();
      this.draw();
      this.eventListener();
      this.counter++;
      if(this.counter % 180 == 0){
          this.generateRockets();
      }
    }.bind(this), 1000 / this.fps);
};

Game.prototype.stop = function() {
  clearInterval(this.interval);
};

Game.prototype.reset = function() {
    this.counter = 0;

    this.background = new Background(this);

    this.planetPlayer1 = new Planet(this, 100, 100);

    this.arrPlanets = [
    new Planet(this, 1000, 100), 
    //new Planet(this, Math.round(Math.random() * this.canvas.width), Math.round(Math.random() * this.canvas.height)), 
    //new Planet(this, 1000, 600), 
    //new Planet(this, Math.round(this.canvas.width * 0.9), Math.round(this.canvas.height * 0.8))
    ];

  //this.createPlanets();
};

Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}; 

Game.prototype.draw = function() {
    this.background.draw();

    this.planetPlayer1.draw();

    this.arrPlanets.forEach(function(planet){
      planet.draw();
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
    }.bind(this));

};

// Game.prototype.generatePlanets = function() {
//   for(var i = 0; i <= 2; i++){
//     this.planets.push(new Planet(this, 30+i*100, 60));
//   }
// };

Game.prototype.generateRockets = function() {
    this.arrPlanets.forEach(function(planet){
      planet.arrRockets.push(new Rocket(this, planet.x, planet.y));
    }.bind(this));
};

Game.prototype.eventListener = function() {
  if(this.selectedPlanets.length == 2){
    if(this.arrayRocketPlanetDestino == 0){
      this.arrayRocketPlanetDestino = this.selectedPlanets[1].arrRockets.length;
      this.numberRockets;
    }
    this.selectedPlanets[0].arrRockets.forEach(function(rocket, index){
      if(!rocket.distanceX && !rocket.distanceY){
        console.log(index);
        rocket.calculateDistance(this.selectedPlanets[1]);
      }
      rocket.rocketMovement(this.selectedPlanets[1]);
      if(this.arrayRocketPlanetDestino + this.numberRockets == this.selectedPlanets[1].arrRockets.length){
        this.selectedPlanets = [];
      }
    }.bind(this));
  } 
};

Game.prototype.planet_finder = function(clickX, clickY) {
  
  this.arrPlanets.forEach(function(planet){
      if(clickX > planet.x && clickX < planet.x + planet.w && clickY > planet.y && clickY < planet.y + planet.h) {
        this.selectedPlanets.push(planet);
      }
    }.bind(this));

    console.log(this.selectedPlanets);
};

// Game.prototype.drawCounter = function() {
//   this.ctx.font = "30px sans-serif";
//   this.ctx.fillStyle = "gray";
//   this.ctx.fillText(this.arrPlanets.length, 50, 50);
// }


