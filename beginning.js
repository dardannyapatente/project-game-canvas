// Game

class Game {
    constructor() {
        this.player = new Player();
        this.ballLauncher = [];
    }

    loop () {

    }

    runLogic () {

    }

    draw () {
        this.player.draw();
    }
}

// Player

class Player {
    draw () {
        context.fillRect (
            100,
            100,
            50,
            50
        )
    }
}