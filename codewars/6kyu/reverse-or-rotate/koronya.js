// [JS][6kyu] Reverse or rotate?
// reverse-or-rotate
// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/javascript

const getReverseStr = (str) => str.split('').reverse().join('')
const getLeftShiftStr = (str) => str.slice(1) + str[0]
const getMatchedStr = (str) => {
  let sum = 0
  for (const num of str) {
    sum += num ** 3
  }
  return sum % 2 === 0 ? getReverseStr(str) : getLeftShiftStr(str)
}

const revrot = (str, sz) => {
  if (str === '' || sz === 0) {
    return ''
  }
  const strLen = str.length
  const limit = Math.floor(strLen / sz)
  return Array.from({ length: limit })
    .map((_, index) => str.slice(sz * index, sz * index + sz))
    .map((item) => getMatchedStr(item))
    .join('')
}

// revrot('123456987654', 6)
// revrot('123456987653', 6)
// revrot('66443875', 4)
// revrot('66443875', 8)
// revrot('664438759', 4)
// revrot('66443875', 4)
// revrot('664438769', 8)

revrot('123456987654', 6)
revrot('123456987653', 6)
revrot('66443875', 4)
revrot('66443875', 8)
revrot('664438769', 8)
revrot('123456779', 8)
revrot('', 8)
revrot('123456779', 0)
revrot('563000655734469485', 4)
revrot('66443875', 40)
