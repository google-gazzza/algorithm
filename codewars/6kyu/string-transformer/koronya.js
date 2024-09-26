// [JS][6kyu] String transformer
// string-transformer
// https://www.codewars.com/kata/5878520d52628a092f0002d0/train/javascript

const stringTransformer = (str) => {
  return str
    .split(' ')
    .reverse()
    .map((word) => {
      return word
        .split('')
        .map((char) => {
          return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
        })
        .join('')
    })
    .join(' ')
}

stringTransformer('Example string')
