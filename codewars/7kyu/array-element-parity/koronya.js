// [JS][7kyu] Array element parity
// array-element-parity
// https://www.codewars.com/kata/5a092d9e46d843b9db000064/train/javascript

const solve2 = (arr) => {
  const plusArr = []
  const minusArr = []
  arr.forEach((num) => {
    if (num > 0) {
      plusArr.push(num)
    } else {
      minusArr.push(num)
    }
  })
  plusArr.sort((a, b) => a - b)
  minusArr.sort((a, b) => b - a)

  const shortArrLen = Math.min(plusArr.length, minusArr.length)
  for (let i = 0; i < shortArrLen; i += 1 || 0) {
    const plusNum = plusArr[i]
    const minusNum = minusArr[i]
    const absNum = Math.abs(minusNum)
    if (plusNum !== absNum) {
      if (plusArr.includes(absNum)) {
        return plusNum
      } else {
        return minusNum
      }
    }
  }
  return plusArr.length > minusArr.length ? plusArr[shortArrLen] : minusArr[shortArrLen]
}

const solve = (arr) => [...new Set(arr)].reduce((acc, cur) => acc + cur, 0)

// solve([1, -1, 2, -2, 3]) === 3
// solve([-3, 1, 2, 3, -1, -4, -2]) === -4
// solve([1, -1, 2, -2, 3, 3]) === 3
// solve([-110, 110, -38, -38, -62, 62, -38, -38, -38]) === -38
// solve([-9, -105, -9, -9, -9, -9, 105]) === -9
