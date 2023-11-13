// [JS][6kyu] Sort Arrays (Ignoring Case)
// sort-arrays-ignoring-case
// https://www.codewars.com/kata/51f41fe7e8f176e70d0002b9/train/javascript

// input: names - unsorted strings
// output: case-agnostic sort
const sortme = (names) => names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))

sortme(['Hello', 'there', "I'm", 'fine'])
sortme(['C', 'd', 'a', 'B'])
sortme(['CodeWars'])
sortme([])
