let bredde = 940;
let høyde = 400;
let potens = 5;
let antall = 2 ** potens;
let søyler = [];
let buffer = bredde / antall / 2;
let linjebredde = bredde / antall;
let counter = 0;
let sorterte = 1;

function setup() {
  var canvas = createCanvas(bredde, høyde);
  canvas.parent("canvasForHTML");
  frameRate(5);
}

function draw() {
  background(0);
  tegnsøyler();
  bytt_soyler(counter);
  if ((søyler[counter - 1] < søyler[counter]) || counter == 0) {
    sorterte++;
    counter = sorterte - 1;
  }
  // else if {
  //   sorterte ++;
  //   counter = sorterte -1;
  // }
  else {
    counter--;
  }
  if (sorterte == antall){
    noLoop();
  }
}

function bytt_soyler(counter) {
  if (søyler[counter] > søyler[counter + 1]) {
    dummy = søyler[counter];
    søyler[counter] = søyler[counter + 1];
    søyler[counter + 1] = dummy;
  }
}

function tegnsøyler() {
  for (let i = 0; i < antall; i++) {
    stroke(47, 214, 136);
    if (i == counter || i == counter + 1) {
      stroke("blue");
    }
    strokeWeight(linjebredde * 0.95);
    line(
      linjebredde * i + buffer,
      height,
      linjebredde * i + buffer,
      height - søyler[i] * 2 * 4
    );
  }
}

function shufflearray(array) {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

for (let i = 0; i < antall; i++) {
  søyler.push(i);
}

søyler = shufflearray(søyler);
