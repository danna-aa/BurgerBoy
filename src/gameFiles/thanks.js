class Thanks {
  constructor(app, burgerBoy, count) {
    this.app = app;
    this.texture = null;
    this.sprite = null;
    this.state = null;
    this.container = null;
    this.burgerBoy = burgerBoy;
    this.count = count;
    this.wiggle = 0;
  }

  add(placementX, placementY) {
    this.texture = PIXI.Texture.from("thanks");
    this.sprite = new PIXI.Sprite(this.texture);
    this.sprite.x = placementX;
    this.sprite.y = placementY;
    // this.sprite.anchor.set(0, 0);
    this.sprite.anchor.set(0.5);

    this.sprite.scale.x = 0.5;
    this.sprite.scale.y = 0.5;


    this.app.stage.addChild(this.sprite);

    this.app.ticker.add(delta => this.move(delta));
  }

  move(delta) {
    if (window.state === "play") {
      this.sprite.position.x -= 3.5;
      // this.sprite.scale.x = (1 + Math.cos(this.wiggle) * 0.05) / 2;
      // this.sprite.scale.y = (1 + Math.sin(this.wiggle) * 0.05) / 2; 
      this.sprite.position.y = 150 + (1 + Math.sin(this.wiggle * 0.8) * 8); 
      
      this.wiggle += 0.1;   
    }
  
  }
}

export default Thanks;
