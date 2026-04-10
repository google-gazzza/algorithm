// [JS][7kyu] Move 10
// move-10
// https://www.codewars.com/kata/57cf50a7eca2603de0000090/train/javascript

const moveTen = (s) => {
  const resultArr = s.split('').map((char) => {
    const charCode = char.charCodeAt(0)
    if (charCode >= 97 && charCode <= 122) {
      return String.fromCharCode(((charCode - 97 + 10) % 26) + 97)
    }
    return char
  })
  return resultArr.join('')
}

moveTen('testcase') === 'docdmkco'
moveTen('codewars') === 'mynogkbc'
moveTen('exampletesthere') === 'ohkwzvodocdrobo'
