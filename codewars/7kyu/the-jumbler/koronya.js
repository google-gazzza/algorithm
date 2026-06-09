// [JS][7kyu] The Jumbler
// the-jumbler
// https://www.codewars.com/kata/69269262ced9e95dc63abd1e/train/javascript

const jumbler = (indices) => {
  let firstItem = indices[0]
  let count = 0
  while (firstItem !== 0) {
    indices.unshift(...indices.splice(firstItem, 1))
    firstItem = indices[0]
    count += 1
  }

  return count
}

jumbler([2, 0, 3, 1]) === 4
