// [JS][6kyu] Simple Fun #318: Sort String
// simple-fun-318-sort-string
// https://www.codewars.com/kata/5936256f2e2a27edc9000047/train/javascript

const isAlphabet = (char) => /[a-zA-Z]/.test(char)

const sortString = (s) => {
  const arr = s.split('').map((char, index) => ({
    char,
    index,
    isAlphabet: isAlphabet(char),
  }))
  const alphabetArr = arr
    .filter((item) => item.isAlphabet)
    .sort((a, b) => {
      if (a.char.toLowerCase() === b.char.toLowerCase()) {
        return a.index - b.index
      }
      return a.char.localeCompare(b.char)
    })
    .map((item) => item.char)
  arr.filter((item) => !item.isAlphabet).forEach((item) => alphabetArr.splice(item.index, 0, item.char))

  return alphabetArr.join('')
}

sortString('cba') === 'abc'
sortString('Cba') === 'abC'
sortString('cCBbAa') === 'AaBbcC'
sortString('c b a') === 'a b c'
sortString('-c--b--a-') === '-a--b--c-'
sortString('Codewars') === 'aCdeorsw'
