// [JS][6kyu] A String of Sorts
// a-string-of-sorts
// https://www.codewars.com/kata/536c6b8749aa8b3c2600029a/train/javascript

const sortString = (string, ordering) => {
  const order = [...new Set([...ordering])]
  const stringArr = string.split('')
  const filteredArr = stringArr.filter((char) => order.includes(char))
  const noFilteredArr = stringArr.filter((char) => !order.includes(char))
  const filteredSortArr = filteredArr.sort((a, b) => order.indexOf(a) - order.indexOf(b))

  return filteredSortArr.join('') + noFilteredArr.join('')
}

sortString('foos', 'of') === 'oofs'
sortString('string', 'gnirts') === 'gnirts'
sortString('banana', 'abn') === 'aaabnn'
