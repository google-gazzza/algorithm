// leetcode/medium/490. The Maze
// 490-the-maze
// URL: https://leetcode.com/problems/the-maze/description/?envType=study-plan-v2&envId=premium-algo-100


function calculateLeftEnd(maze: number[][], start: number[]): number[] {
  let row = start[0];
  let col = start[1];

  while (col >= 0 && maze[row][col] === 0) {
    col--;
  }

  return [row, col + 1];
}

function calculateRightEnd(maze: number[][], start: number[]): number[] {
  let row = start[0];
  let col = start[1];

  while (col < maze[0].length && maze[row][col] === 0) {
    col++;
  }

  return [row, col - 1];
}

function calculateUpEnd(maze: number[][], start: number[]): number[] {
  let row = start[0];
  let col = start[1];

  while (row >= 0 && maze[row][col] === 0) {
    row--;
  }

  return [row + 1, col];
}

function calculateDownEnd(maze: number[][], start: number[]): number[] {
  let row = start[0];
  let col = start[1];

  while (row < maze.length && maze[row][col] === 0) {
    row++;
  }

  return [row - 1, col];
}

function hasPath(maze: number[][], start: number[], destination: number[]): boolean {
  const visited = new Set();
  let hasSolution = false;

  const travelFourWay = (row: number, col: number) => {
    if (row === destination[0] && col === destination[1]) {
      hasSolution = true;
    }

    //leftTravel
    const leftEnd = calculateLeftEnd(maze, [row, col]);
    if (!visited.has(leftEnd.toString()) && leftEnd[1] !== col) {
      visited.add(leftEnd.toString());
      visited;
      travelFourWay(leftEnd[0], leftEnd[1]);
    }

    //rightTravel
    const rightEnd = calculateRightEnd(maze, [row, col]);
    if (!visited.has(rightEnd.toString()) && rightEnd[1] !== col) {
      visited.add(rightEnd.toString());
      travelFourWay(rightEnd[0], rightEnd[1]);
    }

    //upTravel
    const upEnd = calculateUpEnd(maze, [row, col]);
    if (!visited.has(upEnd.toString()) && upEnd[0] !== row) {
      visited.add(upEnd.toString());
      travelFourWay(upEnd[0], upEnd[1]);
    }

    //downTravel
    const downEnd = calculateDownEnd(maze, [row, col]);
    if (!visited.has(downEnd.toString()) && downEnd[0] !== row) {
      visited.add(downEnd.toString());
      visited;
      travelFourWay(downEnd[0], downEnd[1]);
    }
  };

  travelFourWay(start[0], start[1]);

  return hasSolution;
};


let maze = [[0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [1, 1, 0, 1, 1], [0, 0, 0, 0, 0]];
let start = [0, 4];
let destination = [4, 4];

console.log('123');
console.log(hasPath(maze, start, destination)); // true

// test = [4, 4];
// test == [4, 4];
// //?

