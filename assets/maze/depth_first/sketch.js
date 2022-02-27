// Taken from wiki
// Choose the initial cell, mark it as visited and push it to the stack
// While the stack is not empty
// Pop a cell from the stack and make it a current cell
// If the current cell has any neighbours which have not been visited
// Push the current cell to the stack
// Choose one of the unvisited neighbours
// Remove the wall between the current cell and the chosen cell
// Mark the chosen cell as visited and push it to the stack

let width = 20;
let hoyde = 600;
let bredde = 900;
let cellerixretning = bredde / width;
let celleriyretning = hoyde / width;
let colors = ["#03071e","#370617","#6a040f","#9d0208","#d00000","#dc2f02","#e85d04","#f48c06","#faa307","#ffba08"]
 //["#88DEB0", "#69C6AF", "#4EADAF", "#377A98", "#244A80", "#152069"]

let celler = [];
// initialize a stack
let stack = [];

function setup() {
  var canvas = createCanvas(900, 600);
  canvas.parent("canvasForHTML");
  stroke(255);
  frameRate(60);
  rectMode(CORNER);
}

function draw() {
  background(0);
  for (let y = 0; y < celleriyretning; y++) {
    for (let x = 0; x < cellerixretning; x++) {
      if (celler[y][x].visited) {
          
        celler[y][x].draw();
      }
    }
  }

  fill("#ffadad");
  strokeWeight(0);
  rect(currentCell.x, currentCell.y, width, width);
  
  // While the stack is not empty
  if (stack.length != 0) {
    // Pop a cell from the stack and make it a current cell
    currentCell = stack.pop();
    currentCell.timesVisited += 1;
    // If the current cell has any neighbours which have not been visited
    if (currentCell.returnUnvisitedNeighboors().length > 0) {
      // Push the current cell to the stack
      stack.push(currentCell);
      // Choose one of the unvisited neighbours
      let nextCell = random(currentCell.returnUnvisitedNeighboors());
      // Remove the wall between the current cell and the chosen cell
      currentCell.walls[nextCell] = false;
      if (nextCell % 2 == 0) {
        currentCell =
          celler[int(currentCell.y / width) - 1 + nextCell][
            int(currentCell.x / width)
          ];
        currentCell.walls[(nextCell + 2) % 4] = false;
      } else {
        currentCell =
          celler[int(currentCell.y / width)][
            int(currentCell.x / width) - nextCell + 2
          ];
        currentCell.walls[(nextCell + 2) % 4] = false;
      }
      // Mark the chosen cell as visited and push it to the stack
      currentCell.visited = true;
    //   currentCell.timesVisited += 1;
      stack.push(currentCell);
    }
  }
}

class Cell {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.visited = false;
    this.timesVisited = 0;
    this.walls = [true, true, true, true];
  }
  draw() {
    strokeWeight(0);
    fill(158, 231, 245, 80-  this.timesVisited*12);
    rect(this.x, this.y, this.width-1, this.width-1);
    strokeWeight(5);
    stroke("#52b788");
    if (this.walls[0] == true) {
      line(this.x, this.y, this.x + this.width, this.y);
    }
    if (this.walls[1] == true) {
      line(
        this.x + this.width,
        this.y,
        this.x + this.width,
        this.y + this.width
      );
    }
    if (this.walls[2] == true) {
      line(
        this.x + this.width,
        this.y + this.width,
        this.x,
        this.y + this.width
      );
    }
    if (this.walls[3] == true) {
      line(this.x, this.y + this.width, this.x, this.y);
    }
  }
  returnNeighboors() {
    let directions = [];
    if (this.y > 0) {
      directions.push(0);
    }
    if (this.x < bredde-width) {
      directions.push(1);
    }
    if (this.y < hoyde-width) {
      directions.push(2);
    }
    if (this.x > 0) {
      directions.push(3);
    }
    return directions;
  }

  returnUnvisitedNeighboors() {
    let neighboors = this.returnNeighboors();
    let visitedNeighboors = [];
    for (let neighboor of neighboors) {
      if (neighboor % 2 == 0) {
        if (
          celler[int(this.y / width) - 1 + neighboor][int(this.x / width)]
            .visited == false
        ) {
          visitedNeighboors.push(neighboor);
        }
      } else {
        if (
          celler[int(this.y / width)][int(this.x / width) - neighboor + 2].visited ==
          false
        ) {
          visitedNeighboors.push(neighboor);
        }
      }
    }
    return visitedNeighboors;
  }
}

for (let y = 0; y < celleriyretning; y++) {
  let dummy = [];
  for (let x = 0; x < cellerixretning; x++) {
    dummy.push(new Cell(x * width, y * width, width));
  }
  celler.push(dummy);
}

// Choose the initial cell, mark it as visited and push it to the stack
let currentCell = celler[20][20];
stack.push(currentCell);
// Mark the current cell as visited
currentCell.visited = true;
