let bredde = 940;
let høyde = 400;
let potens = 5;
let antall = 2 ** potens;
let søyler = [];
let buffer = bredde / antall / 2;
let linjebredde = bredde / antall;
let counter = 0;
let nivå = 0;
let referencearray = [];
let sorteringsarray = [];
let antallSammenligninger = antall / 2;
let nestelistedelay = 0;
let pause = 1;

function setup() {
  var canvas = createCanvas(bredde, høyde);
  canvas.parent("canvasForHTML");
  frameRate(5);
}

function draw() {
  background(0);
  tegnsøyler();
  if (pause == 0) {
    byttsøyler(nivå, counter);
    counter++;
    if (counter == antall) {
      nivå++;
      counter = 0;
    }
    if (nivå == potens) {
      background(0);
      counter = -1;
      tegnsøyler();
      redraw();
      pause = 1;
    }
  }
}
function tegnsøyler() {
  let størrlesepålistene = 2 ** (nivå + 1);
  let indeksIlisten = counter % størrlesepålistene;
  let listeindeks = (counter - indeksIlisten) / størrlesepålistene;
  for (let i = 0; i < antall; i++) {
    stroke(47, 214, 136);
    if (
      i >= listeindeks * størrlesepålistene &&
      i < (listeindeks + 1) * størrlesepålistene
    ) {
      stroke("blue");
      if (i == counter) {
        stroke("red");
      }
    }
    strokeWeight(linjebredde * 0.95);
    line(
      linjebredde * i + buffer,
      height,
      linjebredde * i + buffer,
      height - søyler[i] * 1.5 * 4
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

for (let i = 0; i < antall; i++) {
  dummyarray = [søyler[i]];
  referencearray.push(dummyarray);
}
sorteringsarray.push(referencearray);

function create_merged_array(listoflists, listlength) {
  let dummyarray = [];
  for (let j = 0; j < listlength / 2; j++) {
    dummyarray.push(merge(listoflists[2 * j], listoflists[2 * j + 1]));
  }
  return dummyarray;
}

function create_merging_history() {
  for (let i = 0; i < potens; i++) {
    sorteringsarray.unshift(
      create_merged_array(sorteringsarray[0], sorteringsarray[0].length)
    );
  }
}

function merge(arr1, arr2) {
  let len1 = arr1.length;
  let len2 = arr2.length;
  let sortert = [];
  let indeksvenstre = 0;
  let indekshøyre = 0;
  for (let i = 0; i < len1 + len2; i++) {
    if (arr1.length - indeksvenstre > 0 && arr2.length - indekshøyre > 0) {
      if (arr1[indeksvenstre] <= arr2[indekshøyre]) {
        sortert.push(arr1[indeksvenstre]);
        indeksvenstre++;
      } else {
        sortert.push(arr2[indekshøyre]);
        indekshøyre++;
      }
    } else if (arr1.length - indeksvenstre > 0) {
      sortert.push(arr1[indeksvenstre]);
      indeksvenstre++;
    } else {
      sortert.push(arr2[indekshøyre]);
      indekshøyre++;
    }
  }
  return sortert;
}

create_merging_history();

function byttsøyler(level, teller) {
  let størrlesepålistene = 2 ** (level + 1);
  let indeksIlisten = teller % størrlesepålistene;
  let listeindeks = (teller - indeksIlisten) / størrlesepålistene;
  søyler[teller] =
    sorteringsarray[potens - level - 1][listeindeks][indeksIlisten];
}

function unpause() {
  pause = (pause + 1) % 2;
}

function restart() {
  søyler = shufflearray(søyler);
  referencearray = [];
  sorteringsarray = [];
  for (let i = 0; i < antall; i++) {
    dummyarray = [søyler[i]];
    referencearray.push(dummyarray);
  }
  sorteringsarray.push(referencearray);
  create_merging_history();
  nivå = 0;
  counter = 0;
  sorterte = 0;
  pause = 1;
}

// function merge_sort(array) {
//     let venstre;
//     let høyre;
//     let lengde = array.length;
//     let midtpunkt = Math.floor(lengde / 2);
//     let resultat;
//     if (lengde <= 1) {
//       return array;
//     }
//     venstre = merge_sort(array.slice(0, midtpunkt));
//     høyre = merge_sort(array.slice(midtpunkt));
//     resultat = merge(venstre, høyre);
//     return resultat;
//   }

// function merge(arr1, arr2) {
//     let len1 = arr1.length;
//     let len2 = arr2.length;
//     let sortert = [];
//     let indeksvenstre = 0;
//     let indekshøyre = 0;
//     for (let i = 0; i < len1 + len2; i++) {
//       if (arr1.length > 0 && arr2.length > 0) {
//         if (arr1[0] <= arr2[0]) {
//           sortert.push(arr1[0]);
//           arr1.shift();
//         } else {
//           sortert.push(arr2[0]);
//           arr2.shift();
//         }
//       } else if (arr1.length > 0) {
//         sortert.push(arr1[0]);
//         arr1.shift();
//       } else {
//         sortert.push(arr2[0]);
//         arr2.shift();
//       }
//     }
//     return sortert;
//   }
