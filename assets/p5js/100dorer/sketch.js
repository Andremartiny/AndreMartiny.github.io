// DEFINERER
let dører = 100;
let array = [];
let størrelse = 20;
// FAKTOR OG SKALAR BRUKES FOR Å GÅ GJENNOM DØRENE/LYSPÆRENE.
// FAKTOR TILSIER HVILKEN FAKTOR VI GÅR GJENNOM
// SKALAR TILSIER HVOR VI ER I FAKTOR-GANGEN (faktor*skalar gir index på dør)
let faktor = 1;
let skalar = 1;
// STATES
let savestate = [];
let pausestate = 0;
let antall_rader_som_vises = 0;
let bulbOn;
let bulbOff;
let slider;
let løkke = true;
function preload() {
  bulbOn = loadImage("/assets/p5js/100dorer/Png/bulb_on.png");
  bulbOff = loadImage("/assets/p5js/100dorer/Png/bulb_off.png");
}

// SETUPFUNKSJONEN (DEL AV P5JS)
function setup() {
  let canvas = createCanvas(1900, 900);
  canvas.parent("canvasForHTML");
  //   DEFINERER EN ARRAY MED TO-DELT INFO: (INDEX PÅ DØR, STATUS PÅ LYS)
  for (i = 1; i < dører + 1; i++) {
    array.push([i, 0]);
  }
  //   FIKSER INSTILLINGER
  textSize(9);
  frameRate(5);
  slider = createSlider(1, 60, 20, 1);
  slider.position(20, height - 20);
  slider.style("120px", "40px");
  noLoop();
}

// HER SKJER TEGNINGEN (DEL av P5JS)
function draw() {
  //   Endrer fps-basert på slideren
  frameRate(slider.value());
  background(220);
  fill(0);
  //   Går inn i array på index skalar*faktor-1, der vil vi endre status på lyspæren. Redefinerer derfor ved å øke med 1 mod 2.
  if (faktor <= dører) {
    array[skalar * faktor - 1][1] = (array[skalar * faktor - 1][1] + 1) % 2;
  }
  // Tegner lyspærene. Looper gjennom antall dører:
  for (i = 0; i < dører; i++) {
    text(i + 1, 5 + (47 * i) / 2.5, 28 + 5.1);
    //     Hvis status til en dør er 0 er pæren av. Dette sjekkes av if-vilkåret
    if (array[i][1] == 0) {
      image(bulbOff, 0 + (47 * i) / 2.5, 2, størrelse, størrelse);
    } else {
      //       Hvis status ikke er 0 (da er den såklart 1), og pæren er på.
      image(bulbOn, 0 + (47 * i) / 2.5, 2, størrelse, størrelse);
    }
  }
  // Vilkår for hvor langt vi er kommet i algoritmen. Hvis faktoren == dører er vi ferdig
  if (faktor == dører) {
    savestate.push(structuredClone(array));
    faktor += 1;
    antall_rader_som_vises = antall_rader_som_vises + 1;
  } else if (faktor >= dører) {
    noLoop();
  }
  //   Hvis (skalar + 1)*faktor > dører vil vi gå forbi antall dører, vi må derfor øke faktoren. Dermed må skalar også resettes til 1.
  else if ((skalar + 1) * faktor > dører) {
    skalar = 1;
    faktor += 1;
    antall_rader_som_vises = antall_rader_som_vises + 1;
    //     Lagrer instilling av pærene i en savestate slik at de kan tegnes ved senere tidspunkt
    savestate.push(structuredClone(array));
  }
  //   Hvis vi ikke er ferdig, og vi ikke går forbi antall dører, går vi til neste dør i faktor-gangen.
  else {
    skalar += 1;
  }
  //   Går gjennom savestaten og tegner de under pærene som sirkler.
  for (j = 0; j < antall_rader_som_vises; j++) {
    for (i = 0; i < dører; i++) {
      if (savestate[j][i][1] == 0) {
        fill(0);
        circle(10 + (47 * i) / 2.5, 5 + 35 + (15 * j) / 1.8, størrelse / 4 + 2);
      } else {
        fill(250, 250, 0);
        circle(10 + (47 * i) / 2.5, 5 + 35 + (15 * j) / 1.8, størrelse / 4 + 2);
      }
    }
  } 
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && antall_rader_som_vises > 0) {
    antall_rader_som_vises = antall_rader_som_vises - 1;
    redraw();
  } else if (
    keyCode === RIGHT_ARROW &&
    antall_rader_som_vises < savestate.length
  ) {
    antall_rader_som_vises = +antall_rader_som_vises + 1;
    redraw();
  } else if (keyCode === 32) {
    pausestate = (pausestate + 1) % 2;
    if (pausestate == 0) {
      antall_rader_som_vises = savestate.length;
      loop();
    } else {
      noLoop();
    }
  }
}
