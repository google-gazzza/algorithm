// [JS][7kyu] Simple Fun #51: Array Previous Less
// simple-fun-51-array-previous-less
// https://www.codewars.com/kata/588856a82ffea640c80000cc/train/javascript

const arrayPreviousLess = (arr) => {
  return arr.map((item, index) => {
    for (let i = index - 1; i >= 0; i -= 1) {
      if (arr[i] < item) {
        return arr[i]
      }
    }
    return -1
  })
}

arrayPreviousLess([3, 5, 2, 4, 5])

arrayPreviousLess([2, 2, 1, 3, 4, 5, 5, 3])

arrayPreviousLess([3, 2, 1])
