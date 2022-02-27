function keyPressed() {
  if (
    keyCode === LEFT_ARROW &&
    slange.kropp[1][0] != slange.kropp[0][0] - slange.str
  ) {
    slange.xret = -slange.str;
    slange.yret = 0;
  } else if (
    keyCode === RIGHT_ARROW &&
    slange.kropp[1][0] != slange.kropp[0][0] + slange.str
  ) {
    slange.xret = slange.str;
    slange.yret = 0;
  } else if (
    keyCode === DOWN_ARROW &&
    slange.kropp[1][1] != slange.kropp[0][1] + slange.str
  ) {
    slange.yret = slange.str;
    slange.xret = 0;
  } else if (
    keyCode === UP_ARROW &&
    slange.kropp[1][1] != slange.kropp[0][1] - slange.str
  ) {
    slange.yret = -slange.str;
    slange.xret = 0;
  }
}
