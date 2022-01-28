/*
246-strobogrammatic-number
leetcode/easy/246. Strobogrammatic Number
Difficulty: easy
URL: https://leetcode.com/problems/strobogrammatic-number/
*/

function isStrobogrammatic(num: string): boolean {
    const mirrorImage = new Map<number, number>([
      [1, 1],
      [6, 9],
      [8, 8],
      [9, 6],
      [0, 0],
    ]);
  
    return num.split('')
      .map((char) => mirrorImage.get(Number(char)))
      .reverse()
      .join('') === num;
  };
  
  
  // Example 1:
  //
  let num = '69';
  console.log(isStrobogrammatic(num));
  // Output: true
  // Example 2:
  //
  num = '88';
  console.log(isStrobogrammatic(num));
  // Output: true
  // Example 3:
  //
  num = '962';
  console.log(isStrobogrammatic(num));
  
  // Output: false
  