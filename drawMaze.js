//Maze Generation Variables

var mazeDimensions = {
  x: 20,
  y: 20
};

var cellScale = 15;

//Initialise variables
var randomCell;
var mazeNeighbours;
var frontier = [];
var filledArray = [];
var cellsInMaze = [];
var walls = [];
var i = 0;


function setup() {

  //Auto Sizes so the maze fills the screen
  mazeDimensions.x = Math.floor(windowWidth / cellScale) - 2

  mazeDimensions.y = Math.floor(windowHeight / cellScale) - 2

  //Set framerate
  frameRate(1000);

  //Create canvas that can fit the maze
  createCanvas(mazeDimensions.x * cellScale + 1, mazeDimensions.y * cellScale + 1);

  //Generate the maze cells
  filledArray = fillMazeCellArray(mazeDimensions);

  //Get a random cell to use as maze start point
  startRandomCell = getRandomCell(filledArray);

  cellsInMaze = addToMaze(startRandomCell, cellsInMaze);

  //Generate frontier
  frontier = addFrontier(startRandomCell, cellsInMaze, frontier, mazeDimensions);


}


function draw() {

  //Drawing everything

  //Draw the maze grid. Optional for different style of generation.
  // for (var i = 0; i < filledArray.length; i++) {
  //   fill(255);
  //   rect(filledArray[i].x * cellScale, filledArray[i].y * cellScale, cellScale, cellScale);
  // }

  //Draw the maze cells
  for (var i = 0; i < cellsInMaze.length; i++) {
    fill(255);
    rect(cellsInMaze[i].x * cellScale, cellsInMaze[i].y * cellScale, cellScale, cellScale);
  }

  //Draw the frontier
  for (var i = 0; i < frontier.length; i++) {
    fill(200, 255, 200);
    rect(frontier[i].x * cellScale, frontier[i].y * cellScale, cellScale, cellScale);
  }

  //Draw the starter cell
  if (frontier.length > 0) {
    fill(200, 200, 200);
    rect(startRandomCell.x * cellScale, startRandomCell.y * cellScale, cellScale, cellScale);
  }

  //Check that the wall array is not empty
  if (walls.length > 0) {
    for (var i = 0; i < walls.length; i++) {
      stroke(255);
      line(walls[i].x, walls[i].y, walls[i].x2, walls[i].y2);
      stroke(0);
    }
  }



  //Logic starts here

  //Check frontier is not empty
  for (let i = 0; i < 50; i++) { //Solves more of the maze per draw cycle
    if (frontier.length > 0) {

      frontierRandomCell = getRandomCell(frontier);

      cellsInMaze = addToMaze(frontierRandomCell, cellsInMaze);

      mazeNeighbours = checkForMazeNeighbours(frontierRandomCell, cellsInMaze);

      walls = removeWall(mazeNeighbours, frontierRandomCell, walls, cellScale);

      removeFromFrontier(frontierRandomCell, frontier);

      frontier = addFrontier(frontierRandomCell, cellsInMaze, frontier, mazeDimensions);

    } else {
      console.log('Frontier Empty');
    }
  }


}
