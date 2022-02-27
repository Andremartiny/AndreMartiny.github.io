class Eple {
  constructor(str) {
    this.str = str;
    this.x = floor(random(0, bredde / this.str)) * this.str + this.str / 2;
    this.y = floor(random(0, hoyde / this.str)) * this.str + this.str / 2;
  }

  tegn() {
    stroke(0, 255, 0);
    fill(0, 255, 0);
    rect(this.x, this.y, this.str, this.str, 5);
  }
}
