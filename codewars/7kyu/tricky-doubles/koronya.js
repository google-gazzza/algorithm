// [JS][7kyu] Tricky Doubles
// tricky-doubles
// https://www.codewars.com/kata/56971747aa359bdbf800004d/train/javascript

const trickyDoubles = (n) => {
  const nLen = String(n).length
  if (nLen % 2 !== 0) {
    return n * 2
  }

  const nStr = String(n)
  return nStr.slice(0, nLen / 2) === nStr.slice(nLen / 2) ? n : n * 2
}

trickyDoubles(2) === 4
trickyDoubles(4) === 8
trickyDoubles(100100) === 100100
trickyDoubles(4343) === 4343
trickyDoubles(1234) === 2468
trickyDoubles(100) === 200
