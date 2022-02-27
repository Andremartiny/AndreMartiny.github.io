function flyttogfyll() {
  let htmlbrett = document.getElementById("sudokubrett");
  for (let i = 0; i < 9; i++) {
    let sudokurad = htmlbrett.childNodes[2 * i + 1];
    for (let j = 0; j < 9; j++) {
      if (sudokurad.childNodes[2 * j + 1].childNodes[0].value != "") {
        brett[i][j] = parseInt(sudokurad.childNodes[2 * j + 1].childNodes[0].value);
      }
      else {
        brett[i][j] = 0;
      }
    }
  }
  brettkopi = kopier_brett();
  umulig = false;
  pause = 1;
}

// flyttogfyll();


