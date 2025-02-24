// [JS][7kyu] Blowing Birthday Candles
// blowing-birthday-candles
// https://www.codewars.com/kata/6630da20f925eb3007c5a498/train/javascript

const getDownValue = (num) => (num > 0 ? num - 1 : 0)

const blowCandles = (str) => {
  const strLen = str.length
  const arr = str.split('').map((item) => Number(item))
  let count = 0
  let firstNonZeroIndex = arr.findIndex((item) => item !== 0)
  while (firstNonZeroIndex !== -1) {
    const limit = Math.min(firstNonZeroIndex + 3, strLen)
    for (let i = firstNonZeroIndex; i < limit; i += 1 || 0) {
      arr[i] = getDownValue(arr[i])
    }
    firstNonZeroIndex = arr.findIndex((item) => item !== 0)
    count += 1
  }

  return count
}

blowCandles('1321') === 3
blowCandles('0323456')
blowCandles('2113')
