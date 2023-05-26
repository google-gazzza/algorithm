/*
293-flip-game
leetcode/easy/293. Flip Game
Difficulty: easy
URL: https://leetcode.com/problems/flip-game/

NOTE: Description

NOTE: Constraints
  * 1 <= currentState.length <= 500
  * currentState[i] is either '+' or '-'.

NOTE: Explanation
  one of worse algorithm problem.
  description didn't described about 'only can flip the +'
*/

function flip(currentState: string, i: number): string {
  if (currentState[i] === '+') {
    return `${currentState.substring(0, i)}--${currentState.substring(i + 2)}`;
  }

  return `${currentState.substring(0, i)}++${currentState.substring(i + 2)}`;
}

function generatePossibleNextMoves(currentState: string): string[] {
  const combination: string[] = [];

  if (!currentState.match(/[+]/g)) {
    return [];
  }

  for (let i = 0; i < currentState.length - 1; i += 1) {
    if (currentState[i] === '+' && currentState[i + 1] === '+') {
      combination.push(flip(currentState.slice(), i));
    }
  }

  return combination;
}

// Example 1:
//
let currentState = '++++';
console.log(generatePossibleNextMoves(currentState));
// Output: ["--++","+--+","++--"]
// Example 2:
//
currentState = '+';
console.log(generatePossibleNextMoves(currentState));
// Output: []

currentState = '---';
console.log(generatePossibleNextMoves(currentState));
