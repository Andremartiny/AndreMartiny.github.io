class Scoreboard {
  constructor() {
    this.linjerFjerna = 0;
    this.nivå = 1;
    this.updates = 60 / this.nivå;
    this.gameOver = false;
    this.pause = 0;
  }

  tegn() {
    textSize(32);
    fill(255);
    text("Linjer fjerna: \n" + String(this.linjerFjerna), bredde + 20, 200);
    text("Nivå: \n" + String(this.nivå), bredde + 20, 350);
    textSize(18);
    fill(50);
    stroke(50);
    text("Trykk p for hjelp", bredde+50,hoyde-10);
  }

  SjekkogSettNyttNivå() {
    if (this.linjerFjerna % 10 == 0) {
      this.nivå += 1;
      this.updates = floor(60 / this.nivå);
    }
  }
}
