// [JS][7kyu] Sort Out The Men From Boys
// sort-out-the-men-from-boys
// https://www.codewars.com/kata/5af15a37de4c7f223e00012d/train/javascript

const menFromBoys = (arr) => {
  const uniqueArr = [...new Set(arr)]
  const oddArr = uniqueArr.filter((item) => Math.abs(item) % 2 === 1)
  const evenArr = uniqueArr.filter((item) => item % 2 === 0)

  oddArr.sort((a, b) => b - a)
  evenArr.sort((a, b) => a - b)

  return [...evenArr, ...oddArr]
}

// menFromBoys([7, 3, 14, 17])
// menFromBoys([2, 43, 95, 90, 37])
// menFromBoys([20, 33, 50, 34, 43, 46])
// menFromBoys([82, 91, 72, 76, 76, 100, 85])
// menFromBoys([2, 15, 17, 15, 2, 10, 10, 17, 1, 1])
menFromBoys([-32, -39, -35, -41])
// menFromBoys([-64, -71, -63, -66, -65])
// menFromBoys([-94, -99, -100, -99, -96, -99])
// menFromBoys([-53, -26, -53, -27, -49, -51, -14])
// menFromBoys([-17, -45, -15, -33, -85, -56, -86, -30])
// menFromBoys([12, 89, -38, -78])
// menFromBoys([2, -43, 95, -90, 37])
// menFromBoys([82, -61, -87, -12, 21, 1])
// menFromBoys([63, -57, 76, -85, 88, 2, -28])
// menFromBoys([49, 818, -282, 900, 928, 281, -282, -1])
