
//Prims Algorithm

function fillMazeCellArray(mazeDimensions){

//Initialise Variables
var counter = 0;
var emptyCells = [];

//Generate array of maze cells with coords based on size of maze
for(var x = 0; x < mazeDimensions.x; x++){
  for(var y = 0; y < mazeDimensions.y; y++){
    emptyCells[counter] =  new cell(x, y);
    counter++
  }
}

//Return array of maze cells
return emptyCells;
}



function getRandomCell(cellArray){

  //Generate a random number
  var result = Math.random() * cellArray.length;

  //Make number an int (cut off the decimal points)
  result = Math.floor(result);

  //select cell from array
  var randomCell = cellArray[result];

  //return the cell
  return randomCell;
}



function addFrontier(cell, mazeCells, frontier, mazeDimensions){

  //Initialise Variables
  var cellsToCheck = [];
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

  //Get frontier cells from cellList

  //Iterate through all the cells that need to be checked
  for(var i = 0; i<cellsToCheck.length; i++){
    //reset flags
    isNotInFrontier = true;
    isNotInMaze = true;

    //Assign x and y
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

        //increment counter
        cellCounter++;

      }

    }



  }
  return frontier;

}

function checkForMazeNeighbours(frontierCell, mazeCells){
  //Initialise Variables
  var cellsToCheck = [];
  var neighbourCells = [];

  //Assign x and y
  x = frontierCell.x;
  y = frontierCell.y;

  //Define coords of the neighbour cells
  cellsToCheck[0] = {x: x, y: y - 1, sde: 'U'}; // (x, y - 1)
  cellsToCheck[1] = {x: x, y: y + 1, sde: 'D'}; // (x, y + 1)
  cellsToCheck[2] = {x: x - 1, y: y, sde: 'L'}; // (x + 1, y)
  cellsToCheck[3] = {x: x + 1, y: y, sde: 'R'}; // (x + 1, y)

  //Iterate through the maze cells checking to see if any of the coords match neighbour cells
  for(var i = 0; i<mazeCells.length; i++){
    for(var a = 0; a<cellsToCheck.length; a++){

      //If cells match add them to neighbours array
      if(mazeCells[i].x == cellsToCheck[a].x && mazeCells[i].y == cellsToCheck[a].y){
        neighbourCells.push({x: cellsToCheck[a].x, y: cellsToCheck[a].y, sde: cellsToCheck[a].sde});
      }
    }
  }
  //Return complete array
  return neighbourCells;
}

function removeWall(neighbourCells, cell, cellsInMaze, cellScale){
  //Init Variables

  var newCellsInMaze = [];
  //Choose a random neighbour cell
  var randomCell = getRandomCell(neighbourCells)

  //Assign x and y;
  var x = cell.x * cellScale;
  var y = cell.y * cellScale;

  //Find the side that connects the two cells
  var sde = randomCell.sde;


  //Check if side is Up
  if(sde == 'U'){

   cellsInMaze[findCellInArray(cell, cellsInMaze)].removeWall('top');
  };

  //Check if side is Down
  if(sde == 'D'){

   cellsInMaze[findCellInArray(cell, cellsInMaze)].removeWall('bottom');
  };

  //Check if side is Left
  if(sde == 'L'){

   cellsInMaze[findCellInArray(cell, cellsInMaze)].removeWall('left');
  };

  //Check if side is Right
  if(sde == 'R'){

    cellsInMaze[findCellInArray(cell, cellsInMaze)].removeWall('right');
  };



  return cellsInMaze;

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

function addToMaze(cell, cellsInMaze){ //Depricated code rewrite and remove
  cellsInMaze.push(cell)
  return cellsInMaze;
}

function findCellInArray(cell, cellArray){ //Returns the index for that cell in the array. If the cell isn't found returns false
  for(var i = 0; i < cellArray.length; i++){
    if(cell.x == cellArray[i].x && cell.y == cellArray[i].y){
      return i;
    }
  }
  return false;
}