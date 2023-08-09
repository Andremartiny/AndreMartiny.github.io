let partisjoneringavsirkel = 360;
let canvashoyde = 720;
let canvasbredde = 720;
let trekantbredde = 75;
let trekanthoyde = 20;
let topplassering = 0.2 * canvashoyde;
let folgerlengde = 0.3 * canvashoyde;
let syklus = 0;
let linjevekt = 30;
let sentrum = [canvasbredde*0.5, (canvashoyde-topplassering- folgerlengde)+3*trekanthoyde+11*linjevekt/12];
  let sjekk = false;

function setup() {
  createCanvas(canvasbredde, canvashoyde);
}

function draw() {
  syklus = (syklus +1) % 360;
  background(255);
  strokeWeight(5);
  fill(200);
circle(sentrum[0], sentrum[1], 10)
  line(0, topplassering, canvasbredde * 0.5 - trekantbredde, topplassering);

  fill(0);
    // HER SKAL VI TEGNE FIGUREN. DA KOBLER VI HØYDE + VINKEL

  let skivedesign = []
  for (let i = 0; i < partisjoneringavsirkel; i++) {
    line(sentrum[0]+(canvashoyde*0.1+folgerhoyde[i])*cos(-2*PI*((syklus+i) % 360)/360), sentrum[1]+(canvashoyde*0.1+folgerhoyde[i])*sin(-2*PI*((syklus+i) % 360)/360), sentrum[0]+(canvashoyde*0.1+folgerhoyde[i+1])*cos(-2*PI*((syklus+i+1) % 360)/360), sentrum[1]+(canvashoyde*0.1+folgerhoyde[i+1])*sin(-2*PI*((syklus+i+1) % 360)/360));
    skivedesign.push([sentrum[0]+(canvashoyde*0.1+folgerhoyde[i])*cos(-2*PI*((syklus+i) % 360)/360), sentrum[1]+(canvashoyde*0.1+folgerhoyde[i])*sin(-2*PI*((syklus+i) % 360)/360)]);
  }
  if (sjekk == false)
    {
      console.log(skivedesign);
      sjekk = true;
    }
  /////////////////////////////////
  line(
    canvasbredde * 0.5 + trekantbredde,
    topplassering,
    canvasbredde,
    topplassering
  );
  strokeWeight(linjevekt);
  line(
    canvasbredde * 0.5,
    topplassering - folgerhoyde[syklus],
    canvasbredde * 0.5,
    topplassering - folgerhoyde[syklus] + folgerlengde
  );
  line(
    canvasbredde * 0.5 - trekantbredde,
    topplassering - folgerhoyde[syklus]-trekanthoyde/2,
    canvasbredde * 0.5 + trekantbredde,
    topplassering - folgerhoyde[syklus]-trekanthoyde/2
  );
  line(
    canvasbredde * 0.5 - trekantbredde,
    topplassering - folgerhoyde[syklus]-trekanthoyde/2,
    canvasbredde * 0.5,
    topplassering + trekanthoyde - folgerhoyde[syklus]-trekanthoyde/2
  );
  line(
    canvasbredde * 0.5 + trekantbredde,
    topplassering - folgerhoyde[syklus]-trekanthoyde/2,
    canvasbredde * 0.5,
    topplassering + trekanthoyde - folgerhoyde[syklus]-trekanthoyde/2
  );
  
}

let folgerhoyde = [];
for (let i = 0; i < 90; i++) {
  folgerhoyde.push(0);
}
for (let i = 0; i < 90; i++) {
  folgerhoyde.push((-2*(i/90)*(i/90)*(i/90) * (5 * trekanthoyde))+3*(i/90)*(i/90)* (5 * trekanthoyde));
}
for (let i = 0; i < 90; i++) {
  folgerhoyde.push(5 * trekanthoyde);
}
for (let i = 0; i < 90; i++) {
  folgerhoyde.push((-2*(1-i/90)*(1-i/90)*(1-i/90) * (5 * trekanthoyde))+3*(1-i/90)*(1-i/90)* (5 * trekanthoyde));
}
