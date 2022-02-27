let bredde = 400;
let hoyde = 2 * bredde;
let str = bredde / 10;
let breddedata = 230;
let scoreboard = new Scoreboard();
let nestekloss;
let strek;
let brett;
let pausestatus = 0;

function setup() {
  var canvas = createCanvas(bredde + breddedata, 800);
  canvas.parent('canvasForHTML');
  nestekloss = new Kloss(random(klossfigurer));
  kloss = new Kloss(random(klossfigurer));
  brett = new Brett();
}

function draw() {
  background(0);
  brett.tegnRutenett(bredde / str, hoyde / str);
  brett.tegn();
  kloss.tegn();
  kloss.tegnSpokelse();
  kloss.tegnNesteKloss();
  scoreboard.tegn();
  if (frameCount % scoreboard.updates == 0) {
    kloss.fall();
  }
  if (pausestatus == 1) {
    pauseSkjerm();
  }
  if (scoreboard.gameOver == true) {
    kloss.gameOver();
  }
}

function pause() {
  if (pausestatus == 1) {
    noLoop();
  }
  if (pausestatus == 0) {
    loop();
  }
}

function pauseSkjerm() {
  background(0, 210);
  textSize(60);
  fill("red");
  stroke("red");
  text("PAUSE", 100,300);
  textSize(18);
  fill("white");
  stroke("white");
  text("Bruk piltastene for å styre", 100, 350);
  text("Trykk p for pause", 100, 400);
  text("Trykk r for å restarte", 100, 450);
  text("Trykk z og x for å rotere brikkene", 100, 500);
  text("Trykk Space for å slippe brikken ned", 100, 550);
}