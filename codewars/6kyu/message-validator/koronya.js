// [JS][6kyu] Message Validator
// message-validator
// https://www.codewars.com/kata/5fc7d2d2682ff3000e1a3fbc/train/javascript

function splitString(str) {
  const matches = str.match(/(\d+|[a-zA-Z]+)/g)
  return matches.map((item) => (isNaN(item) ? item : parseInt(item)))
}

const isAValidMessage = (message) => {
  if (message === '') {
    return true
  }

  const arr = splitString(message)
  const arrLen = arr.length
  if (arrLen % 2 !== 0) {
    return false
  }
  let prevNum
  for (let i = 0; i < arrLen; i += 1 || 0) {
    const curr = arr[i]
    if (i % 2 === 0) {
      prevNum = curr
    } else {
      if (curr.length !== prevNum) {
        return false
      }
    }
  }

  return true
}

isAValidMessage('3hey5hello2hi') === true
isAValidMessage('4code13hellocodewars') === true
isAValidMessage('3hey5hello2hi5') === false
isAValidMessage('code4hello5') === false
isAValidMessage('1a2bb3ccc4dddd5eeeee') === true
isAValidMessage('') === true
