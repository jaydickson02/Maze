
class mover {
  constructor(x, y, possibleGenes) {
  this.x = x;
  this.y = y;
  this.xOptions = [];
  this.yOptions = [];
  }

  moveOptions(maze){

    //reset options arrays
    this.yOptions = [];
    this.xOptions = [];

    //Find the current cell
    var cell = findCellInMaze(maze);

    if(cell.walls.t == 'n'){ //Can move up
      this.yOptions.push(-1);
    }
    if(cell.walls.b == 'n'){ //Can move down
      this.yOptions.push(1);
    }
    if(cell.walls.l == 'n'){ //Can move left
      this.xOptions.push(-1);
    }
    if(cell.walls.r == 'n'){ //Can move right
      this.xOptions.push(1);
    }

  }

  findCellInMaze(maze){ //Locates the cell with the objects current x and y coordinates
    for(var i = 0; i < maze.length; i++){
      if(maze[i].x == this.x && maze[i].y == this.y){
        return maze[i];
      }
    }
  }

  move(){
    this.x = this.xOptions[Math.floor(Math.random * this.xOptions.length)];
    this.y = this.yOptions[Math.floor(Math.random * this.yOptions.length)];
  }

  draw(){
    rect(this.x * 15, this.y * 15, 1, 1);
  }

} //Class closing bracket don't delete
