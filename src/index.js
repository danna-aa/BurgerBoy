import _ from "lodash";
import "./styles/style.scss";
// import * as PIXI from "pixi.js";

document.addEventListener("DOMContentLoaded", () => {
  let type = "WebGL";
  if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas";
  }

  PIXI.utils.sayHello(type);

  let app = new PIXI.Application({
      width: 512,
      height: 256,
      antialias: true,
      transparent: false,
      resolution: 2
    });

  const game = document.getElementById("game");
  game.appendChild(app.view);

    // val boy = new burgerBoy;

    // boy.setup

  PIXI.Loader.shared
    .add("burgerBoy", "../src/assets/characters/burgerBoy/guy.json")
    .load(({burgerBoy}) => setup({burgerBoy}));

    // BugerBoy {

    //   function setup() {

    //   }
    // }






  function setup() {
    window.burgerBoySpritesheet = PIXI.Loader.shared.resources["burgerBoy"].spritesheet;
    window.guy = new PIXI.AnimatedSprite(burgerBoySpritesheet.animations["idle"]);
    window.guy.animationSpeed = 0.15;
    window.guy.play();
    app.stage.addChild(window.guy);

    window.guy.anchor.set(0.5);
    window.guy.x = app.screen.width / 6;
    window.guy.y = app.screen.height / 3;

    // Set the game state
    window.state = play;

    // Start the game loop
    app.ticker.add(delta => gameLoop(delta, state));
  }










  function gameLoop(delta, state) {
    // requestAnimationFrame(gameLoop);
    state(delta);
  }

  function play(delta) {
    burgerBoySpritesheet = PIXI.Loader.shared.resources["burgerBoy"].spritesheet;

    guy.vx = 0;
    guy.vy = 0;
    
    if (key.isPressed("left")) {
      guy.scale.x = -1;
      guy.vx = -2.5;
    }

    
    if (key.isPressed("right")) {
      guy.scale.x = 1;
      guy.vx = 2.5;
    }

    if (key.isPressed("up")) {
      guy.vy = 1.5;
    }

    if (key.isPressed("down")) {
      guy.vy = -1.5;
    }

    if (key.isPressed("space")) {
      if (guy.vy === 0) {
        guy.vy = 6;
      }
    }

    // -----------------------------------------------------------------------------------------------
    // display animation logic
    // -----------------------------------------------------------------------------------------------
    if ( guy.vy > 0 ) {
      if (guy.textures !== burgerBoySpritesheet.animations["jump"]) {
        guy.textures = burgerBoySpritesheet.animations["jump"];
      }
    } else if ( guy.vy < 0 ) {
      if (guy.textures !== burgerBoySpritesheet.animations["landing"]) {
        guy.textures = burgerBoySpritesheet.animations["landing"];
        guy.animationSpeed = 0.2;
      }
    } else if (guy.vy === 0 && guy.vx !== 0) {
      if(guy.textures !== burgerBoySpritesheet.animations["run"]) {
        guy.textures = burgerBoySpritesheet.animations["run"];
      }
    } else if (guy.vx === 0 && guy.vy === 0) {
      if (guy.textures !== burgerBoySpritesheet.animations["idle"]) {
        guy.textures = burgerBoySpritesheet.animations["idle"];
      }
    }
    guy.play();

    guy.x += guy.vx;
    // guy.y = guy.vy + guy.y;
    guy.y -= guy.vy;

  }

  // gameLoop();


});
