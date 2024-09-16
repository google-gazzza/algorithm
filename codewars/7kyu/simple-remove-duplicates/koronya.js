// [JS][7kyu] Simple remove duplicates
// simple-remove-duplicates
// https://www.codewars.com/kata/5ba38ba180824a86850000f7/train/javascript

const solve = (arr) => {
  const set = new Set()
  return arr
    .reverse()
    .filter((item) => {
      if (!set.has(item)) {
        set.add(item)
        return true
      }
      return false
    })
    .reverse()
}

solve([3, 4, 4, 3, 6, 3])
solve([1, 2, 1, 2, 1, 2, 3])
solve([1, 2, 3, 4])
solve([1, 1, 4, 5, 1, 2, 1])
solve([1, 2, 1, 2, 1, 1, 3])
