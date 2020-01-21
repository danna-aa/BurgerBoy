import BurgerBoy from "./burgerBoy";
import Platform from "./platform";
import Background from "./background";

class Game {
  constructor(app) {
    this.app = app;
    this.placementX = 0;
    this.placementY = 250;
  }

  setup() {
    let background = new Background(this.app);
    background.add();

    this.addPlatforms();

    let burgerBoy = new BurgerBoy(this.app);
    burgerBoy.add();
  }

  randomizeY() {
    let posOrNeg; 
    if ( this.placementY >= 170 ) {
      posOrNeg = -1;
    } else if ( this.placementY <= 150 ) {
      posOrNeg = 1;
    } else {
      posOrNeg = (Math.random() < 0.5 ? -1 : 1);
      // posOrNeg = 1;
    }

    this.placementY += Math.floor(Math.random() * 100) * posOrNeg;
    // this.placementY += 100 * posOrNeg;
  }

  addPlatforms() {
    while (this.placementX < 10000) { // 500 = level width
      this.addPlatform();
    }
  }

  addPlatform() {
    let platform = new Platform(this.app);
    platform.add(this.placementX, this.placementY);
    this.placementX += 220;
    this.randomizeY();
  }


}

export default Game;