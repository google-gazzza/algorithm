// [JS][7kyu] Simple Fun #50: Array Conversion
// simple-fun-50-array-conversion
// https://www.codewars.com/kata/588854201361435f5e0000bd/train/javascript

const convertArr = (arr, isSum = true) => {
  const arrLen = arr.length
  const limit = arrLen / 2
  const resultArr = []
  for (let i = 0; i < limit; i += 1 || 0) {
    if (isSum) {
      resultArr.push(arr[2 * i] + arr[2 * i + 1])
    } else {
      resultArr.push(arr[2 * i] * arr[2 * i + 1])
    }
  }
  return resultArr
}

const arrayConversion = (arr) => {
  let loopCount = 0
  while (arr.length > 1) {
    arr = convertArr(arr, loopCount % 2 === 0)
    loopCount += 1
  }
  return arr[0]
}

arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]) === 186
arrayConversion([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) === 64
arrayConversion([3, 3, 5, 5]) === 60
