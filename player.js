class Player {
    constructor(x, y) {
      this.y = 0;
      this.x = 0;
    }
  
      draw () {
          context.fillStyle = 'navy';
          context.fillRect (
              this.x,
              this.y,
              50,
              50
          )
      }
  }