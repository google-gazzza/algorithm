// [JS][7kyu] How Green Is My Valley?
// how-green-is-my-valley
// https://www.codewars.com/kata/56e3cd1d93c3d940e50006a4/train/javascript

const makeValley = (arr) => {
  arr.sort((a, b) => b - a)
  const leftArr = arr.filter((_, index) => index % 2 === 0)
  const rightArr = arr.filter((_, index) => index % 2 === 1)
  return [...leftArr, ...rightArr.reverse()]
}

// makeValley([79, 35, 54, 19, 35, 25])
// makeValley([67, 93, 100, -16, 65, 97, 92])
// makeValley([66, 55, 100, 68, 46, -82, 12, 72, 12, 38])

// makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1])
// makeValley([20, 7, 6, 2])
// makeValley([14, 10, 8])
// makeValley([20, 18, 17, 13, 12, 12, 10, 9, 4, 2, 2, 1, 1])
// makeValley([20, 16, 14, 10, 1])
// makeValley([19, 19, 18, 14, 12, 11, 9, 7, 4])
// makeValley([20, 18, 16, 15, 14, 14, 13, 13, 10, 9, 4, 4, 4, 1])
// makeValley([20, 20, 16, 14, 12, 12, 11, 10, 3, 2])
// makeValley([19, 17, 16, 15, 13, 8, 5, 5, 4, 4, 4])
// makeValley([19, 8, 6])
