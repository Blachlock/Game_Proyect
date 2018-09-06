var game;
window.onload = function () {
  game = new Game("canvas");

  game.start();

  game.canvas.addEventListener('click', on_canvas_click, false);
  function on_canvas_click(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    game.planet_finder(x, y);
    
  }

};