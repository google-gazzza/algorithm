// Runtime: 60 ms, faster than 88.92% of JavaScript online submissions for Partition Labels.
// Memory Usage: 35.6 MB, less than 41.67% of JavaScript online submissions for Partition Labels.
const partitionLabels = S => {
  const endMap = new Map()
  const SLen = S.length
  for (let i = 0; i < SLen; i = i + 1 | 0) {
    endMap.set(S[i], i)
  }

  let index = 0
  const divideArr = []
  while (index < SLen) {
    const str = S[index]
    let end = endMap.get(str)
    index += 1
    while (index <= end) {
      const candidateEnd = endMap.get(S[index])
      if (end < candidateEnd) {
        end = candidateEnd
      }
      index += 1
    }
    divideArr.push(end)
    index = end + 1
  }

  let prev
  const resultArr = divideArr.map((item, idx) => {
    if (idx === 0) {
      prev = item
      return item + 1
    } else {
      const returnValue = item - prev
      prev = item
      return returnValue
    }
  })

  return resultArr
}
