// [JS][6kyu] Swap Case Using N
// swap-case-using-n
// https://www.codewars.com/kata/5f3afc40b24f090028233490/train/javascript

const isAlphabet = (char) => /[a-zA-Z]/.test(char)

const convertAlphabet = (char) => {
  if (char === char.toUpperCase()) {
    return char.toLowerCase()
  }
  return char.toUpperCase()
}

const swap = (s, n) => {
  const binary = n.toString(2)
  const binaryLen = binary.length
  let index = 0
  return s
    .split('')
    .map((char) => {
      if (!isAlphabet(char)) {
        return char
      }
      const result = binary[index % binaryLen]
      index += 1
      return result === '1' ? convertAlphabet(char) : char
    })
    .join('')
}

swap('Hello world!', 11)
swap('Hello world!', 11) === 'heLLO wORLd!'
swap('the quick broWn fox leapt over the fence', 9) === 'The QUicK BrowN foX LeaPT ovER thE FenCE'
swap('eVerybody likes ice cReam', 85) === 'EVErYbODy LiKeS IcE creAM'
swap('gOOd MOrniNg', 7864) === 'GooD MorNIng'
swap('how are you today?', 12345) === 'HOw are yoU TOdaY?'
swap('the lord of the rings', 0) === 'the lord of the rings'
swap('', 11345) === ''
