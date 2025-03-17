// [JS][7kyu] Multiples By Permutations II
// multiples-by-permutations-ii
// https://www.codewars.com/kata/5ba178be875de960a6000187/train/javascript

const getDigitMap = (num) => {
  const digitMap = new Map()
  String(num)
    .split('')
    .forEach((digit) => {
      digitMap.set(digit, (digitMap.get(digit) || 0) + 1)
    })
  return [...digitMap]
    .sort((a, b) => a[0] - b[0])
    .map((item) => `${item[0]}-${item[1]}`)
    .join('>')
}

const findLowestInt = (k) => {
  let lowestInt = 1

  while (true) {
    const str1 = getDigitMap(lowestInt * k)
    const str2 = getDigitMap(lowestInt * (k + 1))
    if (str1 === str2) {
      return lowestInt
    }
    lowestInt += 1
  }
}

// findLowestInt(325) === 477
// findLowestInt(599) === 2394
// findLowestInt(855) === 999
// findLowestInt(1) === 125874
// findLowestInt(100) === 8919
// findLowestInt(1000) === 89919
// findLowestInt(10000) === 899919
