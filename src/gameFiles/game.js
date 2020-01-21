import BurgerBoy from "./burgerBoy";
import Platform from "./platform";
import Background from "./background";
import { hitTest } from "../scripts/functions/hitTest";

class Game {
  constructor(app) {
    this.app = app;
    this.placementX = 70;
    this.placementY = 250;
    this.platforms = [];
    this.burgerBoy = null;
    this.count = -1;
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
    let platform = new Platform(this.app, this.burgerBoy, this.count);
    platform.add(this.placementX, this.placementY);
    this.count += 1
    // this.platforms.push(platform);
    // if (this.count < 20) {
    //   this.placementX += 220;
    // } else if (this.count < 40) {
    //   this.placementX += 250;
    // } else if (this.count < 60) {
    //   this.placementX += 280;
    // } else {
    //   this.placementX += 310;
    // }

    this.placementX += 280;

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