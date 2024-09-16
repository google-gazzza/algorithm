/*
1275-find-winner-on-a-tic-tac-toe-game
leetcode/easy/1275. Find Winner on a Tic Tac Toe Game
Difficulty: easy
URL: https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/

NOTE: Description

NOTE: Constraints
  - 1 <= moves.length <= 9
  - moves[i].length == 2
  - 0 <= rowi, coli <= 2
  - There are no repeated elements on moves.
  - moves follow the rules of tic tac toe.

NOTE: Explanation
*/

function checkDiagonal(map: number[][], row: number, col: number, target: any): boolean {
  if ((row === 0 && col === 0) || (row === 2 && col === 2)) {
    return [map[0][0], map[1][1], map[2][2]].every(x => x === target);
  }

  if ((row === 0 && col === 2) || (row === 2 && col === 0)) {
    return [map[2][0], map[1][1], map[0][2]].every(x => x === target);
  }

  if ((row === 1 && col === 1) || (row === 1 && col === 1)) {

    return [map[0][0], map[1][1], map[2][2]].every(x => x === target)
      || [map[2][0], map[1][1], map[0][2]].every(x => x === target);
  }

  return false;
}

function checkRow(map: number[][], row: number, col: number, target: any): boolean {
  return map[row].every((e) => e === target);
}

function checkColumn(map: number[][], row: number, col: number, target: any): boolean {
  return map.every((e) => e[col] === target);
}

function tictactoe(moves: number[][]): string {
  const map = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  let winner = 0;

  moves.some(([row, col], i) => {
    if (i % 2 === 0) {
      map[row][col] = 1;
    } else {
      map[row][col] = 2;
    }

    if (checkRow(map, row, col, map[row][col])
      || checkColumn(map, row, col, map[row][col])
      || checkDiagonal(map, row, col, map[row][col])
    ) {
      winner = map[row][col];

      return true;
    }
  });

  if (winner === 0) {
    if (map.every((e) => e.every((x) => x !== 0))) {
      return 'Draw';
    }
    return 'Pending';
  }

  return winner === 1 ? 'A' : 'B';
};


let moves = [[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]];
console.log(tictactoe(moves));
// Output: "A"
// Explanation: A wins, they always play first.


moves = [[0, 0], [1, 1], [0, 1], [0, 2], [1, 0], [2, 0]];
console.log(tictactoe(moves));
// Output: "B"
// Explanation: B wins.

moves = [[0, 0], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1], [0, 2], [2, 2]];
console.log(tictactoe(moves));
// Output: "Draw"
// Explanation: The game ends in a draw since there are no moves to make.

moves = [[0, 2], [1, 0], [2, 2], [1, 2], [2, 0], [0, 0], [0, 1], [2, 1], [1, 1]];
console.log(tictactoe(moves));
// arr = [
//   [2, 1, 1],
//   [2, 1, 2],
//   [1, 2, 1],
// ];
// "A"
