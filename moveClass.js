
class mover {
  constructor(x, y, maze) {
  this.x = x;
  this.y = y;
  this.maze = maze;
  this.xOptions = [];
  this.yOptions = [];
  this.moves = 0;
  this.flagNotFinished = true;
  }

  moveOptions(){

    //reset options arrays
    this.yOptions = [];
    this.xOptions = [];

    //Find the current cell
    var currentCell = this.findCellInMaze(this.x, this.y);

    //Find cells surrounding current cell
    var cellT = this.findCellInMaze(this.x, this.y - 1); //(x, y - 1)
    var cellB = this.findCellInMaze(this.x, this.y + 1); //(x, y + 1)
    var cellL = this.findCellInMaze(this.x - 1, this.y); //(x + 1, y)
    var cellR = this.findCellInMaze(this.x + 1, this.y); //(x + 1, y)

    if(cellT){
      if(currentCell.walls.t == 'n' || cellT.walls.b == 'n'){ //Can move up
        this.yOptions.push(-1);
      }
    }
    if(cellB){
      if(currentCell.walls.b == 'n' || cellB.walls.t == 'n'){ //Can move down
        this.yOptions.push(1);
      }
    }
    if(cellL){
      if(currentCell.walls.l == 'n' || cellL.walls.r == 'n'){ //Can move left
        this.xOptions.push(-1);
      }
    }
    if(cellR){
      if(currentCell.walls.r == 'n' || cellR.walls.l == 'n'){ //Can move right
        this.xOptions.push(1);
      }
    }
  }

  findCellInMaze(x, y){ //Locates the cell with the objects current x and y coordinates
    for(var i = 0; i < this.maze.length; i++){
      if(this.maze[i].x == x && this.maze[i].y == y){
        return this.maze[i];
      }
    }
    return false;
  }

  move(){
    //Update the possible movement options
    this.moveOptions();

    //Move the object based on random legal move option
    if (this.flagNotFinished) {

      if(this.xOptions.length > 0 && this.yOptions.length > 0){
        var moveXorY = Math.floor(random(2));

        if(moveXorY == 0){
          this.x += this.xOptions[Math.floor(random(this.xOptions.length))];
          this.moves++;
        }
        if(moveXorY == 1){
          this.y += this.yOptions[Math.floor(random(this.yOptions.length))];
          this.moves++;
        }

      } else {

        if(this.xOptions.length > 0){
          this.x += this.xOptions[Math.floor(random(this.xOptions.length))];
          this.moves++;
        }
        if(this.yOptions.length > 0){
          this.y += this.yOptions[Math.floor(random(this.yOptions.length))];
          this.moves++;
        }
      }
    }
  }

  draw(){
    //Draw a dot to show current location
    fill(0);
    rect(this.x * 15, this.y * 15, 15, 15);
    fill(255);
  }

  checkEndCell(endCell){
    if(this.x == endCell.x && this.y == endCell.y){
      this.flagNotFinished = false;
    }
  }

} //Class closing bracket don't delete
