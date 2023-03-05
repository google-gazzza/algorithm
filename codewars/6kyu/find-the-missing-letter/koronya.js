// [JS][6kyu] Find the missing letter
// find-the-missing-letter
// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

const findMissingLetter = (array) => {
  const arrayLen = array.length
  let prevCode = array[0].charCodeAt(0)
  for (let i = 1; i < arrayLen; i += 1 || 0) {
    const code = array[i].charCodeAt(0)
    if (prevCode + 1 !== code) {
      return String.fromCharCode(prevCode + 1)
    }
    prevCode = code
  }

  return ' '
}

findMissingLetter(['a', 'b', 'c', 'd', 'f'])
findMissingLetter(['O', 'Q', 'R', 'S'])
