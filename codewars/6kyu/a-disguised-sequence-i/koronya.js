// [JS][6kyu] A disguised sequence (I)
// a-disguised-sequence-i
// https://www.codewars.com/kata/563f0c54a22b9345bf000053/train/javascript

const fcnMap = new Map()
fcnMap.set(0, 1)
fcnMap.set(1, 2)

// 6ab - 5ac + bc = 0
// 5ac - bc = 6ab
// (5a - b)c = 6ab
// c = 6ab / (5a - b)

// c = an
// b = an-1 = d1
// a = an-2 = d2

const fcn = (n) => {
  if (fcnMap.has(n)) {
    return fcnMap.get(n)
  }
  const d1 = fcn(n - 1)
  const d2 = fcn(n - 2)
  const value = (6 * d1 * d2) / (5 * d2 - d1)

  fcnMap.set(n, value)
  return value
}

fcn(2)
fcn(17)
fcn(21)
fcn(14)
fcn(43)
fcn(19)
