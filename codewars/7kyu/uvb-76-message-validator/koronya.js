// [JS][7kyu] UVB-76 Message Validator
// uvb-76-message-validator
// https://www.codewars.com/kata/56445cc2e5747d513c000033/train/javascript

const validate = (message) => {
  const arr = message.split(' ')
  return (
    arr.length === 8 &&
    arr[0] === 'MDZHB' &&
    /^[0-9]{2}$/.test(arr[1]) &&
    /^[0-9]{3}$/.test(arr[2]) &&
    /^[A-Z]+$/.test(arr[3]) &&
    /^[0-9]{2}$/.test(arr[4]) &&
    /^[0-9]{2}$/.test(arr[5]) &&
    /^[0-9]{2}$/.test(arr[6]) &&
    /^[0-9]{2}$/.test(arr[7])
  )
}

validate('Is this a right message?') === false
validate('MDZHB 85 596 KLASA 81 00 02 91') === true
validate('MDZHB 12 733 EDINENIE 67 79 66 32') === true
validate('MDZHV 60 130 VATRUKH 58 89 54 54') === false
