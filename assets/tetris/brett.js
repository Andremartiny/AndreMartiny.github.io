class Brett {
  constructor() {
    this.str = str;
    this.brett = [];
    // Brettet har verdier fra 0 til 200. Dette kan omgjøres til 10x20 koordinater ved f.eks (2,5) <---> 2+5*10
    for (let entry = 0; entry < 200; entry++) {
      this.brett.push(false);
    }
  }

  tegn() {
    fill("grey");
    strokeWeight(0.5);
    for (let verdi = 0; verdi < 200; verdi++) {
      if (this.brett[verdi] == true) {
        rect(
          (verdi % 10) * str,
          floor(verdi / 10) * str,
          this.str - 2,
          this.str - 2,
          5
        );
      }
    }
  }
  // Brettet har verdier fra 0 til 200. Dette kan omgjøres til 10x20 koordinater ved f.eks (2,5) <---> 2+5*10
  // Det er dette som gjøres under
  leggtil(kloss) {
    for (let i = 0; i < kloss.length; i++) {
      this.brett[kloss[i][0] / str + (10 * kloss[i][1]) / str] = true;
    }
  }

  tegnRutenett(b, s) {
    strokeWeight(0.2);
    stroke(255);
    for (let i = 1; i < b; i++) {
      line(i * str, 0, i * str, hoyde);
    }
    for (let i = 1; i < s; i++) {
      line(0, i * str, b*str, i * str);
    }
    strokeWeight(3);
    line(b*str+2,0,b*str+2, s*str);
    line(0,0,0, s*str);
  }

  erRadenFull(rad) {
    for (let kolonne = 0; kolonne < 10; kolonne++) {
      if (this.brett[rad * 10 + kolonne] == false) {
        return false;
      }
    }
    // er alle kolonnene okkupert, vil if statementet alltid være falsk, og dermed kommer vi forbi loopen
    return true;
  }

  fjernRad(rad) {
    this.brett.splice(10 * rad, 10);
    for (let kolonne = 0; kolonne < 10; kolonne++) {
      this.brett.unshift(false);
    }
  }

  sjekkOgFjernFullRad() {
    for (let rad = 0; rad < 20; rad++) {
      if (this.erRadenFull(rad) == true) {
        this.fjernRad(rad);
        scoreboard.linjerFjerna += 1;
        scoreboard.SjekkogSettNyttNivå();
      }
    }
  }

}
