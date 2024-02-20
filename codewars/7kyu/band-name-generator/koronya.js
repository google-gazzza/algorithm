// [JS][7kyu] Band name generator
// band-name-generator
// https://www.codewars.com/kata/59727ff285281a44e3000011/train/javascript

const bandNameGenerator = (str) => {
  const strLen = str.length
  const firstStr = str[0]
  const restStr = str.slice(1)
  return firstStr === str[strLen - 1] ? `${firstStr.toUpperCase()}${restStr}${restStr}` : `The ${firstStr.toUpperCase()}${restStr}`
}

bandNameGenerator('knife') === 'The Knife'
bandNameGenerator('tart') === 'Tartart'
bandNameGenerator('sandles') === 'Sandlesandles'
bandNameGenerator('bed') === 'The Bed'
