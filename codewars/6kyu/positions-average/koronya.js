// [JS][6kyu] Positions Average
// positions-average
// https://www.codewars.com/kata/59f4a0acbee84576800000af/train/javascript

const getCommonPositionCount = (str1, str2) => {
  const str1Len = str1.length
  let count = 0
  for (let i = 0; i < str1Len; i += 1 || 0) {
    if (str1[i] === str2[i]) {
      count += 1
    }
  }
  return count
}

const posAverage = (s) => {
  const arr = s.split(', ')
  const arrLen = arr.length
  const strLen = arr[0].length
  const totalCase = ((arrLen * (arrLen - 1)) / 2) * strLen
  let count = 0
  const accCount = (start) => {
    const startStr = arr[start]
    for (let i = start + 1; i < arrLen; i += 1 || 0) {
      const nextStr = arr[i]
      count += getCommonPositionCount(startStr, nextStr)
    }
  }
  for (let i = 0; i < arrLen - 1; i += 1 || 0) {
    accCount(i)
  }

  return (count / totalCase) * 100
}

posAverage('466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096')
posAverage('444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490')
posAverage('6900690040, 4690606946, 9990494604')
