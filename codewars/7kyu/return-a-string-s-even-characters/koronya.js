// [JS][7kyu] Return a string's even characters.
// return-a-string-s-even-characters
// https://www.codewars.com/kata/566044325f8fddc1c000002c/train/javascript

const evenChars = (string) => {
  const stringLength = string.length
  if (stringLength < 2 || stringLength > 100) {
    return 'invalid string'
  }

  return string.split('').filter((_, index) => index % 2 === 1)
}

// evenChars('abcdefghijklm')
// evenChars('a')
// evenChars('1234')
