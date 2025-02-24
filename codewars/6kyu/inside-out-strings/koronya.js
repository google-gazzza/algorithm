// [JS][6kyu] Inside Out Strings
// inside-out-strings
// https://www.codewars.com/kata/57ebdf1c2d45a0ecd7002cd5/train/javascript

const getString = (str) => {
  const strLen = str.length
  const isEven = strLen % 2 === 0
  const halfLen = Math.floor(strLen / 2)
  const pre = str.substring(0, halfLen).split('').reverse().join('')
  const next = str
    .substring(isEven ? halfLen : halfLen + 1)
    .split('')
    .reverse()
    .join('')
  const mid = isEven ? '' : str[halfLen]

  return `${pre}${mid}${next}`
}

const insideOut = (x) =>
  x
    .split(' ')
    .map((str) => getString(str))
    .join(' ')

insideOut('man i need a taxi up to ubud') === 'man i ende a atix up to budu'
insideOut('what time are we climbing up the volcano') === 'hwta item are we milcgnib up the lovcona'
insideOut('take me to semynak') === 'atek me to mesykan'
