---
layout: post
title:  "Boblesortering"
mathjax: true
hidden: true
permalink: /animasjoner/sortering/boble/
---

*Boblesortering* er en enkel sorteringsalgoritme som går inn i en liste, sammenlikner naboelementer og bytter plass på dem hvis de står feil i forhold til hverandre. Algoritmen gjentas helt til lista er sortert. Videoen under illustrer hvordan algoritmen jobber seg gjennom en liste med tall for å sortere dem i stigende rekkefølge.

<div class="centered-videoplayer">
<video width="720" height="480" controls  loop="true">
  <source src="/assets/sortering/bubble_sort/Boblesort.mp4">
</video>
</div>

Under er en animasjon som viser hvordan algoritmen sorterer en tilfeldig liste av stolper i stigende rekkefølge. Trykk F5 for å starte animasjonen på nytt.

<div style="text-align:center;">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/addons/p5.sound.min.js"></script>
    <script src="/assets/sortering/bubble_sort/sketch.es6"></script>
    <div id="canvasForHTML"></div>
</div>

<div class="sudokuoverlay">
<button class ='button sudokubutton' onclick="unpause()" id="example-three" data-text-swap="Pause" data-text-original="Start"><span>Start</span></button>
<button class ='button sudokubutton' onclick="restart()" id="example-three321" ><span>Restart</span></button>
 </div>
 <script src="/assets/sortering/bubble_sort/buttonstyle.js"></script>
<!-- onclick='heronstext()' -->