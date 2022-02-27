---
layout: post
title:  "Flettesortering"
mathjax: true
hidden: true
permalink: /animasjoner/sortering/flette/
---

*Flettesortering* er en algoritme for å sortere mengder som går under [splitt og hersk algoritmer](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm#:~:text=In%20computer%20science%2C%20divide%20and,enough%20to%20be%20solved%20directly.){:target="_blank"}. 

Videoen under illusterer algoritmen. Her starter vi med en usortert liste på 4 elementer. Deretter brytes listen ned til lister med størrelse 1 og så flettes listene systematisk sammen til sorterte lister. Flettingen foregår ved å sammenlikne elementene fra to lister og sortere dem i stigende rekkefølge.

<div class="centered-videoplayer">
<video width="720" height="480" controls  loop="true">
  <source src="/assets/sortering/merge_sort/merge_sort.mp4">
</video>
</div>

Under er en animasjon som viser hvordan algoritmen sorterer en tilfeldig liste av stolper i stigende rekkefølge.


<div style="text-align:center;">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/addons/p5.sound.min.js"></script>
    <script src="/assets/sortering/merge_sort/sketch.es6"></script>
    <div id="canvasForHTML"></div>
</div>


<div class="sudokuoverlay">
<button class ='button sudokubutton' onclick="unpause()" id="example-three" data-text-swap="Pause" data-text-original="Start"><span>Start</span></button>
<button class ='button sudokubutton' onclick="restart()" id="example-three321" ><span>Restart</span></button>
 </div>
 <script src="/assets/sortering/bubble_sort/buttonstyle.js"></script>