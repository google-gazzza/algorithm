// [JS][7kyu] Simple Fun #204: Smallest Integer
// simple-fun-204-smallest-integer
// https://www.codewars.com/kata/58fd96a59a9f65c2e900008d/train/javascript

const smallestInteger = (matrix) => {
  const arr = matrix.flat()
  const set = new Set(arr)
  let i = 0
  while (set.has(i)) {
    i += 1
  }
  return i
}

smallestInteger([
  [0, 2],
  [5, 1],
]) === 3
