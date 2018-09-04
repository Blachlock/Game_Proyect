function Rocket(game) {
  this.game = game;

  this.w = 50;
  this.h = 50;

  this.img = new Image();
  this.img.src = 'img/planetas/rocket.png';

  this.x = 110;
  this.y = 60;
}

Rocket.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}

Rocket.prototype.rocketMovement = function(x, y) {
  console.log(this.x, this.y, x, y)
  if (this.x < x && x != undefined) {
    this.x += 1;
  } else if (this.x > x && x != undefined) {
     this.x -= 1
  } else {
  this.game.destinox = undefined;
  }
  if (this.y < y && y != undefined) {
    this.y+=1;
  } else if (this.y > y && y != undefined) {
    this.y -= 1;
  } else {
      this.game.destinoy = undefined;
    }
};