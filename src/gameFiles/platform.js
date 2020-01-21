class Platform {
  constructor(app) {
    this.app = app;
    this.texture = null;
    this.sprite = null;
    this.state = null;
  }

  add(placementX, placementY) {
    this.texture = PIXI.Texture.from("platform");
    this.sprite = new PIXI.Sprite(this.texture);
    this.sprite.x = placementX;
    this.sprite.y = placementY;

    let container = new PIXI.Container();

    container.addChild(this.sprite);
    this.app.stage.addChild(container);


    this.app.ticker.add(delta => this.move(delta));

  }

  move(delta) {
    // this.sprite.vx = 1;
    // this.sprite
    if (window.state === "play") {

      this.sprite.position.x -= 1;
    } 
  }
}

export default Platform;
