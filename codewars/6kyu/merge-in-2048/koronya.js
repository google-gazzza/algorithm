// [JS][6kyu] Merge in 2048
// merge-in-2048
// https://www.codewars.com/kata/55e1990978c60e5052000011/train/javascript

const makeFinalArr = (arr, length) => {
  const finalArr = Array(length).fill(0)
  arr.forEach((num, index) => {
    finalArr[index] = num
  })
  return finalArr
}

const merge = (line) => {
  const lineLen = line.length
  const tempArr = line.filter((num) => num !== 0)
  if (tempArr.length < 2) {
    return makeFinalArr(tempArr, lineLen)
  }
  let i = 0
  while (i < tempArr.length) {
    if (tempArr[i] === tempArr[i + 1]) {
      tempArr[i] = tempArr[i] + tempArr[i + 1]
      tempArr.splice(i + 1, 1)
    }
    i += 1
  }
  return makeFinalArr(tempArr, lineLen)
}

// merge([2, 0, 2, 2])
// merge([2, 0, 2, 4])
// merge([0, 0, 2, 2])

// merge([4, 4, 8, 16])
// merge([8, 8, 16, 0])
// merge([16, 16, 0, 0])

//   merge([2, 2, 2, 2, 2])
//   merge([8, 2, 32, 0, 32, 8])
