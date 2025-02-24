// [JS][7kyu] Computer problem series #1: Fill the Hard Disk Drive
// computer-problem-series-1-fill-the-hard-disk-drive
// https://www.codewars.com/kata/5d49c93d089c6e000ff8428c/train/javascript

const save = (sizes, hd) => {
  let result = 0
  let sum = 0
  const sizesLen = sizes.length
  for (let i = 0; i < sizesLen; i += 1 || 0) {
    sum += sizes[i]
    if (sum > hd) {
      break
    }
    result += 1
  }
  return result
}

save([4, 4, 4, 3, 3], 12) === 3
save([4, 4, 4, 3, 3], 11) === 2
save([4, 8, 15, 16, 23, 42], 108) === 6
save([13], 13) === 1
save([1, 2, 3, 4], 250) === 4
save([100], 500) === 1
save([11, 13, 15, 17, 19], 8) === 0
save([45], 12) === 0
