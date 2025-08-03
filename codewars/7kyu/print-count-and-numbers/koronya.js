// [JS][7kyu] Print count and numbers
// print-count-and-numbers
// https://www.codewars.com/kata/559af787b4b8eac78b000022/train/javascript

const countMe = (data) => {
  if (!/^\d+$/.test(data)) {
    return ''
  }

  const dataLength = data.length
  let prev = data[0]
  let count = 1
  let resultStr = ''
  for (let i = 1; i < dataLength; i += 1) {
    const now = data[i]
    if (prev !== now) {
      resultStr += `${count}${prev}`
      prev = now
      count = 1
    } else {
      count += 1
    }
  }
  resultStr += `${count}${prev}`
  return resultStr
}

countMe('1123') === '211213'
countMe('1') === '11'
countMe('11') === '21'
countMe('a') === ''
countMe('a123') === ''
countMe('21') === '1211'
countMe('1211') === '111221'
countMe('12322212223443') === '111213321132132413'
countMe('') === ''
countMe('123a') === ''
