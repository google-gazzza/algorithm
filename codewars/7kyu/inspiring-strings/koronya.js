// [JS][7kyu] Inspiring Strings
// inspiring-strings
// https://www.codewars.com/kata/5939ab6eed348a945f0007b2/train/javascript

const longestWord = (stringOfWords) => {
  const arr = stringOfWords.split(' ')
  const maxLen = Math.max(...arr.map((item) => item.length))
  const maxLenArr = arr.filter((item) => item.length === maxLen)
  return maxLenArr[maxLenArr.length - 1]
}

longestWord('a b c d e fgh') === 'fgh'
longestWord('one two three') === 'three'
longestWord('red blue grey') === 'grey'
