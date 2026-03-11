// [JS][7kyu] Stalin Sort
// stalin-sort
// https://www.codewars.com/kata/699af631058f5c12b04f4efe/train/javascript

const stalinSort = (array) => {
  if (array.length === 0) {
    return undefined
  }
  let prev = array[0]
  const arrayLength = array.length
  for (let i = 1; i < arrayLength; i += 1) {
    if (array[i] < prev) {
      array.splice(i, 1)
      i -= 1
    }
    prev = array[i]
  }
}

// stalinSort([1, 2, 3, 4, 5])
// stalinSort([5, 3, 1, 2, 4])
// stalinSort([1, 2, 2, 3, 1, 4])
// stalinSort([3, 1, 4, 1, 5, 9, 2])
// stalinSort([])
