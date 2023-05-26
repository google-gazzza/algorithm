/*
path-finder-1-can-you-reach-the-exit

# codewars/4kyu/Path Finder #1: can you reach the exit?
Difficulty: 4kyu
URL: https://www.codewars.com/kata/5765870e190b1472ec0022a2
Tags: dynamic-programming

## Approach

### en

### kr

## Solution
### JavaScript

*/

let discoveredMap;

const discover = (row, column, maze) => {
  if (maze[row][column] === 'W') {
    return false;
  }
  if (discoveredMap[row][column]) {
    return false;
  }
  
  discoveredMap[row][column] = 1;
  
  if (0 < row) {
    discover(row - 1, column, maze);
  }
  if (row < maze.length - 1) {
    discover(row + 1, column, maze);
  }
  if (0 < column) {
    discover(row, column - 1, maze);
  }
  if (column < maze.length - 1) {
    discover(row, column + 1, maze);
  }
};

function pathFinder(maze) {
  const splitedMaze = maze.split('\n');
  const mazeLength = splitedMaze.length;
  
  discoveredMap = new Array(mazeLength).fill(0)
    .map(() => new Array(mazeLength).fill(0));
  
  discover(mazeLength - 1, mazeLength - 1, splitedMaze);
  
  return !!discoveredMap[0][0];
}

// test
function testMaze(expected, maze) {
  let actual = pathFinder(maze);
  return actual === expected;
}

testMaze(true,
  `.W.
.W.
...`);
//?

testMaze(false,
  `.W.
.W.
W..`);
//?

testMaze(true,
  `......
......
......
......
......
......`);
//?

testMaze(false,
  `......
......
......
......
.....W
....W.`);
//?
