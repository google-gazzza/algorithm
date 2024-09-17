// [JS][7kyu] Password validator
// password-validator
// https://www.codewars.com/kata/56a921fa8c5167d8e7000053/train/javascript

const UPPER_REGEX = /[A-Z]/
const LOWER_REGEX = /[a-z]/
const DIGIT_REGEX = /[0-9]/

const password = (str) => str.length >= 8 && UPPER_REGEX.test(str) && LOWER_REGEX.test(str) && DIGIT_REGEX.test(str)

password('Abcd1234') === true
password('Abcd123') === false
password('abcd1234') === false
password('AbcdefGhijKlmnopQRsTuvwxyZ1234567890') === true
password('ABCD1234') === false
password('Ab1!@#$%^&*()-_+={}[]|:;?/>.<,') === true
password('!@#$%^&*()-_+={}[]|:;?/>.<,') === false
