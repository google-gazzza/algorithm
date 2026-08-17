// [JS][7kyu] From A to Z
// from-a-to-z
// https://www.codewars.com/kata/6512b3775bf8500baea77663/train/javascript

const gimmeTheLetters = (sp) => {
  const [start, end] = sp.split('-')
  const startCharCode = start.charCodeAt(0)
  const endCharCode = end.charCodeAt(0)
  let result = ''
  for (let i = startCharCode; i <= endCharCode; i += 1) {
    result += String.fromCharCode(i)
  }
  return result
}

gimmeTheLetters('a-z') === 'abcdefghijklmnopqrstuvwxyz'
gimmeTheLetters('h-o') === 'hijklmno'
gimmeTheLetters('Q-Z') === 'QRSTUVWXYZ'
gimmeTheLetters('J-J') === 'J'
