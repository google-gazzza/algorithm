// [JS][7kyu] Only one
// only-one
// https://www.codewars.com/kata/5734c38da41454b7f700106e/train/javascript

const onlyOne = (...args) => args.filter(Boolean).length === 1

onlyOne() === false
onlyOne(true, false, false) === true
onlyOne(true, false, false, true) === false
onlyOne(false, false, false, false) === false
