// [JS][7kyu] Odd-Even String Sort
// odd-even-string-sort
// https://www.codewars.com/kata/580755730b5a77650500010c/train/javascript

const sortMyString = (S) => {
  const strLen = S.length
  const oddStr = []
  const evenStr = []
  for (let i = 0; i < strLen; i += 1 || 0) {
    if (i % 2 === 0) {
      evenStr.push(S[i])
    } else {
      oddStr.push(S[i])
    }
  }

  return `${evenStr.join('')}${' '}${oddStr.join('')}`
}

sortMyString('CodeWars')
sortMyString("YCOLUE'VREER")
