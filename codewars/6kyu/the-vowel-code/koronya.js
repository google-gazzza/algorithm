// [JS][6kyu] The Vowel Code
// the-vowel-code
// https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript

const vowelMap = new Map()
vowelMap.set('a', 1)
vowelMap.set('e', 2)
vowelMap.set('i', 3)
vowelMap.set('o', 4)
vowelMap.set('u', 5)

const reverseVowelMap = new Map()
reverseVowelMap.set('1', 'a')
reverseVowelMap.set('2', 'e')
reverseVowelMap.set('3', 'i')
reverseVowelMap.set('4', 'o')
reverseVowelMap.set('5', 'u')

const encode = (string) =>
  string
    .split('')
    .map((char) => (vowelMap.has(char) ? vowelMap.get(char) : char))
    .join('')

const decode = (string) =>
  string
    .split('')
    .map((char) => (reverseVowelMap.has(char) ? reverseVowelMap.get(char) : char))
    .join('')

encode('hello') === 'h2ll4'
encode('How are you today?') === 'H4w 1r2 y45 t4d1y?'
encode('This is an encoding test.') === 'Th3s 3s 1n 2nc4d3ng t2st.'
decode('h2ll4') === 'hello'
