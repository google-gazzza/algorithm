// [JS][7kyu] Partial Word Searching
// partial-word-searching
// https://www.codewars.com/kata/54b81566cd7f51408300022d/train/javascript

const wordSearch = (query, seq) => {
  const lowerQuery = query.toLowerCase()
  const result = seq.filter((item) => item.toLowerCase().includes(lowerQuery))
  return result.length > 0 ? result : ['Empty']
}

wordSearch('ab', ['za', 'ab', 'abc', 'zab', 'zbc'])
wordSearch('aB', ['za', 'ab', 'abc', 'zab', 'zbc'])
wordSearch('ab', ['za', 'aB', 'Abc', 'zAB', 'zbc'])
wordSearch('abcd', ['za', 'aB', 'Abc', 'zAB', 'zbc'])
