// [Easy] 1342. Number of Steps to Reduce a Number to Zero
// 1342_number_of_steps_to_reduce_a_number_to_zero

// 꼬리 재귀 써서 하는 방법
// Runtime: 84 ms, faster than 72.73% of TypeScript online submissions for Number of Steps to Reduce a Number to Zero.
// Memory Usage: 40.1 MB, less than 58.18% of TypeScript online submissions for Number of Steps to Reduce a Number to Zero.
function numberOfSteps (num: number, count: number = 0): number {
  if (num === 0) {
    return count
  }

  return num % 2 === 0
    ? numberOfSteps(num / 2, count + 1)
    : numberOfSteps(num - 1, count + 1)
}


const numMap = new Map<number, number>()
numMap.set(0, 0)

// 재귀 써서 하는 방법
// 이 함수를 여러번 부르면, 이렇게 캐싱해서 하는게 유리!
// Runtime: 80 ms, faster than 87.27% of TypeScript online submissions for Number of Steps to Reduce a Number to Zero.
// Memory Usage: 40.1 MB, less than 80.00% of TypeScript online submissions for Number of Steps to Reduce a Number to Zero.
function numberOfSteps2 (num: number, count: number = 0): number {
  if (numMap.has(num)) {
    return numMap.get(num)
  }

  const accCount: number = num % 2 === 0 ? numberOfSteps(num / 2) : numberOfSteps(num - 1)
  const result: number = accCount + 1
  numMap.set(num, result)
  return result
}


// 그냥 loop로 하는 방법
// Runtime: 72 ms, faster than 100.00% of TypeScript online submissions for Number of Steps to Reduce a Number to Zero.
// Memory Usage: 40 MB, less than 80.00% of TypeScript online submissions for Number of Steps to Reduce a Number to Zero.
function numberOfSteps3 (num: number): number {
  let count: number = 0
  while (num !== 0) {
    if (num % 2 === 0) {
      num /= 2
      count += 1
    } else {
      num -= 1
      count += 1
    }
  }
  return count
}
