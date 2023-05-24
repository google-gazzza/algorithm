// [JS][6kyu] Dashatize it
// dashatize-it
// https://www.codewars.com/kata/58223370aef9fc03fd000071/train/javascript

const dashatize = (num) => {
  if (isNaN(num) === true) {
    return 'NaN'
  }
  const adjustNum = num < 0 ? String(num * -1) : String(num)
  const adjustNumLen = adjustNum.length
  const resultArr = []
  for (let i = 0; i < adjustNumLen; i += 1) {
    const target = adjustNum[i]
    if (target % 2 === 0) {
      resultArr.push(target)
    } else {
      if (i !== 0 && resultArr[resultArr.length - 1] !== '-') {
        resultArr.push('-')
      }
      resultArr.push(target)
      if (i !== adjustNumLen - 1) {
        resultArr.push('-')
      }
    }
  }

  return resultArr.join('')
}

dashatize(274) === '2-7-4'
dashatize(5311) === '5-3-1-1'
dashatize(86320) === '86-3-20'
dashatize(974302) === '9-7-4-3-02'
dashatize(NaN) === 'NaN'
dashatize(0) === '0'
dashatize(-1) === '1'
dashatize(-28369) === '28-3-6-9'
