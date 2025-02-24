// [JS][6kyu] Expressing Integers as Sum of Powers of Three
// expressing-integers-as-sum-of-powers-of-three
// https://www.codewars.com/kata/629351de1bd1bbae0cdaf445

// 1, 3, 9, 27, 81, 243, 729, 2187, 6561, 19683
// 1, 4, 13, 40, 121, 364, 1093, 3280, 9841, 29524

const getMaxThreeLength = (n) => {
  const absN = n > 0 ? n : -1n * n
  let result = 0n
  let i = 0n
  while (result < absN) {
    result += 3n ** i
    i += 1n
  }
  return i
}

// n: BigInt
const asSumOfPowersOf3 = (n) => {
  if (n === 0n) {
    return '0'
  }
  const maxThreeLength = getMaxThreeLength(n)
  const result = Array.from({ length: Number(maxThreeLength) }).map((_) => 0)
  let num = n
  while (num !== 0n) {
    const isPlus = num > 0
    const digitNumber = getMaxThreeLength(num) - 1n
    result[digitNumber] = isPlus ? '+' : '-'
    num -= (isPlus ? 1n : -1n) * 3n ** digitNumber
  }

  return result.join('')
}

asSumOfPowersOf3(0n) === '0'
asSumOfPowersOf3(3n) === '0+'
asSumOfPowersOf3(-4n) === '--'
asSumOfPowersOf3(-13n) === '---'
asSumOfPowersOf3(81n) === '0000+'
asSumOfPowersOf3(-360n) === '00----'
asSumOfPowersOf3(196n) === '+-++-+'
asSumOfPowersOf3(1066n) === '+++0+++'
