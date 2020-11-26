class Game {
  constructor(x, y) {
    this.player = new Player(0, 0);
    this.launcher = new Launcher(200, 0);
    this.setKeyBindings();
    this.loop();
  }

  setKeyBindings () {
    window.addEventListener('keydown', (event) => {
      switch(event.key) {
        case 'ArrowUp':
          this.player.y -= 10;
          break;
        case 'ArrowDown':
          this.player.y += 10;
          break;
        case 'ArrowRight':
          this.player.x += 10;
          break;
        case 'Arrowleft':
          this.player.x -= 10;
          break;
      }
    });
  }

  loop () {
    this.runLogic();
    this.draw();
    window.requestAnimationFrame(() => {
      this.loop();
    });
  }

// Call runLogic method for every "element" in game that has it

runLogic () {

}

/* Run logic for balls --> to improve
    runLogic () {
      if (Math.random() < 0.5) {

      }
      this.launcher.push(new Ball(canvasWidth, Math.random() * canvasHeight));
    }
*/


draw () {
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  this.player.draw();
  this.launcher.draw();
}
}