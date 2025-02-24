// [JS][6kyu] Simple Sentences
// simple-sentences
// https://www.codewars.com/kata/5297bf69649be865e6000922/train/javascript

const filterPeriod = (arr) => arr.filter((item) => !item.includes('.'))

const makeSentence = (parts) => {
  const adjustParts = filterPeriod(parts)
  return (
    adjustParts.reduce((acc, cur, index) => {
      if (index === 0) {
        return cur
      }
      if (cur === ',') {
        return `${acc},`
      }
      return `${acc} ${cur}`
    }, '') + '.'
  )
}

makeSentence(['hello', 'world'])
makeSentence(['hello', ',', 'my', 'dear'])
makeSentence(['hello', 'world', '.', '..'])
makeSentence(['Bye'])
