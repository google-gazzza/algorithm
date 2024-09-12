// [JS][6kyu] Simple Fun #315: Stock God
// simple-fun-315-stock-god
// https://www.codewars.com/kata/5934b1db00f77d7d84000016/train/javascript

const getModifyN = (x) => Math.floor((-3 + Math.sqrt(9 + 8 * x)) / 2)
const getStartOfN = (n) => (n * (n - 1)) / 2 + 2
const getFirstOfN = (n) => ((n + 3) * n) / 2

const stockPrice = (n) => {
  const modifyN = getModifyN(n)
  const firstOfN = getFirstOfN(modifyN)
  const diff = n - firstOfN
  const value = getStartOfN(modifyN)

  if (diff === 0) {
    return value
  } else if (diff === 1) {
    return value - 1
  }
  return value + diff - 2
}

stockPrice(10)

// stockPrice(1) === 1

// stockPrice(2) === 2

// stockPrice(3) === 1

// stockPrice(4) === 2

// stockPrice(5) === 3

// stockPrice(10) === 4

// stockPrice(15) === 7

// stockPrice(100) === 76

// stockPrice(1000) === 914
