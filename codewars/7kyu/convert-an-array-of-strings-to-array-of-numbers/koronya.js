// [JS][7kyu] Convert an array of strings to array of numbers
// convert-an-array-of-strings-to-array-of-numbers
// https://www.codewars.com/kata/5783d8f3202c0e486c001d23/train/javascript

const toNumberArray = (stringarray) => stringarray.map((item) => Number(item))

assert.sameOrderedMembers(toNumberArray(['1.1', '2.2', '3.3']), [1.1, 2.2, 3.3])
