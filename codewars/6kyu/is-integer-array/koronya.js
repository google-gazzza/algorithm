// [JS][6kyu] Is Integer Array?
// is-integer-array
// https://www.codewars.com/kata/52a112d9488f506ae7000b95/train/javascript

const isIntArray = (arr) => {
  if (!arr) {
    return false
  }
  return arr.every((item) => Number.isInteger(item))
}

isIntArray([])
isIntArray([1, 2, 3, 4])
isIntArray([1, 2, 3, NaN])
