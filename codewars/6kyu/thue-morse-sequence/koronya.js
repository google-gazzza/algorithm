// [JS][6kyu] Thue-Morse Sequence
// thue-morse-sequence
// https://www.codewars.com/kata/591aa1752afcb02fa300002a/train/javascript

const getInvertedValue = (value) =>
  value
    .split('')
    .map((v) => (v === '0' ? '1' : '0'))
    .join('')

const valueMap = new Map()
valueMap.set(0, '0')

const getValue = (n) => {
  if (valueMap.has(n)) {
    return valueMap.get(n)
  }
  const beforeValue = getValue(n - 1)
  const nextValue = getInvertedValue(beforeValue)
  const resultValue = beforeValue + nextValue
  valueMap.set(n, resultValue)

  return resultValue
}

const thueMorse = (n) => getValue(Math.ceil(Math.log2(n)) + 1).substring(0, n)

thueMorse(1) === '0'
thueMorse(2) === '01'
thueMorse(5) === '01101'
thueMorse(10) === '0110100110'
