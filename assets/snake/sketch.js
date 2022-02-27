let bredde = 800;
let hoyde = 500;
let str = 20;
let slange;
let eple;
let ikkedod = true;

function setup() {
  var canvas = createCanvas(bredde, hoyde);
  canvas.parent("canvasForHTML");
  slange = new Slange(str);
  eple = new Eple(str);
  rectMode(CENTER);
  frameRate(8);
}

function draw() {
  if (ikkedod) {
    background(0);
    slange.oppdater();
    slange.tegn();
    eple.tegn();
    if (eple.x == slange.kropp[0][0] && eple.y == slange.kropp[0][1]) {
      eple = new Eple(str);
      slange.voks();
    }
    if (slange.dodssjekk() == true) {
      ikkedod = false;
    }
  }
  if (ikkedod == false) {
    textSize(100);
    fill(150);
    stroke(150);
    text("synd...", 0, hoyde / 2);
  }
}
