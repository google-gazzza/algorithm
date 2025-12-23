// [JS][6kyu] Decimals or groups of thousands??
// decimals-or-groups-of-thousands
// https://www.codewars.com/kata/58379c3b51e3b680aa000164/train/javascript

const US_REGEX = /^\d{1,3}(,\d{3})*(\.\d+)?$|^\d+(\.\d+)?$/
const EU_REGEX = /^\d{1,3}(\.\d{3})*(,\d+)?$|^\d+(,\d+)?$/

const isUsNumber = (str) => US_REGEX.test(str)
const isEuNumber = (str) => EU_REGEX.test(str)
const getNumber = (str) => {
  if (isUsNumber(str)) {
    return parseFloat(str.replace(/,/g, ''))
  } else if (isEuNumber(str)) {
    return parseFloat(str.replace(/\./g, '').replace(/,/g, '.'))
  }
}

const sumUpNumbers = (arr) => {
  const sum = arr.map(getNumber).reduce((acc, cur) => acc + cur, 0)
  return sum.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

sumUpNumbers(['1,234.34', '1.324,2', '14']) === '2,572.54'
sumUpNumbers(['4.44', '8', '14,56']) === '27.00'
sumUpNumbers(['4.4', '8.234,1', '14,56']) === '8,253.06'
sumUpNumbers(['4,444,999', '8.234,1', '14,56']) === '4,453,247.66'
sumUpNumbers(['424', '8.234,1', '14,56']) === '8,672.66'
