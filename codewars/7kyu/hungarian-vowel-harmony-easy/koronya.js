// [JS][7kyu] Hungarian Vowel Harmony (easy)
// hungarian-vowel-harmony-easy
// https://www.codewars.com/kata/57fd696e26b06857eb0011e7/train/javascript

const frontArr = ['e', 'é', 'i', 'í', 'ö', 'ő', 'ü', 'ű']
const backArr = ['a', 'á', 'o', 'ó', 'u', 'ú']
const backSet = new Set(backArr)
const totalSet = new Set([...frontArr, ...backArr])

const dative = (word) => {
  const filteredArr = word.split('').filter((char) => totalSet.has(char))
  const lastVowel = filteredArr[filteredArr.length - 1]
  if (backSet.has(lastVowel)) {
    return word + 'nak'
  }
  return word + 'nek'
}

dative('ablak') === 'ablaknak'
dative('tükör') === 'tükörnek'
dative('keret') === 'keretnek'
dative('otthon') === 'otthonnak'
dative('virág') === 'virágnak'
dative('tett') === 'tettnek'
dative('rokkant') === 'rokkantnak'
dative('rossz') === 'rossznak'
dative('gonosz') === 'gonosznak'
