// [JS][7kyu] Regexp Basics - is it a hexadecimal number?
// regexp-basics-is-it-a-hexadecimal-number
// https://www.codewars.com/kata/567c9f56d83baeed8300000f/train/javascript

const HEX_REG = /^((0x)?[0-9a-fA-F]+)$/

String.prototype.hexNumber = function () {
  return HEX_REG.test(this)
}

// ''.hexNumber() === false
// '0x'.hexNumber() === false
// '0'.hexNumber() === true
// '0xDEADBEEF'.hexNumber() === true
// '1337bAbe'.hexNumber() === true

// '9'.hexNumber() === true
// '09'.hexNumber() === true
// 'AF'.hexNumber() === true
