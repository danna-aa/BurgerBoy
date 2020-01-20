import BurgerBoy from "./burgerBoy";

class Game {
  constructor(app) {
    this.app = app;
  }

  setup() {
    let burgerBoy = new BurgerBoy(this.app);
    
    burgerBoy.add();
      // .then(() => burgerBoy.play());


    // window.burgerBoySpritesheet = PIXI.Loader.shared.resources["burgerBoy"].spritesheet;
    // window.guy = new PIXI.AnimatedSprite(burgerBoySpritesheet.animations["idle"]);
    // window.guy.animationSpeed = 0.15;
    // window.guy.play();
    // this.app.stage.addChild(window.guy);

    // window.guy.anchor.set(0.5);
    // window.guy.x = this.app.screen.width / 6;
    // window.guy.y = this.app.screen.height / 3;

    // let play;

    // // Set the game state
    // window.state = play;

    // // Start the game loop
    // // this.app.ticker.add(delta => gameLoop(delta, state));
  }


}

export default Game;