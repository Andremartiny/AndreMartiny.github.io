let lengde = 720;
let bredde = 480;
let venstre = 200;
let antallpartikler2 = 200;
let antallpartikler = 600;
let hoyre = lengde - venstre;
let buffer = 10;
let slider;
let farge1;
let farge2;

let partikler = [];
let partikler2 = [];
let strom = 1;



function setup() {
  let canvas = createCanvas(720, 480);
  canvas.parent("canvasForHTML");
  // canvas.style("visibility", "visible");
  frameRate(60);
  farge1 = color(255, 204, 0);
  farge2 = color(65);
  for (i = 0; i < antallpartikler; i++) {
    partikler.unshift(
      new Partikkel(
        randomGaussian(100, 10.45),
        2.5,
        farge2,
        (x = random(venstre + 4 * buffer, hoyre - 4 * buffer)),
        (y = random(height / 4, (height * 3) / 4)),
        (fart = random(-1, 1))
      )
    );
  }
  for (i = 0; i < antallpartikler2; i++) {
    partikler2.unshift(
      new Partikkel(
        randomGaussian(120, 10.45),
        2.6,
        farge1,
        (x = random(venstre + 4* buffer, hoyre - 4* buffer)),
        (y = random(height / 4, (height * 3) / 4)),
        (fart = random(-1, 1))
      )
    );
  }
}

function draw() {
  background(220);
  stroke(0);
  strokeWeight(6);

  // RAMMEVERKET TIL SEPERATOREN !!!!!!!!!!!!!!!!!!! MANGLER RØR I BUNN !!!!!!!!!!
  line(venstre, height / 4, venstre, (3 / 4) * height);
  line(hoyre, height / 4, hoyre, (3 / 4) * height);
  line(
    venstre,
    (height * 3) / 4,
    venstre + 2 * ((hoyre - venstre) / 2 - buffer),
    (height * 3) / 4 + 2 * (((2 / 4) * (hoyre - venstre)) / 2) - buffer
  );
  line(
    hoyre - (hoyre - venstre) / 2 + 1.5 * buffer,
    (height * 3) / 4 + (2 / 4) * ((hoyre - venstre) / 2 - 1.5 * buffer),
    venstre + 2 * ((hoyre - venstre) / 2 - buffer)+buffer,
    (height * 3) / 4 + 2 * (((2 / 4) * (hoyre - venstre)) / 2) - 2* buffer
  );
  line(
    hoyre,
    (height * 3) / 4,
    hoyre - (hoyre - venstre) / 2 + 1.5 * buffer,
    (height * 3) / 4 + (2 / 4) * ((hoyre - venstre) / 2 - 1.5 * buffer)
  );

  // VANNSTRØM!
  strokeWeight(8);
  stroke(0, 0, 160);
  line(
    width / 2 - 100,
    (3 / 4) * height + 27,
    width / 2 - 100,
    (3 / 4) * height + 22 - (30 * (strom - 1) ** 2) / 2 - 3
  );
  triangle(
    width / 2 - 100 - 1,
    (3 / 4) * height + 22 - (30 * (strom - 1) ** 2) / 2 - 3,
    width / 2 - 100 + 1,
    (3 / 4) * height + 22 - (30 * (strom - 1) ** 2) / 2 - 3,
    width / 2 - 100,
    (3 / 4) * height + 22 - (30 * (strom - 1) ** 2) / 2 - 1 - 3
  );
  line(
    width / 2 + 100,
    (3 / 4) * height + 27,
    width / 2 + 100,
    (3 / 4) * height + 22 - (30 * (strom - 1) ** 2) / 2 - 3
  );
  triangle(
    width / 2 + 100 - 1,
    (3 / 4) * height + 22 - (30 * (strom - 1) ** 2) / 2 - 3,
    width / 2 + 100 + 1,
    (3 / 4) * height + 22 - (30 * (strom - 1) ** 2) / 2 - 3,
    width / 2 + 100,
    (3 / 4) * height + 22 - (30 * (strom - 1) ** 2) / 2 - 1 - 3
  );
  line(
    width / 2 - 50,
    (3 / 4) * height + 53,
    width / 2 - 50,
    (3 / 4) * height + 48 - (30 * (strom - 1) ** 2) / 2 - 3
  );
  triangle(
    width / 2 - 50 - 1,
    (3 / 4) * height + 48 - (30 * (strom - 1) ** 2) / 2 - 3,
    width / 2 - 50 + 1,
    (3 / 4) * height + 48 - (30 * (strom - 1) ** 2) / 2 - 3,
    width / 2 - 50,
    (3 / 4) * height + 48 - (30 * (strom - 1) ** 2) / 2 - 1 - 3
  );
  line(
    width / 2 + 50,
    (3 / 4) * height + 53,
    width / 2 + 50,
    (3 / 4) * height + 48 - (30 * (strom - 1) ** 2) / 2 - 3
  );
  triangle(
    width / 2 + 50 - 1,
    (3 / 4) * height + 48 - (30 * (strom - 1) ** 2) / 2 - 3,
    width / 2 + 50 + 1,
    (3 / 4) * height + 48 - (30 * (strom - 1) ** 2) / 2 - 3,
    width / 2 + 50,
    (3 / 4) * height + 48 - (30 * (strom - 1) ** 2) / 2 - 1 - 3
  );

  // PARTIKKELBEVEGELSE ///
  for (i = 0; i < partikler.length; i++) {
    partikler[i].vis();
    partikler[i].bevegelse();
    if (partikler[i].y >= height || partikler[i].y <= height / 4 - buffer) {
      partikler.splice(
        i,
        1,
        new Partikkel(randomGaussian(100, 7.45), 2.5, farge2)
      );
    }
  }
  for (i = 0; i < partikler2.length; i++) {
    partikler2[i].vis();
    partikler2[i].bevegelse();
    if (partikler2[i].y >= height || partikler2[i].y <= height / 4 - buffer) {
      partikler2.splice(
        i,
        1,
        new Partikkel(randomGaussian(110, 7.45), 2.6, farge1)
      );
    }
  }

  // FEEDER //
  strokeWeight(15);
  stroke(0);
  translate(hoyre - 0.5 * buffer, width / 4);
  rotate(-PI / 12.0)
  rect(
    5,
    0,
    250,
    10,
    0.2
  );
}
