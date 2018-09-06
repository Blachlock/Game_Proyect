function Game(canvadId) {
  this.canvas = document.getElementById(canvadId);
  this.ctx = this.canvas.getContext("2d");
  this.canvas.width = window.innerWidth - 20;
  this.canvas.height = window.innerHeight - 20;
  this.fps = 60;
  this.reset();
  this.selectedPlanets = [];
  this.numberRockets = 5;
  this.rocketsMove = [];

};

Game.prototype.start = function () {
  this.interval = setInterval(function () {
    this.clear();
    this.draw();
    this.arrPlanets.forEach(function (planet) {
      planet.conquerPlanet();
      if (this.counter % 180 == 0) {
        if (planet.conquer == true) {
          planet.generateRockets();
        };
      }
    }.bind(this));
    this.rocketsMove.forEach(function(rocket){
      rocket.rocketMovement();
    })
    this.counter++;
  }.bind(this), 1000 / this.fps);
};

Game.prototype.stop = function () {
  clearInterval(this.interval);
};

Game.prototype.reset = function () {
  this.counter = 0;

  this.background = new Background(this);

  this.arrPlanets = [
    new Planet(this, 100, 100),
    new Planet(this, 1500, 1300),
    new Planet(this, 100, 1000),
    new Planet(this, 1000, 600),
    //new Planet(this, Math.round(Math.random() * this.canvas.width), Math.round(Math.random() * this.canvas.height)), 
    //new Planet(this, Math.round(this.canvas.width * 0.9), Math.round(this.canvas.height * 0.8))
  ];
  //this.createPlanets();
  for(var i = 0; i < 5; i++){
    this.arrPlanets[0].arrRockets.push(new Rocket(this, this.arrPlanets[0].x, this.arrPlanets[0].y, 'blue'))
  }
  this.arrPlanets[0].conquer = true;
  this.arrPlanets[0].planetTeam = 'blue';

  for(var i = 0; i < 5; i++){
    this.arrPlanets[1].arrRockets.push(new Rocket(this, this.arrPlanets[1].x, this.arrPlanets[1].y, 'red'))
  }
  this.arrPlanets[1].conquer = true;
  this.arrPlanets[1].planetTeam = 'red';
};

Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function () {
  this.background.draw();

  this.arrPlanets.forEach(function (planet) {
    planet.draw();
    this.ctx.font = "70px sans-serif";
    this.ctx.fillStyle = "red";
    if (planet.arrRockets.length < 10) {
      this.ctx.fillText('0' + planet.arrRockets.length, planet.x + planet.w / 3.4, planet.y + planet.h / 1.6);
    } else {
      this.ctx.fillText(planet.arrRockets.length, planet.x + planet.w / 3.4, planet.y + planet.h / 1.6);
    };
    planet.arrRockets.forEach(function (rocket) {
      rocket.draw();
    });
  }.bind(this));

};

// Game.prototype.generatePlanets = function() {
//   for(var i = 0; i <= 2; i++){
//     this.planets.push(new Planet(this, 30+i*100, 60));
//   }
// };



Game.prototype.eventListener = function () {
  if(this.selectedPlanets.length == 2){
    if(this.selectedPlanets[0].arrRockets.length >= 10){
      for(var i = 0; i <= this.numberRockets - 1; i++){
        var rocket = this.selectedPlanets[0].arrRockets;
        rocket[rocket.length - 1].calculateDistance(this.selectedPlanets[1]);
        this.rocketsMove.push(rocket[rocket.length - 1]);
        rocket.pop();
        if(i + 1 == this.numberRockets){
          this.selectedPlanets = [];
        }
      }
    } else {
      this.selectedPlanets = [];
    }
  }
    
  
};

Game.prototype.planet_finder = function (clickX, clickY) {
  this.arrPlanets.forEach(function (planet) {
    if (clickX > planet.x && clickX < planet.x + planet.w && clickY > planet.y && clickY < planet.y + planet.h) {
        this.selectedPlanets.push(planet)
    }
  }.bind(this));
  console.log(this.selectedPlanets);
  this.eventListener();
};

// Game.prototype.drawCounter = function() {
//   this.ctx.font = "30px sans-serif";
//   this.ctx.fillStyle = "gray";
//   this.ctx.fillText(this.arrPlanets.length, 50, 50);
// }


