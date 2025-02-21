// [JS][7kyu] Name Array Capping
// name-array-capping
// https://www.codewars.com/kata/5356ad2cbb858025d800111d/train/javascript

const capMe = (names) => names.map((name) => `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`)

capMe(['jo', 'nelson', 'jurie'])
capMe(['KARLY', 'DANIEL', 'KELSEY'])
