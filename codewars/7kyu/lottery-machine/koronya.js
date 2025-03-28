// [JS][7kyu] Lottery machine
// lottery-machine
// https://www.codewars.com/kata/5832db03d5bafb7d96000107/train/javascript

const isNumberString = (str) => /^\d+$/.test(str)

const lottery = (str) => {
  const numSet = new Set()
  const isUniqueNumber = (str) => {
    if (numSet.has(str)) {
      return false
    }
    numSet.add(str)
    return true
  }
  const result = str
    .split('')
    .filter((item) => isNumberString(item) && isUniqueNumber(item))
    .join('')

  return result.length === 0 ? 'One more run!' : result
}

lottery('hPrBKWDH8yc6Lt5NQZWQ') === '865'
lottery('ynMAisVpHEqpqHBqTrwH') === 'One more run!'
lottery('hPr555') === '5'
lottery('wQ8Hy0y5m5oshQPeRCkG') === '805'
lottery('ffaQtaRFKeGIIBIcSJtg') === 'One more run!'
