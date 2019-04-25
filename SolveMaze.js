
//Allow for solving the maze
var randomStartCell = Math.floor(Math.random * finalMaze.length);
var randomEndCell = Math.floor(Math.random * finalMaze.length);

while(randomStartCell == randomEndCell){
  randomEndCell = Math.floor(Math.random * finalMaze.length);
}

var startCell = finalMaze[randomStartCell];
var endCell = finalMaze[randomEndCell];

function attemptSolve(){
  var player1 = new mover()
}
