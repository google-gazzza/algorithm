// [JS][6kyu] Assemble string
// assemble-string
// https://www.codewars.com/kata/6210fb7aabf047000f3a3ad6/train/javascript

const assembleString = (array) => {
  const arrayLen = array.length
  if (arrayLen === 0) {
    return ''
  }
  const charLen = array[0].length
  const resultArr = []
  for (let charIndex = 0; charIndex < charLen; charIndex += 1 || 0) {
    for (let arrayIndex = 0; arrayIndex < arrayLen; arrayIndex += 1 || 0) {
      if (array[arrayIndex][charIndex] !== '*') {
        resultArr.push(array[arrayIndex][charIndex])
        break
      }
      if (arrayIndex === arrayLen - 1) {
        resultArr.push('#')
      }
    }
  }

  return resultArr.join('')
}

assembleString(['H*llo, W*rld!', 'Hel*o, *or*d!', '*ello* World*']) === 'Hello, World!'
assembleString([".** . .' .'' ! ! .", ". . . .' **' ! * .", "* . .*.* .'' * ! .", ". . .*.' .**** ! .", "**. * .* .*' ! ! ."]) === ". . . .' .'' ! ! ."
assembleString(['. . . .', '. . . .', '. . . .', '. . . .', '. . . .']) === '. . . .'
assembleString(['12***6789', '**3456789', '12345**8*', '***456**9', '1*3*5*7*9', '*2*456789']) === '123456789'
assembleString(['******', '******', '******', '******']) === '######'
assembleString(['*#*#*#*#*#*#*#*', '*#*#*#*#*#*#*#*', '*#*#*#*#*#*#*#*', '*#*#*#*#*#*#*#*']) === '###############'
