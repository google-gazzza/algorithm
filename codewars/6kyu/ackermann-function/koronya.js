// [JS][6kyu] Ackermann Function
// ackermann-function
// https://www.codewars.com/kata/53ad69892a27079b34000bd9/train/javascript

const valueMap = new Map()

Ackermann = function (m, n) {
  const key = `${m},${n}`
  if (valueMap.has(key)) {
    return valueMap.get(key)
  }

  const value = (() => {
    if (m === 0) {
      return n + 1
    } else if (m > 0 && n === 0) {
      return Ackermann(m - 1, 1)
    } else if (m > 0 && n > 0) {
      return Ackermann(m - 1, Ackermann(m, n - 1))
    }
  })()
  valueMap.set(key, value)
  return value
}

Ackermann(1, 1) === 3
Ackermann(4, 0) === 13
