// [JS][5kyu] Weight for weight
// weight-for-weight
// https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript

const mappedFnc = (str) => ({ str, sum: str.split('').reduce((acc, cur) => acc + Number(cur), 0) })

const sortFnc = (a, b) => {
  if (a.sum === b.sum) {
    return a.str.localeCompare(b.str)
  }
  return a.sum - b.sum
}

const orderWeight = (strng) => {
  return strng
    .split(' ')
    .map(mappedFnc)
    .sort(sortFnc)
    .map((item) => item.str)
    .join(' ')
}

orderWeight('56 65 74 180 99 68 86 100 90')
orderWeight('103 123 4444 99 2000')
orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123')
orderWeight('11 10003 1234000 44444444 9999 2000 11 22 123')
