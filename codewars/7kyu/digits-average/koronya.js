// [JS][7kyu] Digits Average
// digits-average
// https://www.codewars.com/kata/5a32526ae1ce0ec0f10000b2/train/javascript

const getValue = (arr) =>
  arr.reduce((acc, cur, index) => {
    if (index === 0) {
      return acc
    }
    return [...acc, Math.round((Number(cur) + Number(arr[index - 1])) / 2)]
  }, [])

const digitsAverage = (input) => {
  let arr = String(input).split('')
  while (arr.length > 1) {
    arr = getValue(arr)
    arr
  }

  return Number(arr[0])
}

digitsAverage(246) === 4
digitsAverage(89) === 9
digitsAverage(2) === 2

digitsAverage(245) === 4
digitsAverage(345) === 5
digitsAverage(346) === 5
