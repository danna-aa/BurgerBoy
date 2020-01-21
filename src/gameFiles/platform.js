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
  }

  add(placementX, placementY) {
    this.texture = PIXI.Texture.from("platform");
    this.sprite = new PIXI.Sprite(this.texture);
    this.sprite.x = placementX;
    this.sprite.y = placementY;
    this.sprite.anchor.set(0, 0.5);

    
    // this.container = new PIXI.Container();

    // this.container.addChild(this.sprite);
    this.app.stage.addChild(this.sprite);


    this.app.ticker.add(delta => this.move(delta));

  }

  move(delta) {
    // this.sprite.vx = 1;
    // this.sprite
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


    } 
    if (hitTest(this.burgerBoy.guy, this.sprite)) {
      // console.log("collision!");
      this.burgerBoy.isOnPlatform();
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
