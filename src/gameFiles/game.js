import BurgerBoy from "./burgerBoy";
import Platform from "./platform";
import Background from "./background";
import { hitTest } from "../scripts/functions/hitTest";

class Game {
  constructor(app) {
    this.app = app;
    this.placementX = 0;
    this.placementY = 250;
    this.platforms = [];
    this.burgerBoy = null;
  }

  setup() {
    let background = new Background(this.app);
    background.add();

    this.burgerBoy = new BurgerBoy(this.app);
    this.burgerBoy.add();

    this.addPlatforms();


    // this.app.ticker.add(delta => this.gameLoop(delta));

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
    let platform = new Platform(this.app, this.burgerBoy);
    platform.add(this.placementX, this.placementY);
    this.platforms.push(platform);
    this.placementX += 220;
    this.randomizeY();
  }


  // gameLoop(delta) {
  //   // requestAnimationFrame(gameLoop);
  //   // state(delta);

  //   console.log("gameloop")
  //   this.platforms.forEach(platform => {
  //     if (hitTest(this.burgerBoy.guy, platform.sprite)) {
  //       console.log("collision!");
  //     } else {
  //       console.log("no collision...");
  //     }
  //   });

  // }

};






export default Game;