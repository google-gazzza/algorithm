// [JS][7kyu] max diff - easy
// max-diff-easy
// https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/train/javascript

const maxDiff = (list) => {
  if (list.length === 0) {
    return 0
  }
  list.sort((a, b) => a - b)
  return list[list.length - 1] - list[0]
}

maxDiff([0, 1, 2, 3, 4, 5, 6]) === 6
maxDiff([-0, 1, 2, -3, 4, 5, -6]) === 11
maxDiff([0, 1, 2, 3, 4, 5, 16]) === 16
maxDiff([16]) === 0
maxDiff([]) === 0
