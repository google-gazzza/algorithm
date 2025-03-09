// [JS][7kyu] Return substring instance count
// return-substring-instance-count
// https://www.codewars.com/kata/5168b125faced29f66000005/train/javascript

const solution = (fullText, searchText) => {
  let count = 0
  let findIndex = fullText.indexOf(searchText)
  while (findIndex !== -1) {
    count += 1
    findIndex = fullText.indexOf(searchText, findIndex + 1)
  }
  return count
}

solution('abcdeb', 'b') === 2
solution('abc', 'b') === 1
solution('abbc', 'bb') === 1
