// [JS][7kyu] Comfortable words
// comfortable-words
// https://www.codewars.com/kata/56684677dc75e3de2500002b/train/javascript

const leftHandSet = new Set('qwertasdfgzxcvb')

const comfortableWord = (word) => {
  const wordLen = word.length
  let prev = word[0]
  let isPrevLeft = leftHandSet.has(prev)
  for (let i = 1; i < wordLen; i += 1) {
    const char = word[i]
    const isLeft = leftHandSet.has(char)
    if (isPrevLeft === isLeft) {
      return false
    }
    prev = char
    isPrevLeft = isLeft
  }

  return true
}

comfortableWord('yams')
comfortableWord('test')
