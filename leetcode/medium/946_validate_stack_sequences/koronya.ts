// [Medium] 946. Validate Stack Sequences
// 946_validate_stack_sequences

// https://leetcode.com/problems/validate-stack-sequences
// Runtime: 80 ms, faster than 93.75% of TypeScript online submissions for Validate Stack Sequences.
// Memory Usage: 40.7 MB, less than 56.25% of TypeScript online submissions for Validate Stack Sequences.


/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */

function validateStackSequences(pushed: number[], popped: number[]): boolean {
  let targetPush: number = pushed.shift()!
  let bottomOfPopped: number = popped[0]
  const tempStack: number[] = []
  while (targetPush != null) {
    if (targetPush === bottomOfPopped) {
      popped.shift()
      bottomOfPopped = popped[0]
      targetPush = pushed.shift()!
    } else {
      const tempStackLen: number = tempStack.length
      if (tempStackLen > 0 && tempStack[tempStackLen - 1] === bottomOfPopped) {
        popped.shift()
        bottomOfPopped = popped[0]
        tempStack.pop()
      } else {
        tempStack.push(targetPush)
        targetPush = pushed.shift()!
      }
    }
  }
  return JSON.stringify(tempStack.reverse()) === JSON.stringify(popped)
}

validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]) //?
validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]) //?
validateStackSequences([2, 1, 0], [1, 2, 0]) //?
