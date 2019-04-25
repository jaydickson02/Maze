
//Maze Generation Variables
var mazeDimensions = {
  x:20,
  y:20
};

var cellScale = 15;


function setup(){

//Set framerate
frameRate(1000);

//Create canvas that can fit the maze
createCanvas(mazeDimensions.x * cellScale + 1, mazeDimensions.y * cellScale + 1);

}


function draw(){



  //Draw the maze cells
  for(var i = 0; i < cellsInMaze.length; i++){

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


      if(cellsInMaze[i].walls.b == 'n'){ //Bottom side
        var x1 = x;
        var y1 = y + cellScale;
        var x2 = x + cellScale;
        var y2 = y + cellScale;
        stroke(255);
        line(x1, y1, x2, y2);
        stroke(0);
      }


      if(cellsInMaze[i].walls.l == 'n'){ //Left side
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

    //Sanity Check
  /*  var counter = -400;

    for(var i = 0; i < cellsInMaze.length; i++){
      for(var j = 0; j < cellsInMaze.length; j++){
        if(cellsInMaze[i].x == cellsInMaze[j].x && cellsInMaze[i].y == cellsInMaze[j].y){
          counter++
        }
      }
    }
    console.log('Repeats: ' + counter);
    */
}
