// [Easy] 1342. Number of Steps to Reduce a Number to Zero
// 1342_number_of_steps_to_reduce_a_number_to_zero

// 꼬리 재귀 써서 하는 방법
// Runtime: 72 ms, faster than 95.35% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
// Memory Usage: 38.5 MB, less than 67.05% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
const numberOfSteps = function (num, count = 0) {
  if (num === 0) {
    return count
  }

  return num % 2 === 0
    ? numberOfSteps(num / 2, count + 1)
    : numberOfSteps(num - 1, count + 1)
}


const numMap = new Map()
numMap.set(0, 0)

// 재귀 써서 하는 방법
// 이 함수를 여러번 부르면, 이렇게 캐싱해서 하는게 유리!
// Runtime: 76 ms, faster than 85.19% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
// Memory Usage: 38.7 MB, less than 45.39% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
const numberOfSteps2 = function (num) {
  if (numMap.has(num)) {
    return numMap.get(num)
  }

  const accCount = num % 2 === 0 ? numberOfSteps(num / 2) : numberOfSteps(num - 1)
  const result = accCount + 1
  numMap.set(num, result)
  return result
}


// 그냥 loop로 하는 방법
// Runtime: 76 ms, faster than 85.19% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
// Memory Usage: 37.8 MB, less than 99.72% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
const numberOfSteps3 = function (num) {
  let count = 0
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
