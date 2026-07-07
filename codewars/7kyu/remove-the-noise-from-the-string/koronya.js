// [JS][7kyu] Remove the noise from the string
// remove-the-noise-from-the-string
// https://www.codewars.com/kata/5681cf0be812b41721000034/train/javascript

const REGEX = /[%$&/#·@|º\\\ª]/g
const removeNoise = (str) => str.replace(REGEX, '')

removeNoise('h%e&·%$·llo w&%or&$l·$%d') === 'hello world'
removeNoise('%$&/#·@|º\ª')
