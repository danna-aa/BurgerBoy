import BurgerBoy from "./burgerBoy";
import Platform from "./platform";
import Background from "./background";
import Thanks from "./thanks";
import Burger from "./burger";
import { hitTest } from "../scripts/functions/hitTest";

class Game {
  constructor(app) {
    this.app = app;
    this.placementX = 80;
    this.placementY = 250;
    this.platforms = [];
    this.burgerBoy = null;
    this.count = -1;
    this.score = 0;
    this.burgersEaten = 0;
    this.highscore = 0;
    this.deaths = 0;
  }

  setup() {
    let background = new Background(this.app);
    background.add();

    this.burgerBoy = new BurgerBoy(this.app);
    this.burgerBoy.add();

    this.addAssets();
    this.app.ticker.add(delta => this.gameLoop(delta));
  }

  randomizeY() {
    let posOrNeg;
    if (this.placementY >= 226) {
      posOrNeg = -1;
    } else if (this.placementY <= 195) {
      posOrNeg = 1;
    } else {
      posOrNeg = Math.random() < 0.5 ? -1 : 1;
    }

    this.placementY += Math.floor(Math.random() * 100) * posOrNeg;
    // this.placementY += 100 * posOrNeg;
  }

  addAssets() {
    while (this.placementX < 1000000) {
    // while (this.placementX < 1000) {
      this.addPlatform();
      this.addBurger();
    }
    if (this.placementX >= 1000) {
      this.addThanks();
    }
  }

  addPlatform() {
    let platform = new Platform(this.app, this.burgerBoy, this.count);
    platform.add(this.placementX, this.placementY);
    // this.count += 1;
    // console.log(this.count);
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
    this.placementX += 300;
    this.randomizeY();
  }
  

  addBurger() {
    let burger = new Burger(this.app, this.burgerBoy, this.count, this);
    burger.add(this.placementX + 230, this.placementY - 120);
  }

  addThanks() {
    let thanks = new Thanks(this.app, this.burgerBoy, this.count);
    this.placementX += 300;
    thanks.add(this.placementX, 150);
  }

  wrap(player) {
    if (player.x > 1000) {
      player.x = 1;
    } else if (player.x < 0) {
      player.x = 999;
    } else if (player.y > 1000) {
      player.y = 1;
      player.vy = -1;
      this.died();
    } 
    // else if (player.y < -100) {
      // player.y = 600;
    // }
  };

  died() {
    this.deaths += 1;
    document.getElementById("deaths").innerText = `Deaths: ${this.deaths}`;
    // let finalscore = this.score + this.burgersEaten * 300;
    let finalscore = this.burgersEaten;
    if (finalscore > this.highscore) {
      this.highscore = finalscore;
      document.getElementById(
        "high-score"
      ).innerText = `High Score: ${this.highscore}`;
    }
    this.score = 0;
    this.burgersEaten = 0;
  }

  displayPoints() {
    // this.score++;
    // document.getElementById("score").innerText = `Score: ${this.score}`;
    document.getElementById("burgers-eaten").innerText = `Burgers: ${this.burgersEaten}`;
  }

  gameLoop(delta) {
    // requestAnimationFrame(gameLoop);
    // state(delta);

    // console.log("gameloop")
    // this.platforms.forEach(platform => {
    //   if (hitTest(this.burgerBoy.guy, platform.sprite)) {
    //     console.log("collision!");
    //   } else {
    //     console.log("no collision...");
    //   }
    // });
    if (window.state === "play") {
      this.wrap(this.burgerBoy.guy);
      this.displayPoints();
    }
  }
};






export default Game;