// [JS][6kyu] Write Number in Expanded Form - Part 2
// write-number-in-expanded-form-part-2
// https://www.codewars.com/kata/58cda88814e65627c5000045/train/javascript

const getA = (numberString) => {
  const numberStringLen = numberString.length
  return numberString
    .split('')
    .map((item, i) => Number(item) * 10 ** (numberStringLen - i - 1))
    .filter((item) => item !== 0)
}

const getTenInvolution = (numString) => `1${'0'.repeat(Number(numString))}`

const getB = (pointString) => {
  return pointString
    .split('')
    .map((item, i) => (item === '0' ? '0' : `${item}/${getTenInvolution(i + 1)}`))
    .filter((item) => item !== '0')
}

const expandedForm = (num) => {
  const [number, point] = String(num).split('.')
  return [...getA(number), ...getB(point)].join(' + ')
}

expandedForm(807.304) === '800 + 7 + 3/10 + 4/1000'
expandedForm(807.304) === '800 + 7 + 3/10 + 4/1000'
expandedForm(1.24) === '1 + 2/10 + 4/100'
expandedForm(4.28) === '4 + 2/10 + 8/100'
expandedForm(7.304) === '7 + 3/10 + 4/1000'
