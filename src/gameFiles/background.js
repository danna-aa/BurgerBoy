class Background {
  constructor(app) {
    this.app = app;
    this.background1 = null;
    this.background2 = null;
    this.background3 = null;
    this.sprite1 = null;
    this.sprite2 = null;
    this.sprite3 = null;
    this.sprite4 = null;
    this.sprite5 = null;
    this.state = null;
  }

  add() {
    this.background1 = PIXI.Texture.from("background1");
    this.background2 = PIXI.Texture.from("background2");
    this.background3 = PIXI.Texture.from("background3");
    this.background4 = PIXI.Texture.from("background4");
    this.background5 = PIXI.Texture.from("background5");

    this.sprite1 = new PIXI.TilingSprite(
      this.background1,
      this.background1.baseTexture.width,
      this.background1.baseTexture.height
    );
    this.sprite2 = new PIXI.TilingSprite(
      this.background2,
      this.background2.baseTexture.width,
      this.background2.baseTexture.height
    );
    this.sprite3 = new PIXI.TilingSprite(
      this.background3,
      this.background3.baseTexture.width,
      this.background3.baseTexture.height
    );
    this.sprite4 = new PIXI.TilingSprite(
      this.background4,
      this.background4.baseTexture.width,
      this.background4.baseTexture.height
    );
    this.sprite5 = new PIXI.TilingSprite(
      this.background5,
      this.background5.baseTexture.width,
      this.background5.baseTexture.height
    );

    this.sprite1.tilePosition.x = 0;
    this.sprite1.tilePosition.y = 0;
    this.sprite1.scale.x = 2;
    this.sprite1.scale.y = 2;

    this.sprite2.tilePosition.x = 0;
    this.sprite2.tilePosition.y = 0;
    this.sprite2.scale.x = 2;
    this.sprite2.scale.y = 2;

    this.sprite3.tilePosition.x = 0;
    this.sprite3.tilePosition.y = 0;
    this.sprite3.scale.x = 2;
    this.sprite3.scale.y = 2;  

    this.sprite4.tilePosition.x = 0;
    this.sprite4.tilePosition.y = 0;
    this.sprite4.scale.x = 2;
    this.sprite4.scale.y = 2;  

    this.sprite5.tilePosition.x = 0;
    this.sprite5.tilePosition.y = 0;
    this.sprite5.scale.x = 2;
    this.sprite5.scale.y = 2;  

    let container = new PIXI.Container();

    container.addChild(this.sprite1);
    container.addChild(this.sprite2);
    container.addChild(this.sprite3);
    container.addChild(this.sprite4);
    container.addChild(this.sprite5);
    this.app.stage.addChild(container);

    this.app.ticker.add(delta => this.move(delta));
  }

  move(delta) {
    // this.sprite.vx = 1;
    // this.sprite
    // console.log(this.background1)
    if (window.state === "play") {
      // this.sprite1.tilePosition.x -= 0.01;
      // this.sprite2.tilePosition.x -= 0.05;
      // this.sprite3.tilePosition.x -= 0.1;
      this.sprite1.tilePosition.x -= 0.001;
      this.sprite2.tilePosition.x -= 0.05;
      this.sprite3.tilePosition.x -= 0.1;
      this.sprite4.tilePosition.x -= 0.2;
      this.sprite5.tilePosition.x -= 0.3;

    }
  }
}

export default Background;
