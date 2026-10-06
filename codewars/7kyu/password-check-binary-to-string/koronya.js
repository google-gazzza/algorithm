// [JS][7kyu] Password Check - Binary to String
// password-check-binary-to-string
// https://www.codewars.com/kata/5a731b36e19d14400f000c19/train/javascript

const decodePass = (passArr, bin) => {
  const password = bin
    .split(' ')
    .map((bin) => String.fromCharCode(parseInt(bin, 2)))
    .join('')
  return passArr.includes(password) ? password : false
}

decodePass(['password123', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011') ===
  'password123'
decodePass(['password321', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011') === false
decodePass(['password456', 'pass1', 'test12'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011') === false
