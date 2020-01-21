import _ from "lodash";
import "./styles/style.scss";
// import * as PIXI from "pixi.js";

import Game from "./gameFiles/game";

document.addEventListener("DOMContentLoaded", () => {
  let type = "WebGL";
  if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas";
  }

  PIXI.utils.sayHello(type);

  let app = new PIXI.Application({
    width: 500,
    height: 350,
    // antialias: true,
    // transparent: false,
    resolution: 2,
    // color: #3F3850,
    backgroundColor: 0x3f3850,
    sharedLoader: true,
  });

  const page = document.getElementById("game");
  page.appendChild(app.view);

  let game = new Game(app);

  PIXI.Loader.shared
    .add("burgerBoy", "../src/assets/characters/burgerBoy/guy.json")
    .add("platform", "../src/assets/levels/landing.png")
    .add("background1", "../src/assets/background/1.png")
    .add("background2", "../src/assets/background/2.png")
    .add("background3", "../src/assets/background/3.png")
    .add("background4", "../src/assets/background/4.png")
    .add("background5", "../src/assets/background/5.png")
    .load(() => game.setup());

  window.state = "start";
  $("#start-button-container").click(function() {
    if (!(window.state === "play")) {
      window.state = "play";
    } else {
      window.state = "pause";
    }
    
  });
});


