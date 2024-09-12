// [JS][7kyu] Mean Means
// mean-means
// https://www.codewars.com/kata/57c6b44f58da9ea6c20003da/train/javascript

const geo_mean = (nums, arith_mean) => {
  const totalLength = nums.length + 1
  const totalSum = arith_mean * totalLength
  const rest = totalSum - nums.reduce((acc, cur) => acc + cur, 0)
  const arr = [...nums, rest]

  return Math.pow(
    arr.reduce((acc, cur) => acc * cur, 1),
    1 / totalLength,
  )
}

const EPSILON = 1e-12

geo_mean([2], 10)
geo_mean([1, 2], 3)
geo_mean([4, 6, 7, 2], 5)
