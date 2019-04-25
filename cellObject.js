class cell {
  constructor(x, y) {
    this.walls = {t:'y', b:'y', l:'y', r:'y'}; //By default all edges are present
    this.x = x;
    this.y = y;
  }

  //Removes an edge from the cell (either top bottom left or right)
  removeWall(edge){

    switch(edge) {
  case "top":
    this.walls.t = 'n'; //Sets flag from 'y' yes to 'n' no
    break;
  case "bottom":
    this.walls.b = 'n'; //Sets flag from 'y' yes to 'n' no
    break;
  case "left":
    this.walls.l = 'n'; //Sets flag from 'y' yes to 'n' no
    break;
  case "right":
    this.walls.r = 'n'; //Sets flag from 'y' yes to 'n' no
    break;
  }
  }
}
