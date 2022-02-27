class Kloss {
  constructor(klosstype) {
    this.str = str;
    this.hjornex = 160;
    this.hjorney = -this.str;
    this.posisjoner = klosstype.posisjoner;
    this.farge = klosstype.farge;
    this.rotasjon = 0;
    this.kloss = this.posisjon();
    this.spokelse = this.posisjon();
    this.nestekloss = nestekloss;
  }

  tegn() {
    fill(this.farge);
    for (let i = 0; i < this.kloss.length; i++) {
      rect(this.kloss[i][0], this.kloss[i][1], this.str - 2, this.str - 2, 5);
    }
  }

  fall() {
    let krasjSjekk = this.hjorney;
    this.endreKloss(0,1,0);
    if (krasjSjekk == this.hjorney) { // sjekker om y posisjonen har blitt tilbakestilt, dvs at fallet resulterte i kollisjon
       this.nyKloss();
    } 
  }

  nyKloss() {
    brett.leggtil(kloss.kloss);
    brett.tegn();
    kloss = nestekloss;
    nestekloss = new Kloss(random(klossfigurer));
    if (kloss.kollisjon(brett.brett) == true) {
      scoreboard.gameOver = true;
    }
    brett.sjekkOgFjernFullRad();
  }

  kollisjon(klosspaabrett) {
    // sjekker om det klossen kolliderer med brett eller bunnen
    return (
      this.kollisjonmedbrett(klosspaabrett) == true ||
      this.kollisjonmedbunnogvegg() == true
    );
  }

  kollisjonmedbrett(klosspaabrett) {
    for (let i = 0; i < this.kloss.length; i++) {
      if (
        klosspaabrett[this.kloss[i][0] / str + (10 * this.kloss[i][1]) / str] ==
        true
      ) {
        return true;
      }
    }
  }

  kollisjonmedbunnogvegg() {
    for (let i = 0; i < this.kloss.length; i++) {
      if (
        this.kloss[i][1] >= hoyde ||
        this.kloss[i][0] < 0 ||
        this.kloss[i][0] >= bredde
      ) {
        return true;
      }
    }
  }

  posisjon() {
    // returnerer posisjonen til en kloss
    let temp = [];
    for (var koordinat of this.posisjoner[this.rotasjon]) {
      temp.push([
        this.hjornex + (koordinat % 4) * str,
        this.hjorney + floor(koordinat / 4) * str,
      ]);
    }
    return temp;
  }

  tegnSpokelse() {
    this.spokelsesprojeksjon();
    fill(100, 70);
    for (let i = 0; i < this.kloss.length; i++) {
      rect(
        this.spokelse[i][0],
        this.spokelse[i][1],
        this.str - 2,
        this.str - 2,
        5
      );
    }
  }

  spokelsesprojeksjon() {
    let tall = 0;
    while (this.kollisjon(brett.brett) != true) {
      this.hjorney += str;
      tall += str;
      this.kloss = this.posisjon();
    }
    this.hjorney -= str;
    tall -= str;
    this.spokelse = this.posisjon();
    this.hjorney -= tall;
    this.kloss = this.posisjon();
  }

  gameOver() {
    background(0, 210);
    textSize(60);
    stroke("red");
    fill("red");
    text("Spillet er over", 140, 400);
    textSize(36);
    text("Trykk   r   for å starte på nytt", 110, 450);
    noLoop();
  }

  endreKloss(xrettning, yrettning, rotasjonsretning) {
    if (scoreboard.gameOver == true || pausestatus == 1) {
      return;
    }
    this.hjornex += xrettning * this.str;
    this.hjorney += yrettning * this.str;
    this.rotasjon = (this.rotasjon + rotasjonsretning) % 4;
    this.kloss = this.posisjon();
    if (this.kollisjon(brett.brett) == true) {
      this.hjornex -= xrettning * this.str;
      this.hjorney -= yrettning * this.str;
      this.rotasjon = (this.rotasjon + 3 * rotasjonsretning) % 4;
      this.kloss = kloss.posisjon();
    }
  }
  tegnNesteKloss() {
    fill(nestekloss.farge);
    for (let i = 0; i < nestekloss.kloss.length; i++) {
      rect(
        bredde - 3 * str + nestekloss.kloss[i][0],
        2 * str + nestekloss.kloss[i][1],
        this.str - 2,
        this.str - 2,
        5
      );
    }
  }
}
