import { hitTest } from "../scripts/functions/hitTest";

class Platform {
  constructor(app, burgerBoy, count) {
    this.app = app;
    this.texture = null;
    this.sprite = null;
    this.state = null;
    this.container = null;
    this.burgerBoy = burgerBoy;
    // this.counted = false;
    this.count = count;
    this.wiggle = 0;
    this.trig = Math.random() < 0.5 ? "sin" : "cos";
  }

  add(placementX, placementY) {
    this.texture = PIXI.Texture.from("platform");
    this.sprite = new PIXI.Sprite(this.texture);
    this.sprite.x = placementX;
    this.sprite.y = placementY;

    this.sprite.anchor.set(0, 1.7);

    // this.container = new PIXI.Container();
    // this.container.addChild(this.sprite);
    this.app.stage.addChild(this.sprite);

    this.app.ticker.add(delta => this.move(delta, placementY));

  }

  move(delta, placementY) {
    // this.sprite.vx = 1;
    if (window.state === "play") {
      // if (this.count <= 20) {
      //   this.sprite.position.x -= 2;
      // } else if ( this.count <= 40) {
      //   this.sprite.position.x -= 2.75;
      // } else if (this.count <= 60) {
      //   this.sprite.position.x -= 3.5;
      // } else {
      //   this.sprite.position.x -= 4.25;
      // }
      this.sprite.position.x -= 3.5;

      
      // if (this.trig === "sin") {
      //   this.sprite.position.y = placementY + (1 + Math.sin(this.wiggle * 0.2) * 8); 
      // } else {
      //   this.sprite.position.y = placementY + (1 + Math.cos(this.wiggle * 0.2) * 8); 
      // }

      // this.wiggle += 1;
    }


    
    if (hitTest(this.burgerBoy.guy, this.sprite)) {
      // console.log("collision!");
      
      this.burgerBoy.isOnPlatform(this.sprite.y);
      // if (this.counted === false) {
      //   this.counted = true;
        
      // }
      // this.burgerBoy.isOnPlatform();
      
      // console.log("platformed =");
      // console.log(this.burgerBoy.platformed);

      // this.burgerBoy.isOnPlatform();
    } else {
      // this.burgerBoy.isNotOnPlatform();
      // console.log("platformed =");
      // console.log(this.burgerBoy.platformed);
      // this.guy.vy = -1;
      // return;
    }
  }
}

export default Platform;
