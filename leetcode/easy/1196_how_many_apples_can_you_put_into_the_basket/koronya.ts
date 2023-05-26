// [Easy] 1196. How Many Apples Can You Put into the Basket
// 1196_how_many_apples_can_you_put_into_the_basket

// https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket
// Runtime: 83 ms, faster than 66.67% of TypeScript online submissions for How Many Apples Can You Put into the Basket.
// Memory Usage: 40 MB, less than 100.00% of TypeScript online submissions for How Many Apples Can You Put into the Basket.

function maxNumberOfApples(arr: number[]): number {
  const LIMIT: number = 5000
  let acc: number = 0
  let result: number = 0
  const arrLen: number = arr.length
  arr.sort((a, b) => a - b)
  for (let i: number = 0; i < arrLen; i += 1) {
    const num: number = arr[i]
    if (acc + num > LIMIT) {
      return result
    }
    acc += num
    result += 1
  }

  return result
}

maxNumberOfApples([100, 200, 150, 1000]) //?
maxNumberOfApples([900, 950, 800, 1000, 700, 800]) //?
