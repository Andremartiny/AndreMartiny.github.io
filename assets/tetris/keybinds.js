// Måtte bruke eventlistener fordi innebygd Keypressed i p5js ikke hadde x og z
document.addEventListener("keydown", (event) => {
  if ([32, 37, 38, 39, 40, 80, 82, 90, 88].includes(event.keyCode)) {
    event.preventDefault();
  }
  switch (event.keyCode) {
    // Space
    case 32:
      // whileloop som flytter ned så langt som mulig
      if (scoreboard.gameOver == true || pausestatus == 1) {
        break;
      }
      while (kloss.kollisjon(brett.brett) != true) {
        kloss.hjorney += str;
        kloss.kloss = kloss.posisjon();
      }
      kloss.hjorney -= str;
      kloss.kloss = kloss.posisjon();
      kloss.fall();
      break;

    // Down arrow
    case 40:
      kloss.fall();
      break;

    // Left arrow
    case 37:
      retningx = -1;
      retningy = 0;
      rotasjonsendring = 0;
      kloss.endreKloss(retningx, retningy, rotasjonsendring);
      break;

    // Right Arrow
    case 39:
      retningx = 1;
      retningy = 0;
      rotasjonsendring = 0;
      kloss.endreKloss(retningx, retningy, rotasjonsendring);
      break;

    // z
    case 90:
      retningx = 0;
      retningy = 0;
      rotasjonsendring = 3;
      kloss.endreKloss(retningx, retningy, rotasjonsendring);
      break;

    // Up arrow
    case 38:
      retningx = 0;
      retningy = 0;
      rotasjonsendring = 1;
      kloss.endreKloss(retningx, retningy, rotasjonsendring);
      break;
    // x
    case 88:
      retningx = 0;
      retningy = 0;
      rotasjonsendring = 1;
      kloss.endreKloss(retningx, retningy, rotasjonsendring);
      break;

    // p for pause
    case 80:
      pausestatus = (pausestatus + 1) % 2;
      pause();
      break;

    // r for restart
    case 82:
      restart();
      break;
  }
});
