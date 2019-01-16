
//Prims Algorithm

function fillMazeCellArray(mazeDimensions){

//Initialise Variables
var counter = 0;
var emptyCells = [];

//Generate array of maze cells with coords based on size of maze
for(var x=0; x< mazeDimensions.x; x++){
  for(var y=0; y< mazeDimensions.y; y++){
    emptyCells[counter] = {x,y};
    counter++
  }
}

//Return array of maze cells
return emptyCells;
}



function getRandomCell(cellArray){

  //Generate a random number
  var result = Math.random() * cellArray.length;

  //Make number an int
  result = Math.floor(result);

  //select cell from array
  var randomCell = cellArray[result];

  //return the cell
  return randomCell;
}



function addFrontier(cell, mazeCells, frontier, mazeDimensions){

  //Initialise Variables
  var cellsToCheck = [];
  var cellsToAdd = [];
  var isNotInFrontier = true;
  var isNotInMaze = true;
  var cellCounter = 0;

  //Set x and y
  var x = cell.x;
  var y = cell.y;

  //Define coords of frontier cells
  cellsToCheck[0] = {x: x, y: y - 1}; // (x, y - 1)
  cellsToCheck[1] = {x: x, y: y + 1}; // (x, y + 1)
  cellsToCheck[2] = {x: x - 1, y: y}; // (x + 1, y)
  cellsToCheck[3] = {x: x + 1, y: y}; // (x + 1, y)

  //Iterate through all the cells that need to be checked
  for(var i = 0; i<cellsToCheck.length; i++){
    checkX = cellsToCheck[i].x;
    checkY = cellsToCheck[i].y;

    //Check that the x and y are not out of bounds relative to the maze size
    if(checkX >= 0 && checkY >= 0 && !(checkX >= mazeDimensions.x) && !(checkY >= mazeDimensions.y)){

      //Check the cell is not in the frontier array already
      for(var a = 0; a < frontier.length; a++){
        if(frontier[a].x == checkX && frontier[a].y == checkY){

          //If the cell is in frontier set flag to False
          isNotInFrontier = false;
        }
      }

      //Check the cell is not in the maze already

      for(var a = 0; a < mazeCells.length; a++){
        if(mazeCells[a].x == checkX && mazeCells[a].y == checkY){

          //If the cell is in maze set flag to False
          isNotInMaze = false;
        }
      }

      //Check flag to determine if the cell was found to be in the frontier
      if(isNotInFrontier && isNotInMaze){

        //Add cell to array to be added to frontier later
        frontier.push({x: checkX, y: checkY});

        //Reset flag and increment counter
        cellCounter++;
        isNotInFrontier = true;
        isNotInMaze = true;
      }

    }

  }

  return frontier;

}

function removeFromFrontier(cell, frontier){
  //Locate the cell in the array
  for(var i = 0; i < frontier.length; i++){
    if(frontier[i].x == cell.x && frontier[i].y == cell.y){
      //Remove cell at the found position
      frontier.splice(i, 1);
    }
  }
}

function addToMaze(cell, cellsInMaze){
  cellsInMaze.push({x: cell.x, y: cell.y})
  return cellsInMaze;
}
