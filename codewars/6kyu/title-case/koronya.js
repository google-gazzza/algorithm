// [JS][6kyu] Title Case
// title-case
// https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript

const convertCapitalize = (str) => {
  const [first, ...rest] = str
  return `${first.toUpperCase()}${rest.join('').toLowerCase()}`
}

const isMatched = (strA, strB) => strA.toLowerCase() === strB.toLowerCase()

const titleCase = (title, minorWords) => {
  if (title === '') {
    return ''
  }
  const minorSet = new Set(minorWords?.split(' ').map((item) => item.toLowerCase()))
  const [first, ...rest] = title.split(' ')
  const convertArr = rest.map((item) => (minorSet.has(item.toLowerCase()) === true ? item.toLowerCase() : convertCapitalize(item)))
  return [convertCapitalize(first), ...convertArr].join(' ')
}

titleCase('a clash of KINGS', 'a an the of')
titleCase('THE WIND IN THE WILLOWS', 'The In')
titleCase('the quick brown fox')
titleCase('')
