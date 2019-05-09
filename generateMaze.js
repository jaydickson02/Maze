//mazeDimensions
var mazeDimensions = {
  x: 30,
  y: 30
};

//Initialise variables
var mazeNeighbours;
var frontier = [];
var filledArray = [];
var cellsInMaze = [];

//Generate the maze cells
filledArray = fillMazeCellArray(mazeDimensions);

//Get a random cell to use as maze start point
startRandomCell = getRandomCell(filledArray);

cellsInMaze = addToMaze(startRandomCell, cellsInMaze);

//Generate frontier
frontier = addFrontier(startRandomCell, cellsInMaze, frontier, filledArray, mazeDimensions);

while (frontier.length > 0) {

  frontierRandomCell = getRandomCell(frontier);

  cellsInMaze = addToMaze(frontierRandomCell, cellsInMaze);

  mazeNeighbours = checkForMazeNeighbours(frontierRandomCell, cellsInMaze);

  cellsInMaze = removeWall(mazeNeighbours, frontierRandomCell, cellsInMaze);

  removeFromFrontier(frontierRandomCell, frontier);

  frontier = addFrontier(frontierRandomCell, cellsInMaze, frontier, filledArray, mazeDimensions);

}
