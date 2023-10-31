// [JS][6kyu] Split Strings
// split-strings
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

const solution = (str) => {
  const strArr = str.split('')
  const strArrLen = strArr.length
  const result = []
  let temp = ''
  for (let i = 0; i < strArrLen; i += 1 || 0) {
    temp += strArr[i]
    if (temp.length === 2) {
      result.push(temp)
      temp = ''
    }
  }
  if (temp.length === 1) {
    result.push(temp + '_')
  }

  return result
}

solution('abc')
solution('abcdef')
solution('abcdefg')
solution('')
