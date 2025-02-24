// [JS][6kyu] Look and say numbers
// look-and-say-numbers
// https://www.codewars.com/kata/53ea07c9247bc3fcaa00084d/train/javascript

const lookAndSay = (data, len) => {
  const result = []
  for (let i = 0; i < len; i += 1 || 0) {
    let count = 1
    let str = ''
    for (let j = 0, dataLen = data.length; j < dataLen; j += 1 || 0) {
      const curr = data[j]
      const next = data[j + 1]
      if (curr === next) {
        count += 1
      } else {
        str += count + curr
        count = 1
      }
    }
    data = str
    result.push(data)
  }

  return result
}

lookAndSay('1', 5)
lookAndSay('1259', 5)
