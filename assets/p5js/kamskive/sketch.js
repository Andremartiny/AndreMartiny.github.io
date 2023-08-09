let lowest_point = 50;
let highest_point = 100;
let stempelhøyde = 150;
let sentrum = [90, 150];
let grader = [];
let figur = [];
for (let i = 0; i < 90; i++) {
  figur.push(lowest_point);
}
for (let i = 0; i < 90; i++) {
  figur.push(lowest_point + (i * (highest_point - lowest_point)) / 90);
}
for (let i = 0; i < 90; i++) {
  figur.push(highest_point);
}
for (let i = 0; i < 90; i++) {
  figur.push(highest_point - (i * (highest_point - lowest_point)) / 90);
}
let ektefigur = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 360; i++) {
    ektefigur.push([
      figur[i] * cos(((i + sentrum[0]) * 2 * PI) / 360),
      figur[i] * sin(((i + sentrum[0]) * 2 * PI) / 360),
    ]);
    grader.push(i)
  }
}

function draw() {
  let flytt_front_bak = figur.shift();
  figur.push(flytt_front_bak);
  background(220);
  stroke('rgba(0,0,0,0.09)');
  strokeWeight(2);
  for (let i = 0; i < 359; i++) {
    line(i, sentrum[1] + figur[i], i + 1, sentrum[1] + figur[i]);
  }
  stroke(50, 50, 50);
  strokeWeight(4);
  line(
    sentrum[0],
    figur[sentrum[0]] + sentrum[1],
    sentrum[0],
    figur[sentrum[0]] + sentrum[1] - stempelhøyde
  );
  for (let i = 0; i < 360; i++) {
      ektefigur[i][0] = figur[i] * cos(((i) * 2 * PI) / 360);
      ektefigur[i][1] = figur[i] * sin(((i) * 2 * PI) / 360)+sentrum[1];
  }
  circle(sentrum[0], 2*sentrum[1], 5);
  for (let i = 0; i < 359; i++) {
    line(
      ektefigur[i][0] + sentrum[0],
      ektefigur[i][1] + sentrum[1],
      ektefigur[i + 1][0] + sentrum[0],
      ektefigur[i + 1][1] + sentrum[1]
    );
  }
}
