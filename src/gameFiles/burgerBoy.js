class BurgerBoy {
  constructor(app) {
    this.app = app;
    this.spritesheet = null;
    this.guy = null;

    this.state = null;
    this.platformed = false;
  }

  add() {
    this.spritesheet = PIXI.Loader.shared.resources["burgerBoy"].spritesheet;
    this.guy = new PIXI.AnimatedSprite(this.spritesheet.animations["idle"]);

    this.guy.animationSpeed = 0.15;
    this.guy.vy = 0;
    this.guy.vx = 0;
    this.guy.play();
    this.app.stage.addChild(this.guy);

    this.guy.anchor.set(0.5);
    this.guy.x = this.app.screen.width / 6;
    this.guy.y = this.app.screen.height / 1.4;

    // Start the game loop
    this.app.ticker.add(delta => this.move(delta));
  }

  move(delta) {


    if (!(window.state === "play")) {
      // this.guy.vx = 0;
      // this.guy.vy = 0;
      // if (key.isPressed("left")) {
      //   this.guy.scale.x = -1;
      //   this.guy.vx = -2.5;
      // }
      
      // if (key.isPressed("right")) {
      //   this.guy.scale.x = 1;
      //   this.guy.vx = 2.5;
      // }
  
      // if (key.isPressed("up")) {
      //   this.guy.vy = 1.5;
      // }
  
      // if (key.isPressed("down")) {
      //   this.guy.vy = -1.5;
      // }
  
      // if (key.isPressed("space")) {
      //   if (this.guy.vy === 0) {
      //     this.guy.vy = 6;
      //   }
      // }
  
      // -----------------------------------------------------------------------------------------------
      // display animation logic
      // -----------------------------------------------------------------------------------------------
      if ( this.guy.vy > 0 ) {
        if (this.guy.textures !== this.spritesheet.animations["jump"]) {
          this.guy.textures = this.spritesheet.animations["jump"];
        }
      } else if ( this.guy.vy < 0 ) {
        if (this.guy.textures !== this.spritesheet.animations["landing"]) {
          this.guy.textures = this.spritesheet.animations["landing"];
          this.guy.animationSpeed = 0.2;
        }
      } else if (this.guy.vy === 0 && this.guy.vx !== 0) {
        if(this.guy.textures !== this.spritesheet.animations["run"]) {
          this.guy.textures = this.spritesheet.animations["run"];
        }
      } else if (this.guy.vx === 0 && this.guy.vy === 0) {
        if (this.guy.textures !== this.spritesheet.animations["idle"]) {
          this.guy.textures = this.spritesheet.animations["idle"];
        }
      }
      this.guy.play();

      this.guy.x += this.guy.vx;
      this.guy.y -= this.guy.vy;

    } else {  

      this.guy.scale.x = 1;
      this.guy.play();

      // -----------------------------------------------------------------------------------------------
      // display animation logic
      // -----------------------------------------------------------------------------------------------

      if ( this.guy.vy > 0 ) {
        if (this.guy.textures !== this.spritesheet.animations["jump"]) {
          this.guy.textures = this.spritesheet.animations["jump"];
        }
      } else if ( this.guy.vy < 0 ) {
        if (this.guy.textures !== this.spritesheet.animations["landing"]) {
          this.guy.textures = this.spritesheet.animations["landing"];
        }
      }
       else {
        if (this.guy.textures !== this.spritesheet.animations["run"]) {
          this.guy.textures = this.spritesheet.animations["run"];
        }
      }

      if (this.platformed) {
        // this.guy.x += this.guy.vx;
        // this.guy.vy -= 0.1;
        if (key.isPressed("space")) {
          if (this.guy.vy === 0) {
            this.guy.vy = 6;
            
          }
        }
        this.guy.y = 0;

      } else {
        this.guy.vy -= 0.1;
        this.guy.y -= this.guy.vy;
      }
              this.guy.vy -= 0.1;



      // // this.guy.vy += 1;
      // console.log(this.guy.vy);

      // if (key.isPressed("space")) {
      //   if (this.guy.vy === 0) {
      //     this.guy.vy = 6;
      //     // return;
      //   }
      // }

      // if (key.isPressed("down")) {
      //   this.guy.vy = -1.5;
      // }

  
      // -----------------------------------------------------------------------------------------------
      // display animation logic
      // -----------------------------------------------------------------------------------------------

      // this.guy.x += this.guy.vx;
      // this.guy.vy -= 0.1;

      // this.guy.y -= this.guy.vy;

    }
    




  }

  isOnPlatform() {
      this.guy.scale.x = 1;
      this.guy.vy = 0;
      this.guy.y = this.guy.y;

      // this.guy.vy += 1;
      console.log(this.guy.vy);
      console.log(this.guy.y);

      if (key.isPressed("space")) {
        if (this.guy.vy === 0) {
          this.guy.vy = 6;
          // return;
        }
      }

      if (key.isPressed("down")) {
        this.guy.vy = -1.5;
      }

      // -----------------------------------------------------------------------------------------------
      // display animation logic
      // -----------------------------------------------------------------------------------------------
      if (this.guy.vy > 0) {
        if (this.guy.textures !== this.spritesheet.animations["jump"]) {
          this.guy.textures = this.spritesheet.animations["jump"];
        }
      } else if (this.guy.vy < 0) {
        if (this.guy.textures !== this.spritesheet.animations["landing"]) {
          this.guy.textures = this.spritesheet.animations["landing"];
        }
      } else {
        if (this.guy.textures !== this.spritesheet.animations["run"]) {
          this.guy.textures = this.spritesheet.animations["run"];
        }
      }
  }
}

export default BurgerBoy;
