let pauseknapp = 1;
var button = document.getElementById("example-three");
button.addEventListener('click', function () {
  if (button.getAttribute("data-text-swap") == button.innerHTML) {
    button.innerHTML = button.getAttribute("data-text-original");
    pauseknapp = 1;
  } else {
    button.setAttribute("data-text-original", button.innerHTML);
    button.innerHTML = button.getAttribute("data-text-swap");
    pauseknapp = 0;
  }
}, false);


var button2 = document.getElementById("example-three231");
button2.addEventListener('click', function () {
  if (pauseknapp == 0) {
    button.innerHTML = button.getAttribute("data-text-original");
    pauseknapp = 1;
  }
}, false);

var slider = document.getElementById("myRange");
var output = document.getElementById("sudokuspan");
// output.innerHTML = slider.value;

slider.oninput = function () {
  // output.innerHTML = this.value;
  fps = this.value;
}

