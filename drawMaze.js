//Maze Generation Variables
var mazeDimensions = {
  x:30,
  y:30
};

var cellScale = 10;

//Initialise variables
var randomCell;
var mazeNeighbours;
var frontier = [];
var filledArray = [];
var cellsInMaze = [];
var walls = [];
var i = 0;


function setup(){
//Set framerate
frameRate(60);

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


function draw(){

  //Drawing everything

  //Draw the maze grid
  for(var i = 0; i< filledArray.length; i++){
    fill(80);
    rect(filledArray[i].x * cellScale, filledArray[i].y * cellScale, cellScale, cellScale);
  }

  //Draw the maze cells
  for(var i = 0; i < cellsInMaze.length; i++){
    fill(0, 0, 20);
    rect(cellsInMaze[i].x * cellScale, cellsInMaze[i].y * cellScale, cellScale, cellScale);
  }

  //Draw the frontier
  for(var i = 0; i < frontier.length; i++){
    fill(0, 50, 0);
    rect(frontier[i].x * cellScale, frontier[i].y * cellScale, cellScale, cellScale);
  }

  //Check that the wall array is not empty
  if(walls.length > 0){
  for(var i = 0; i < walls.length; i++){
    stroke(255);
    line(walls[i].x, walls[i].y, walls[i].x2, walls[i].y2);
  }
  }
  //Draw the starter cell
  fill(100, 0, 0);
  rect(startRandomCell.x * cellScale, startRandomCell.y * cellScale, cellScale, cellScale);

  //Logic starts here

  //Check frontier is not empty

if(frontier.length > 0){

  frontierRandomCell = getRandomCell(frontier);

  mazeNeighbours = checkForMazeNeighbours(frontierRandomCell, walls, cellScale)

  walls = addWall(mazeNeighbours, frontierRandomCell, walls, cellScale);

  cellsInMaze = addToMaze(frontierRandomCell, cellsInMaze);

  removeFromFrontier(frontierRandomCell, frontier);

  frontier = addFrontier(frontierRandomCell, cellsInMaze, frontier, mazeDimensions);

} else {
  console.log('Frontier Empty');
}


}
