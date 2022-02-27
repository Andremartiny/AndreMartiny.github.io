class Slange {
  constructor(str) {
    this.str = str;
    this.kropp = [];
    for (let i = 0; i < 5; i++) {
      this.kropp.push([bredde / 4 + this.str / 2 - i * this.str, hoyde / 2]);
    }
    this.xret = this.str;
    this.yret = 0;
  }

  tegn() {
    fill(255);
    stroke(5);
    for (let i = 0; i < this.kropp.length; i++) {
      circle(this.kropp[i][0], this.kropp[i][1], this.str);
    }
  }
  flytthodet() {
    this.kropp[0][0] += this.xret;
    this.kropp[0][1] += this.yret;
    if (this.kropp[0][0] > bredde) {
      this.kropp[0][0] = this.str / 2;
    } else if (this.kropp[0][0] < 0) {
      this.kropp[0][0] = bredde - this.str / 2;
    } else if (this.kropp[0][1] < 0) {
      this.kropp[0][1] = hoyde - this.str / 2;
    } else if (this.kropp[0][1] > hoyde) {
      this.kropp[0][1] = 0 + this.str / 2;
    }
  }

  oppdater() {
    for (let i = this.kropp.length - 1; i > 0; i--) {
      this.kropp[i][0] = this.kropp[i - 1][0];
      this.kropp[i][1] = this.kropp[i - 1][1];
    }
    this.flytthodet();
  }
  voks() {
    this.kropp.push([-10, -10]);
  }

  dodssjekk() {
    for (let i = 1; i < this.kropp.length; i++) {
      if (
        this.kropp[0][0] == this.kropp[i][0] &&
        this.kropp[0][1] == this.kropp[i][1]
      ) {
        return true;
      }
    }
  }
}
