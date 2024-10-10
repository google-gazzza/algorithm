// [JS][7kyu] Frequency sequence
// frequency-sequence
// https://www.codewars.com/kata/585a033e3a36cdc50a00011c/train/javascript

const freqSeq = (str, sep) => {
  const strMap = new Map()
  const strArr = str.split('')
  strArr.forEach((str) => {
    if (strMap.has(str) === false) {
      strMap.set(str, 0)
    }
    strMap.set(str, strMap.get(str) + 1)
  })

  return strArr.map((item) => strMap.get(item)).join(sep)
}

freqSeq('hello world', '-') === '1-1-3-3-2-1-1-2-1-3-1'
freqSeq('19999999', ':') === '1:7:7:7:7:7:7:7'
freqSeq('^^^**$', 'x') === '3x3x3x2x2x1'
