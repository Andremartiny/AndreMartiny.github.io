---
layout: post
title:  "DFS Labyrint"
mathjax: true
hidden: true
permalink: /animasjoner/dfs/
---

Under kan du se en animasjon som konstruerer en labyrint ved hjelp "depth first search"-algoritmen. Animasjonen er konstruert ved hjelp av følgende pseudokode funnet på [Wikipedia](https://en.wikipedia.org/wiki/Maze_generation_algorithm#Iterative_implementation){:target="_blank"}:

{% highlight markdown %}
    1. Choose the initial cell, mark it as visited and push it to the stack
    2. While the stack is not empty
        1. Pop a cell from the stack and make it a current cell
        2. If the current cell has any neighbours which have not been visited
            1. Push the current cell to the stack
            2. Choose one of the unvisited neighbours
            3. Remove the wall between the current cell and the chosen cell
            4. Mark the chosen cell as visited and push it to the stack
{% endhighlight %}



<div style="text-align:center;">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/addons/p5.sound.min.js"></script>
    <script src="/assets/maze/depth_first/sketch.js"></script>
    <div id="canvasForHTML"></div>
</div>

