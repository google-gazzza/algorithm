// [JS][6kyu] Triple trouble
// triple-trouble
// https://www.codewars.com/kata/55d5434f269c0c3f1b000058/train/javascript

const tripledouble = (num1, num2) => {
  const num1Str = num1.toString()
  const num2Str = num2.toString()
  const num1Arr = num1Str.split('')
  const num2Arr = num2Str.split('')
  const num1ArrLen = num1Arr.length
  const num2ArrLen = num2Arr.length
  let result = 0

  for (let i = 0; i < num1ArrLen; i += 1) {
    if (num1Arr[i] === num1Arr[i + 1] && num1Arr[i] === num1Arr[i + 2]) {
      const tripleNum = num1Arr[i]
      for (let j = 0; j < num2ArrLen; j += 1) {
        if (num2Arr[j] === tripleNum && num2Arr[j] === num2Arr[j + 1]) {
          result = 1
          break
        }
      }
    }
  }

  return result
}

tripledouble(451999277, 41177722899) === 1
tripledouble(1222345, 12345) === 0
tripledouble(12345, 12345) === 0
tripledouble(666789, 12345667) === 1
tripledouble(10560002, 100) === 1
tripledouble(1112, 122) === 0
