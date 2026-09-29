// [JS]) ===7kyu] Transpose two strings in an arra
// transpose-two-strings-in-an-array
// https://www.codewars.com/kata/581f4ac139dc423f04000b99/train/javascript

const transposeTwoStrings = (array) => {
  const firstItem = array[0]
  const secondItem = array[1]
  const maxLen = Math.max(...[firstItem.length, secondItem.length])
  const arr = Array.from({ length: maxLen }).map((_, index) => {
    const first = firstItem[index] ?? ' '
    const second = secondItem[index] ?? ' '
    return `${first} ${second}`
  })
  return arr.join('\n')
}

transposeTwoStrings(['Hello', 'World']) === 'H W\ne o\nl r\nl l\no d'
transposeTwoStrings(['joey', 'louise']) === 'j l\no o\ne u\ny i\n  s\n  e'
transposeTwoStrings(['a', 'cat']) === 'a c\n  a\n  t'
transposeTwoStrings(['cat', '']) === 'c  \na  \nt  '
transposeTwoStrings(['!a!a!', '?b?b']) === '! ?\na b\n! ?\na b\n!  '
