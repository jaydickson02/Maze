
//Maze Generation Variables
var mazeDimensions = {
  x:30,
  y:30
};

var cellScale = 15;

var run = false; //fix this just for testing

var player1;
var endCell;
var startCell;

function setup() {

//Set framerate
frameRate(1000);

//Create canvas that can fit the maze
createCanvas(mazeDimensions.x * cellScale + 1, mazeDimensions.y * cellScale + 1);

}


function draw() {
//background(255);


  //Draw the maze cells

  for (var i = 0; i < cellsInMaze.length; i++) {

    fill(255);
    rect(cellsInMaze[i].x * cellScale, cellsInMaze[i].y * cellScale, cellScale, cellScale);

    //Draw Walls

      var x = cellsInMaze[i].x * cellScale;
      var y = cellsInMaze[i].y * cellScale;

      if(cellsInMaze[i].walls.t == 'n'){ //Top side
        var x1 = x;
        var y1 = y;
        var x2 = x  + cellScale;
        var y2 = y;
        stroke(255);
        line(x1, y1, x2, y2);
        stroke(0);

      }


      if(cellsInMaze[i].walls.b == 'n') { //Bottom side
        var x1 = x;
        var y1 = y + cellScale;
        var x2 = x + cellScale;
        var y2 = y + cellScale;
        stroke(255);
        line(x1, y1, x2, y2);
        stroke(0);
      }


      if(cellsInMaze[i].walls.l == 'n') { //Left side
        var x1 = x;
        var y1 = y;
        var x2 = x;
        var y2 = y + cellScale;
        stroke(255);
        line(x1, y1, x2, y2);
        stroke(0);
      }


      if(cellsInMaze[i].walls.r == 'n'){ //Right side
        var x1 = x + cellScale;
        var y1 = y;
        var x2 = x + cellScale;
        var y2 = y + cellScale;
        stroke(255);
        line(x1, y1, x2, y2);
        stroke(0);
      }



    }

    if(run == true){ //fix this just for testing
    //Solve the maze
    var randomStartCell = Math.floor(random(cellsInMaze.length));
    var randomEndCell = Math.floor(random(cellsInMaze.length));

    while(randomStartCell == randomEndCell){
      randomEndCell = Math.floor(Math.random * cellsInMaze.length);
    }

    startCell = cellsInMaze[randomStartCell];
    endCell = cellsInMaze[randomEndCell];

    player1 = new mover(startCell.x, startCell.y, cellsInMaze);

    run = false; //fix this just for testing
  }
  fill('green');
  rect(startCell.x * cellScale, startCell.y * cellScale, cellScale, cellScale);
  fill('red');
  rect(endCell.x * cellScale, endCell.y * cellScale, cellScale, cellScale);
  fill(255);
  console.log(player1.moves);

  player1.draw();
  player1.checkEndCell(endCell);
  player1.move();



}
