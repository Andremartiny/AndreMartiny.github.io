class Partikkel {
  constructor(diameter, tetthet, color, x, y, fart) {
    this.x = x || hoyre - 0.2 * buffer;
    this.y = y || width / 4 + 0.8 * buffer;
    this.fart = fart || random(2.5, 19);
    this.xfart = -this.fart;
    this.diameter = diameter;
    this.tetthet = tetthet;
    this.color = color;
    this.yfart =
      ((4 * this.tetthet) / 2.6) *
      Math.sqrt(this.diameter) *
      Math.sqrt(5 / 3) *
      0.05;
    this.bunn = false;
  }

  bevegelse() {
    // if (this.x <= venstre) {
    //   this.xfart = this.fart;
    // } else
    if (
      (-2 / 4) * this.x + this.y + 7 >=
      (3 / 4) * height - (2 / 4) * venstre
    ) {
      this.bunn = true;
      this.xfart = (3 / 4) * this.yfart;
    }
    // else if (this.x >= hoyre) {
    //   this.xfart = -1 * this.fart;
    // }
    else if (
      (2 / 4) * this.x + this.y + 6 >=
      (3 / 4) * height + (2 / 4) * hoyre
    ) {
      this.bunn = true;
      this.xfart = ((-1 * 3) / 4) * this.yfart;
    }
    if (this.bunn == false) {
      this.x += this.xfart;
      this.xfart *= 0.938;
      this.y +=
        2.3 *
        // Math.sign(this.yfart - strom) *
        // Math.sqrt(Math.sqrt(Math.sqrt(Math.abs(this.yfart - strom))));
        Math.sign(this.yfart - strom) *
        Math.sqrt(Math.sqrt(Math.sqrt(Math.abs(this.yfart - strom))));
    } else {
      this.x += this.xfart;
      this.y += (7 / 18) * this.yfart;
    }
  }

  vis() {
    strokeWeight(0);
    fill(this.color);
    ellipse(
      this.x,
      this.y,
      (this.diameter / 110) * 5,
      (this.diameter / 110) * 5
    );
  }
}
