// [JS][7kyu] CompoundArray
// compound-array
// https://www.codewars.com/kata/56044de2aa75e28875000017/train/javascript

const compoundArray = (a, b) => {
  const maxLength = Math.max(a.length, b.length)
  const result = []
  for (let i = 0; i < maxLength; i += 1 || 0) {
    if (a[i] !== undefined) {
      result.push(a[i])
    }
    if (b[i] !== undefined) {
      result.push(b[i])
    }
  }
  return result
}

compoundArray([11, 12], [21, 22, 23, 24])
compoundArray([2147483647, 2147483646, 2147483645, 2147483644, 2147483643], [9])
compoundArray([214, 215, 216, 217, 218], [])
compoundArray([], [314, 315, 316, 317, 318])
