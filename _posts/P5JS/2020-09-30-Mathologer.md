---
layout: post
title:  "Modulær multiplikasjon"
mathjax: true
hidden: true
permalink: /animasjoner/P5JS/modular_multiplikasjon/
---

Under er en animasjon inspirert av en <a href="https://www.youtube.com/watch?v=qhbuKbxJsk8&ab_channel=Mathologer" target="_blank" >YouTube video </a> av Burkard Polster. 


<iframe src="https://editor.p5js.org/AndreMartiny/embed/8TJxwkhib" width="600" height="600" frameBorder="0"></iframe>


<details>
<summary>Se koden her</summary>
<p>

{% highlight js linenos%}
let faktor = 0.0;
let antall = 150;
let radius;
let sentrum;
let lengde = 13;
let nevner = 20;


function setup() {
  createCanvas(600, 600);
  radius = width / 2 - 10;
  sentrum = [width / 2, height / 2];
  textSize(32);
}

function draw() {
  colorMode(HSB);
  background(0);

  noFill();

  stroke(255);
  strokeWeight(6);
  circle(width / 2, height / 2, radius * 2);
  for (let i = 0; i < antall; i++) {
    stroke(i * 255 / antall, 100, 60)
    line(sentrum[0] + radius * cos(i * 2 * PI / antall),
      sentrum[1] + radius * sin(i * 2 * PI / antall),
      (sentrum[0] + radius * cos(i * 2 * PI / antall)) * (lengde / nevner) +
      (sentrum[0] + radius * cos((faktor * i * 2 * PI / antall) % antall)) * (nevner - lengde) / nevner,
      (sentrum[1] + radius * sin(i * 2 * PI / antall)) * (lengde / nevner) +
      (sentrum[1] + radius * sin((faktor * i * 2 * PI / antall) % antall)) * (nevner - lengde) / nevner);
  }
  faktor += 0.02
}
{% endhighlight %}
</p>
</details>