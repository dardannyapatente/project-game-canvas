class Launcher {
    constructor (x, y) {
      this.x = x;
      this.y = y;
    }
  
      draw () {
          context.fillStyle = 'green';
          context.fillRect (
              this.x,
              this.y,
              50,
              50
          )
      }
  }