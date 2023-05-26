/*
path-finder-2-shortest-path

# codewars/4kyu/Path Finder #2: shortest path
Difficulty: 4kyu
URL: https://www.codewars.com/kata/57658bfa28ed87ecfa00058a
Tags: dynamic-programming

## Approach

### en

### kr

## Solution
### JavaScript

*/

function pathFinder(maze) {
  const splitedMaze = maze.split('\n');
  const discoveredMap = splitedMaze.slice(0)
    .map((e) => {
      return [...e].map((e2) => e2 === '.' ? 0 : 1);
    });
  
  let currentQueueArray = [[0, 0]];
  let nextQueue = new Set();
  let count = 0;
  
  while (currentQueueArray.length) {
    while (currentQueueArray.length) {
      const [row, column] = currentQueueArray.pop();
      
      
      if (discoveredMap[row][column] === 0) {
        if (row === splitedMaze.length - 1 && column === splitedMaze.length - 1) {
          return count;
        }
        discoveredMap[row][column] = 1;
        
        if (0 < row) {
          nextQueue.add([row - 1, column]);
        }
        if (row < splitedMaze.length - 1) {
          nextQueue.add([row + 1, column]);
        }
        if (0 < column) {
          nextQueue.add([row, column - 1]);
        }
        if (column < splitedMaze.length - 1) {
          nextQueue.add([row, column + 1]);
        }
      }
    }
    currentQueueArray = [...nextQueue.values()];
    nextQueue = new Set();
    count += 1;
  }
  
  return false;
}


function testMaze(expected, maze) {
  let actual = pathFinder(maze);
  return actual === expected;
}


testMaze(4,
  `.W.
.W.
...`);
//?

testMaze(false,
  `.W.
.W.
W..`);
//?

testMaze(10,
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
