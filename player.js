class Player {
    constructor(x, y) {
      this.x = canvasElement.width / 2 - 25;
      this.y = canvasElement.height / 2;
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
  
      runLogic () {
  
      }
  }