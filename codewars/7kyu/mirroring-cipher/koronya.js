// [JS][7kyu] Mirroring cipher
// mirroring-cipher
// https://www.codewars.com/kata/571af500196bb01cc70014fa/train/javascript

const convertChar = (char, totalStr = 'abcdefghijklmnopqrstuvwxyz') => {
  const lowerChar = char.toLowerCase()
  const index = totalStr.indexOf(lowerChar)
  return index === -1 ? lowerChar : totalStr[totalStr.length - 1 - index]
}

const mirror = (code, str) =>
  code
    .split('')
    .map((char) => convertChar(char, str))
    .join('')

mirror('Welcome home') === 'dvoxlnv slnv'
mirror('hello') === 'svool'
mirror('goodbye') === 'tllwybv'
mirror('ngmlsoor') === 'mtnohlli'
mirror('gsrh rh z hvxivg') === 'this is a secret'

mirror('Welcome home', 'w') === 'welcome home'
mirror('hello', 'abcdefgh') === 'adllo'
mirror('goodbye', '') === 'goodbye'
mirror('CodeWars', '+-*/=') === 'codewars'
mirror('this is a secret', ' *') === 'this*is*a*secret'
