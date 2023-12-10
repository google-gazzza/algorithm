// [JS][6kyu] Number Format
// number-format
// https://www.codewars.com/kata/565c4e1303a0a006d7000127/train/javascript

const numberFormat = (number) => {
  const isPlus = number > 0 ? true : false
  const numberStr = isPlus ? String(number) : String(number).slice(1)
  const numberStrLen = numberStr.length
  const result = []
  let start = Math.max(0, numberStrLen - 3)
  let end = numberStrLen
  let resultString = ''
  while (resultString.length < numberStrLen) {
    const str = numberStr.substring(start, end)
    resultString += str
    result.push(str)
    end = start
    start = Math.max(start - 3, 0)
  }

  return `${isPlus ? '' : '-'}${result.reverse().join(',')}`
}

// numberFormat(10)
// numberFormat(100200)
// numberFormat(2678543)
numberFormat(100000) === '100,000'
numberFormat(5678545) === '5,678,545'
numberFormat(-420902) === '-420,902'
