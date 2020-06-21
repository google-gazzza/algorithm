// maze-runner
// https://www.codewars.com/kata/58663693b359c4a6560001d6

const getStartCoordinate = (maze) => {
  const y = maze.findIndex((v) => v.includes(2));
  const x = maze[y].findIndex((v) => v === 2);
  return [x, y];
};

const directionMap = {
  'N': [0, -1],
  'S': [0, 1],
  'E': [1, 0],
  'W': [-1, 0],
};

const mazeRunner = (maze, directions) => {
  let coordinate = getStartCoordinate(maze);
  
  while (directions.length) {
    coordinate = directionMap[directions.shift()].map((v, i) => v + coordinate[i]);
    
    if (maze[coordinate[1]] === undefined || maze[coordinate[1]][coordinate[0]] === undefined) {
      return 'Dead';
    }
    
    switch (maze[coordinate[1]][coordinate[0]]) {
      case 0:
        break;
      case 1:
        return 'Dead';
      case 3:
        return 'Finish';
    }
  }
  
  return 'Lost';
};


var maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1]
];

console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"]), "Finish", "Expected Finish");
console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "S", "S", "E", "E", "N", "N", "E"]), "Finish", "Expected Finish");
console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E", "W", "W"]), "Finish", "Expected Finish");
console.log(mazeRunner(maze, ["N", "N", "N", "W", "W"]), "Dead", "Expected Dead");
console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "S", "S", "S", "S", "S", "S"]), "Dead", "Expected Dead");
console.log(mazeRunner(maze, ["N", "E", "E", "E", "E"]), "Lost", "Expected Lost");
