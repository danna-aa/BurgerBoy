class BurgerBoy {
  constructor(app) {
    this.app = app;
    this.spritesheet = null;
    this.guy = null;
    this.state = null;
  }

  add() {
    this.spritesheet = PIXI.Loader.shared.resources["burgerBoy"].spritesheet;
    this.guy = new PIXI.AnimatedSprite(this.spritesheet.animations["idle"]);

    this.guy.animationSpeed = 0.15;
    this.guy.play();
    this.app.stage.addChild(this.guy);

    this.guy.anchor.set(0.5);
    this.guy.x = this.app.screen.width / 6;
    this.guy.y = this.app.screen.height / 3;

    let play;
    // Set the game state
    this.state = play;

    // Start the game loop
    this.app.ticker.add(delta => gameLoop(delta, state));
  }

  start() {
    
  }
}

export default BurgerBoy;
