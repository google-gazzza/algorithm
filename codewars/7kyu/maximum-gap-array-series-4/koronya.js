// [JS][7kyu] Maximum Gap (Array Series #4)
// maximum-gap-array-series-4
// https://www.codewars.com/kata/5a7893ef0025e9eb50000013/train/javascript

const getDiff = (a, b) => Math.abs(a - b)

const maxGap = (numbers) => {
  const numbersLength = numbers.length
  numbers.sort((a, b) => a - b)
  let result = 0
  let prev = numbers[0]
  for (let i = 1; i < numbersLength; i += 1) {
    result = Math.max(result, getDiff(prev, numbers[i]))
    prev = numbers[i]
  }
  return result
}

maxGap([13, 10, 2, 9, 5]) === 4
maxGap([13, 3, 5]) === 8
maxGap([24, 299, 131, 14, 26, 25]) === 168
maxGap([-3, -27, -4, -2]) === 23
maxGap([-7, -42, -809, -14, -12]) === 767
maxGap([12, -5, -7, 0, 290]) === 278
maxGap([-54, 37, 0, 64, -15, 640, 0]) === 576
maxGap([130, 30, 50]) === 80
maxGap([1, 1, 1]) === 0
maxGap([-1, -1, -1]) === 0
