---
layout: post
title:  "Hypersykloide"
mathjax: true
hidden: true
permalink: /animasjoner/P5JS/hypersykloide/
---
I dette eksempelet skal vi forklare hvordan vi har gått frem for å lage animasjonen du ser under. Figuren som genereres er inspirert av en *hypersykloide* hvor den innerste sirkelen ikke nødvendigvis «ruller» på den ytterste sirkelen. Ved å trykke på animasjonene i de fire stegene blir du sendt til en ekstern side ([P5JS](https://editor.p5js.org/)) hvor koden er laget, slik at du kan se og eventuelt endre på koden.

<!-- TODO: Legg inn hyperlenker til p5js på bildene.  -->

<a href="https://editor.p5js.org/AndreMartiny/sketches/tx3G8YCT6" target="_blank" ><img src="/assets/images/Rullende-sirkler/utenstoy.gif"  > </a>

 
Bak animasjonen ligger det skjult en veldig enkel idé. Animasjonen får vi ved å følge et punkt på en liten sirkel som ruller rundt i en større sirkel: 

<a href="https://editor.p5js.org/AndreMartiny/sketches/2nAFMnBzI" target="_blank" ><img src="/assets/images/Rullende-sirkler/rullmedtrace.gif" width="50%"> </a>

## Steg 1: 
<!-- TODO: Denne gifen stemmer ikke med Steg 2 -- Steg 4  -->
Vi begynner med å animere et punkt som bever seg rundt sirkelperiferien.
<a href="https://editor.p5js.org/uia-mn/sketches/lc7zWqdzl" target="_blank" > <img  src="/assets/images/Rullende-sirkler/dotmedtrace.gif" width="50%" > </a>

<details>
Denne koden er skrevet i JavaScript.
 
<summary>Se kode:</summary>
{% highlight javascript linenos %}

let tid = 0; // Setter tid til en variabel
let l = 400; // Lengde på lerret
let b = 400; // bredde på lerret
let radius = (l / 2) * 0.8; // radius til sirkelen

function setup() { // Denne koden kjøres en gang for å lage lerretet vår
  createCanvas(l, b);
}

function draw() {
  background(0); // setter bakgrunnen sort
  noFill(); // nofill 
  strokeWeight(4); // setter tykkelse på linjer
  stroke("blue"); // setter farge på linjene
  circle(l / 2, b / 2, radius * 2); // lager en sirkel
  noStroke(); // fjerner linje langs kanter av figurer
  fill(255); // fyller figurer helt hvite
  circle(l / 2 + radius * cos(tid), b / 2 + radius * sin(tid), 10); // lager sirkel
  tid += 0.01 // økter tiden med 0.01. Dette gjør at punktet vårt vil rotere.
}
{% endhighlight %}
 

</details>



## Steg 2:

Vi ønsker nå å ta idéen fra steg 1 til å animere en sirkel som ruller rundt i sirkelen, med ett punkt som er markert. 

<a href="https://editor.p5js.org/AndreMartiny/sketches/uX7lQzMFY" taget="_blank"><img src="/assets/images/Rullende-sirkler/rullendesirkel.gif" width="50%"></a>




<details>
Denne koden er skrevet i JavaScript.
 
<summary>Se kode:</summary>
{% highlight javascript linenos %}

let tid = 0;
let l = 400;
let b = 400;
let radius = 150; // radius til store sirkel
let r2 = 75; // radius til lille sirkel
let forhold = radius / r2; // Hvor mange runder tar lille sirkelen hvis den ruller rundt 

function setup() {
  createCanvas(l, b);
  
}


function draw() {
  background(0);
  noFill(255);
  strokeWeight(4);
  stroke("blue");
  circle(l / 2, b / 2, radius * 2);
  stroke(100, 160, 60)
  strokeWeight(3);
  circle(l / 2 + (radius - r2) * cos(tid), b / 2 + (radius - r2) * sin(tid), r2 * 2);
  strokeWeight(3);

  stroke("red")
  circle(l / 2 + (radius - r2) * cos(tid) + r2 * cos(-(forhold +1) * tid), b / 2 + (radius - r2) * sin(tid) + r2 * sin(-(forhold +1) * tid),5)

  tid += 0.01
}
{% endhighlight %}


</details>


## Steg 3:

For å lage animasjonen trenger vi å spore stien som punktet lager. Det er dette vi har gjort under.

<a href="https://editor.p5js.org/AndreMartiny/sketches/2nAFMnBzI" target="_blank" ><img src="/assets/images/Rullende-sirkler/rullendesirkelmedtrace.gif" > </a>



<details>
Denne koden er skrevet i JavaScript.
 
<summary>Se kode:</summary>
{% highlight javascript linenos %}
let tid = 0;
let l = 400;
let b = 400;
let radius = 150; // radius til store sirkel
let r2 = 75; // radius til lille sirkel
let forhold = radius / r2; // Hvor mange runder tar lille sirkelen hvis den ruller rundt 
let trace = [];

function setup() {
  createCanvas(l, b);
  
}


function draw() {
  background(0);
  noFill(255);
  strokeWeight(4);
  stroke("blue");
  circle(l / 2, b / 2, radius * 2);
  stroke(100, 160, 60)
  strokeWeight(3);
  circle(l / 2 + (radius - r2) * cos(tid), b / 2 + (radius - r2) * sin(tid), r2 * 2);
  strokeWeight(3);
  for (i of trace) {
    stroke(255,107,6,255-(tid-i)*100*255/500);
    color(255,107,6,255-(tid-i)*100*255/500);
    circle(l / 2 + (radius - r2) * cos(i) + r2 * cos(-(forhold +1) * i), b / 2 + (radius - r2) * sin(i) + r2 * sin(-(forhold +1) * i), 1);
    
  }
  stroke("red")
  circle(l / 2 + (radius - r2) * cos(tid) + r2 * cos(-(forhold +1) * tid), b / 2 + (radius - r2) * sin(tid) + r2 * sin(-(forhold +1) * tid),5)
  trace.unshift(tid);
  if (trace.length>500) {
    trace.pop()
  }
  tid += 0.01
}

{% endhighlight %}


</details>



## Steg 4:

Til slutt vil vi fjerne alt unøvendig støy, og kun la sporet være igjen. Det gir følgende animasjon.

<a href="https://editor.p5js.org/AndreMartiny/sketches/tx3G8YCT6" target="_blank" ><img src="/assets/images/Rullende-sirkler/utenstoy.gif"  > </a>


<details>
Denne koden er skrevet i JavaScript.
 
<summary>Se kode:</summary>
{% highlight javascript linenos %}

let tid = 0;
let l = 400;
let b = 400;
let radius = 150; // radius til store sirkel
let r2 = 75; // radius til lille sirkel
let forhold = radius / r2; // Hvor mange runder tar lille sirkelen hvis den ruller rundt 
let trace = [];

function setup() {
  createCanvas(l, b);
}

function draw() {
  background(0);
  noFill(255);
  strokeWeight(4); 
  strokeJoin(ROUND);
  for (let i = 1; i < trace.length; i++) {
    stroke(255,107,6,255-(tid-trace[i])*100*255/650);
    line(l / 2 + (radius - r2) * cos(trace[i-1]) + r2 * cos(-(forhold +1) * trace[i-1]), b / 2 + (radius - r2) * sin(trace[i-1]) + r2 * sin(-(forhold +1) * trace[i-1]), l / 2 + (radius - r2) * cos(trace[i]) + r2 * cos(-(forhold +1) * trace[i]), b / 2 + (radius - r2) * sin(trace[i]) + r2 * sin(-(forhold +1) * trace[i]));  
  }
  trace.unshift(tid);
  if (trace.length>400) {
    trace.pop()
  }
  tid += 0.04*2*PI/6
}

{% endhighlight %}


</details>

<br>

### Ekstra: Her har vi plottet høyden til punktet som grafen til en funksjon \\( f(t) \\). 
Dette kan for eksempel være en måte å illustrere hvordan resultatet blir hvis vi kombinerer trigonometriske funksjoner.

<a href="https://editor.p5js.org/AndreMartiny/sketches/z44hGguSka" target="_blank"> <img src="/assets/images/Rullende-sirkler/graf1.gif" > </a>



### Ekstra: Her har vi fortsatt med flere rullende sirkler inne i hverandre.
<img src="/assets/images/Rullende-sirkler/output.gif" width="50%">
