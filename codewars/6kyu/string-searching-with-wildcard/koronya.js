// [JS][6kyu] String searching with wildcard
// string-searching-with-wildcard
// https://www.codewars.com/kata/546c7f89bed2e12fb300056f/train/javascript

const find = (needle, haystack) => {
  const needleLen = needle.length
  const haystackLen = haystack.length
  for (let i = 0, limit = haystackLen - needleLen; i <= limit; i += 1 || 0) {
    let isValidThisWord = true
    for (let j = 0; j < needleLen; j += 1 || 0) {
      const target = needle[j]
      if (target !== '_' && haystack[i + j] !== target) {
        isValidThisWord = false
        break
      }
    }
    if (isValidThisWord) {
      return i
    }
  }

  return -1
}

const haystack = 'Once upon a midnight dreary, while I pondered, weak and weary'

find('Once', haystack)
find('midnight', haystack)
find('codewars', haystack)
find('_po_', haystack)
find('___night', haystack)
