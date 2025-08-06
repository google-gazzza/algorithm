// [JS][7kyu] EAN Validation
// ean-validation
// https://www.codewars.com/kata/55563df50dda59adf900004d/train/javascript

const validateEAN = (eanCode) => {
  const numArr = eanCode.split('')
  const checksum = numArr.pop()
  const sum = numArr.reduce((acc, cur, index) => {
    const num = Number(cur)
    if (index % 2 === 0) {
      return acc + num
    } else {
      return acc + num * 3
    }
  }, 0)

  if (sum % 10 === 0) {
    return checksum === '0'
  }
  return 10 - (sum % 10) === Number(checksum)
}

validateEAN('9783815820865') === true
validateEAN('9783815820864') === false
validateEAN('9783827317100') === true
