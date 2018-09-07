function Planet(game, x, y) {
    this.game = game;

    this.w = Math.round(game.canvas.width * 0.06);
    this.h = Math.round(game.canvas.width * 0.06);

    this.blue = new Image();
    this.blue.src = 'img/planetas/player_planet.png';

    this.red = new Image();
    this.red.src = 'img/planetas/redPlanet.png';

    this.empty = new Image();
    this.empty.src = 'img/planetas/empty_planet.png';

    this.x = x;
    this.y = y;

    this.arrRockets = [];

    this.conquer = false;

    this.planetTeam = '';

    this.img = this.empty;

    this.rocket = new Rocket(game);
}

Planet.prototype.draw = function () {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}

Planet.prototype.generateRockets = function () {
    this.arrRockets.push(new Rocket(this.game, this.x, this.y, this.planetTeam));
}

Planet.prototype.conquerPlanet = function () {
    if (this.arrRockets.length >= 10) {
        this.conquer = true;
    } else if(this.arrRockets.length == 0){
        this.conquer = false;
    }
    this.who();
}
Planet.prototype.who = function () {
    if (this.arrRockets.length > 0) {
        this.planetTeam = this.arrRockets[0].rocketTeam;
        if(this.conquer == false){
            this.img = this.empty
        }else if(this.planetTeam == 'blue') {
            this.img = this.blue;
        }else if(this.planetTeam == 'red') {
            this.img = this.red;

        }
    }
}