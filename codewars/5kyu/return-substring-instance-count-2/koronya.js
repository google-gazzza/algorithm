// [JS][5kyu] Return substring instance count - 2
// return-substring-instance-count-2
// https://www.codewars.com/kata/52190daefe9c702a460003dd/train/javascript

const searchSubstr = (fullText, searchText, allowOverlap = true) => {
  const searchTextLen = searchText.length
  if (searchTextLen === 0) {
    return 0
  }
  let text = fullText
  let count = 0
  let index = text.indexOf(searchText)
  while (index !== -1) {
    count += 1
    text = allowOverlap === true ? text.substring(index + 1) : text.substring(index + searchTextLen)
    index = text.indexOf(searchText)
  }

  return count
}

searchSubstr('aa_bb_cc_dd_bb_e', 'bb') === 2
searchSubstr('aaabbbcccc', 'bbb') === 1
searchSubstr('aaa', 'aa') === 2
searchSubstr('aaa', '') === 0
searchSubstr('aaa', 'aa', false) === 1
