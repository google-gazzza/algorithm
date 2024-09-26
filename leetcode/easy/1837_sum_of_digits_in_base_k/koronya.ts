// [Easy] 1837. Sum of Digits in Base K
// 1837_sum_of_digits_in_base_k

// https://leetcode.com/problems/sum-of-digits-in-base-k
// Runtime: 76 ms, faster than 81.58% of TypeScript online submissions for Sum of Digits in Base K.
// Memory Usage: 38.9 MB, less than 57.89% of TypeScript online submissions for Sum of Digits in Base K.

function sumBase(n: number, k: number): number {
  if (n === k) {
    return 1
  }
  let target: number = n
  let tempArr: number[] = []
  while (target >= k) {
    const remainder: number = target % k
    target = Math.floor(target / k)
    tempArr.push(remainder)
  }
  tempArr.push(target)
  let resultArr: number[] = tempArr[0] === 0 ? tempArr.slice(1) : tempArr
  return resultArr.reduce((acc, cur) => acc + cur, 0)
}

sumBase(34, 6) //?
sumBase(10, 10) //?
sumBase(42, 2) //?
