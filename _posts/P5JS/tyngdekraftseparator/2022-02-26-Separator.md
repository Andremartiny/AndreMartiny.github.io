---
layout: post
title:  "Tyngdekraftseparator"
mathjax: true
hidden: true
permalink: /animasjoner/separator/
---

Under kan du se en animasjon som konstruerer en labyrint ved hjelp "depth first search"-algoritmen. Animasjonen er konstruert ved hjelp av følgende pseudokode funnet på [Wikipedia](https://en.wikipedia.org/wiki/Maze_generation_algorithm#Iterative_implementation){:target="_blank"}:





<div style="text-align:center;">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/addons/p5.sound.min.js"></script>
    <script src="/assets/p5js/tyngdekraftseparator/partikkel.js"></script> 
    <script src="/assets/p5js/tyngdekraftseparator/sketch.js"></script> 
    <div id="canvasForHTML"></div>
</div>

<div class="slidecontainer">
  <input type="range" min="1" max="4" step ="0.001" value="1" class="slider" id="myRange"  style= "width: 100%">
</div>
 <p id = "slider-tekst-sudoku">Vannstrømm<span id="sudokuspan"></span></p>
<script src="/assets/p5js/tyngdekraftseparator/slider.js"></script> 

