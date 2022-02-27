---
layout: post
title:  "Innstikksortering"
mathjax: true
hidden: true
permalink: /animasjoner/sortering/innstikk/
---

*Innstikksortering* er en sorteringsalgoritme som sorterer en liste i stigende rekkefølge. Algoritmen tar ett element av gangen, sammenlikner det med elementet til venstre og bytter plass på dem hvis de står feil i forhold til hverandre. Hvis det ikke er nødvendig å bytte plass på to elementer, kan vi med sikkerhet vite at lista frem til posisjonen vi startet med er sortert riktig. Prosessen gjentas helt til vi har vært gjennom alle elementene i lista. Videoen under illustrer hvordan algoritmen jobber seg gjennom en liste med tall.

<div class="centered-videoplayer">
<video width="720" height="480" controls  loop="true">
  <source src="/assets/sortering/insertion_sort/insert_sort.mp4">
</video>
</div>

Animasjonen under er en annen illustrasjon for hvordan algoritmen kan brukes for å sorterere en stolper i stigende rekkefølge. Trykk F5 for å starte animasjonen på nytt.

<div style="text-align:center;">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/addons/p5.sound.min.js"></script>
    <script src="/assets/sortering/insertion_sort/sketch.es6"></script>
    <div id="canvasForHTML"></div>
</div>