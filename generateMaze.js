//mazeDimensions
var mazeDimensions = {
  x:20,
  y:20
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
var finalMaze = [];

//Generate the maze cells
filledArray = fillMazeCellArray(mazeDimensions);

//Get a random cell to use as maze start point
startRandomCell = getRandomCell(filledArray);

cellsInMaze = addToMaze(startRandomCell, cellsInMaze);

//Generate frontier
frontier = addFrontier(startRandomCell, cellsInMaze, frontier, filledArray);

while(frontier.length > 0){

  frontierRandomCell = getRandomCell(frontier);

  cellsInMaze = addToMaze(filledArray[findCellInArray(frontierRandomCell, filledArray)], cellsInMaze);

  mazeNeighbours = checkForMazeNeighbours(frontierRandomCell, cellsInMaze);

  cellsInMaze = removeWall(mazeNeighbours, frontierRandomCell, cellsInMaze, cellScale);

  removeFromFrontier(frontierRandomCell, frontier);

  frontier = addFrontier(frontierRandomCell, cellsInMaze, frontier, mazeDimensions);

}
