import { hitTest } from "../scripts/functions/hitTest";

class Burger {
  constructor(app, burgerBoy, count, game) {
    this.app = app;
    this.burgerBoy = burgerBoy;
    this.count = count;
    this.game = game;

    this.spritesheet = null;
    this.srite = null;

    this.wiggle = 0;
    this.trig = Math.random() < 0.5 ? "sin" : "cos";
    this.amp = Math.floor(Math.random() * 60);
    this.freq = Math.random() * 0.2;

    this.ateBurger = false;
  }

  add(placementX, placementY) {
    this.spritesheet = PIXI.Loader.shared.resources["burger"].spritesheet;
    this.sprite = new PIXI.AnimatedSprite(this.spritesheet.animations["burger"]);
    this.sprite.scale.x = 1.1;
    this.sprite.scale.y = 1.1;
    this.sprite.anchor.set(0.5);
    this.sprite.animationSpeed = 0.1;
    this.sprite.play();
    this.app.stage.addChild(this.sprite);

    this.sprite.x = placementX;
    this.sprite.y = placementY;
    this.app.ticker.add(delta => this.move(delta, placementY));
  }

  move(delta, placementY) {

    if (window.state === "play") {
      this.sprite.position.x -= 3.5;

      if (this.trig === "sin") {
        this.sprite.position.y = placementY + (1 + Math.sin(this.wiggle * this.freq) * this.amp);
      } else {
        this.sprite.position.y = placementY + (1 + Math.cos(this.wiggle * this.freq) * this.amp);
      }

      this.wiggle += 1;
    }

    if (hitTest(this.burgerBoy.guy, this.sprite)) {
      this.eatBurger();
    }
  }

  eatBurger() {
    console.log(this.game.burgersEaten);
    this.app.stage.removeChild(this.sprite);
    if (!this.ateBurger) {
      this.ateBurger = true;
      this.game.burgersEaten += 1;
    }
    return;
  }
}

export default Burger;
