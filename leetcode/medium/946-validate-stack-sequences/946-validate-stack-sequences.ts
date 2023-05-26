/*
946-validate-stack-sequences
leetcode/medium/946. Validate Stack Sequences
URL: https://leetcode.com/problems/validate-stack-sequences/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function validateStackSequences(pushList: number[], popList: number[]): boolean {
  const stack = [];

  for (let i = 0; i < pushList.length; i += 1) {
    stack.push(pushList[i]);

    while (stack.length && stack[stack.length - 1] === popList[0]) {
      stack.pop();
      popList.shift();
    }
  }

  return stack.length === 0;
}

let pushed = [1, 2, 3, 4, 5];
let popped = [4, 5, 3, 2, 1];
console.log(validateStackSequences(pushed, popped));
// Output: true

pushed = [1, 2, 3, 4, 5];
popped = [4, 3, 5, 1, 2];
console.log(validateStackSequences(pushed, popped));
// false
