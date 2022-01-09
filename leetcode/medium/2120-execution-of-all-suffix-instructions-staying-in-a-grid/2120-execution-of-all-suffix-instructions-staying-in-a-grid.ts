/*
2120-execution-of-all-suffix-instructions-staying-in-a-grid
leetcode/easy/2120. Execution of All Suffix Instructions Staying in a Grid
Difficulty: medium
URL: https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/
*/

const DIRECTION_MAP = new Map<string, number[]>(
    [
      ['U', [0, -1]],
      ['D', [0, 1]],
      ['R', [1, 0]],
      ['L', [-1, 0]],
    ],
  );
  
  const isOutOfTheMap = (x: number, y: number, n: number): boolean => x < 0 || x >= n || y < 0 || y >= n;
  
  function executeInstructions(n: number, startPos: number[], s: string): number[] {
    let result = [];
    let lastIndex = 0;
  
    for (let i = 0; i < s.length; i++) {
      let [y, x] = startPos;
      lastIndex = 0;
  
      for (let j = i; j < s.length; j++) {
        const [dx, dy]: number[] | undefined = DIRECTION_MAP.get(s[j]);
        [x, y] = [x + dx, y + dy];
  
        if (isOutOfTheMap(x, y, n)) {
          break;
        } else {
          lastIndex = j + 1;
        }
      }
  
      if (lastIndex === 0) {
        result.push(0);
      } else {
        result.push(lastIndex - i);
      }
    }
  
    return result;
  }
  
  /*
  Constraints:
  
  m == s.length
  1 <= n, m <= 500
  startPos.length == 2
  0 <= startrow, startcol < n
  s consists of 'L', 'R', 'U', and 'D'.
   */
  
  let n = 3;
  let startPos = [0, 1];
  // let s = 'RRDDLU';
  let s = 'RRDDLU';
  
  console.log(executeInstructions(n, startPos, s));
  // Output: [1, 5, 4, 3, 1, 0];
  
  n = 2;
  startPos = [1, 1];
  s = 'LURD';
  console.log(executeInstructions(n, startPos, s));
  // Output: [4, 1, 0, 0];
  
  n = 1;
  startPos = [0, 0];
  s = 'LRUD';
  console.log(executeInstructions(n, startPos, s));
  // Output: [0, 0, 0, 0];
  