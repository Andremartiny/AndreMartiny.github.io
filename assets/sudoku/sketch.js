let størrelse = 40;
let bufferx = -6;
let buffery = 8;
let xpos = størrelse / 2 + bufferx;
let ypos = størrelse / 2 + buffery;
let pause = 1;
let umulig = false;
let brettkopi;
let fps = 100;

function setup() {
  var canvas = createCanvas(størrelse * 9, størrelse * 9);
  canvas.parent("canvasForHTML");
  brettkopi = kopier_brett();
}

function draw() {
  if (frameCount % floor((51 - fps / 2)) == 0) {
    textSize(20);
    background(54);
    fill(66);
    noStroke();
    square(3 * størrelse, 0, 3 * størrelse);
    square(3 * størrelse, height - 3 * størrelse, 3 * størrelse);
    square(0, 3 * størrelse, 3 * størrelse);
    square(6 * størrelse, 3 * størrelse, 3 * størrelse);
    grid();
    strokeWeight(0);
    fill(255);
    tegn_brett();
    if ((pause == 0)) {
      losning();
    }
    if (umulig) {
      textSize(60);
      text("UMULIG!", 0, height / 2);
    }
  }
}

function grid() {
  stroke(0);
  strokeWeight(.5);
  for (let i = 0; i < 10; i++) {
    line(i * størrelse, 0, i * størrelse, height);
    line(0, i * størrelse, width, i * størrelse);
  }
  for (let i = 1; i < 3; i++) {
    // stroke(150,0,0);
    strokeWeight(.5);
    line(i * 3 * størrelse, 0, i * 3 * størrelse, height);
    line(0, i * 3 * størrelse, width, i * 3 * størrelse);
  }
}

let brett = [];
for (let i = 0; i < 9; i++) {
  let dummyarray = [];
  for (let j = 0; j < 9; j++) {
    dummyarray.push(0);
  }
  brett.push(dummyarray);
}

function tegn_brett() {
  fill(194, 194, 194);
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (brett[j][i] != 0) {
        if (brett[j][i] == brettkopi[j][i]) {
          fill(76, 175, 80);
          text(brett[j][i], i * størrelse + xpos, j * størrelse + ypos);
          fill(194, 194, 194);
        }
        else {
          text(brett[j][i], i * størrelse + xpos, j * størrelse + ypos);
        }
      }
    }
  }  //
}

function er_mulig(x, y, n) {
  if (
    sjekk_rad(x, y, n) == false ||
    sjekk_kol(x, y, n) == false ||
    sjekk_boks(x, y, n) == false
  ) {
    return false;
  }
  return true;
}

function sjekk_rad(x, y, n) {
  for (let i = 0; i < 9; i++) {
    if (brett[y][i] == n) {
      return false;
    }
  }
  return true;
}

function sjekk_kol(x, y, n) {
  for (let i = 0; i < 9; i++) {
    if (brett[i][x] == n) {
      return false;
    }
  }
  return true;
}

function sjekk_boks(x, y, n) {
  let hx = x - (x % 3);
  let hy = y - (y % 3);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (brett[hy + i][hx + j] == n) {
        return false;
      }
    }
  }
  return true;
}

function losning() {
  for (let z = 0; z < 9; z++) {
    for (let w = 0; w < 9; w++) {
      if (brett[z][w] == 0) {
        for (let n = 1; n < 10; n++) {
          if (er_mulig(w, z, n)) {
            brett[z][w] = n;
            return;
          }
        }
        // brett[z][w] = 0;
        øksisteindeks(w, z);
        return;
      }
    }
  }
}

function øksisteindeks(x, y) {
  // TODO: Gjør indeksskifte med moduloregning.
  let skiftey = y;
  let skiftex = x;
  if (x == 0) {
    skiftey -= 1;
    skiftex = 8;
  } else {
    skiftex -= 1;
  }
  if (skiftex < 0 || skiftey < 0) {
    umulig = true;
    pause = 1;
    return;
  }
  else if (brettkopi[skiftey][skiftex] != 0) {
    øksisteindeks(skiftex, skiftey);
    return;
  }
  else if (brett[skiftey][skiftex] == 9) {
    brett[skiftey][skiftex] = 0;
    øksisteindeks(skiftex, skiftey);
    return;
  }
  else {
    for (let k = brett[skiftey][skiftex] + 1; k < 10; k++) {
      if (er_mulig(skiftex, skiftey, k)) {
        brett[skiftey][skiftex] = k;
        return;
      }
    }
  }
  brett[skiftey][skiftex] = 0;
  øksisteindeks(skiftex, skiftey);
  return;
}

function unpause() {
  pause = (pause + 1) % 2;
}

function tom_brett() {
  let htmlbrett = document.getElementById("sudokubrett");
  for (let i = 0; i < 9; i++) {
    let sudokurad = htmlbrett.childNodes[2 * i + 1];
    for (let j = 0; j < 9; j++) {
      sudokurad.childNodes[2 * j + 1].childNodes[0].value = "";
    }
  }
}


function kopier_brett() {
  dummy = [];
  for (let i = 0; i < 9; i++) {
    let dummyarray = [];
    for (let j = 0; j < 9; j++) {
      dummyarray.push(brett[i][j]);
    }
    dummy.push(dummyarray);
  }
  return dummy
}