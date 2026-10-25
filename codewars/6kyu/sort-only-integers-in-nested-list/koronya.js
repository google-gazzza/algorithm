// [JS][6kyu] Sort only integers in Nested List
// sort-only-integers-in-nested-list
// https://www.codewars.com/kata/5a4bdd73d8e145f17d000035/train/javascript

const sortNested3 = (arrays) => {
  const len1 = arrays.length
  const len2 = arrays[0].length
  const len3 = arrays[0][0].length
  const arr = arrays.flat(Infinity).sort((a, b) => b - a)
  return Array.from(Array(len1), () => Array.from(Array(len2), () => Array.from({ length: len3 }).map(() => arr.pop())))
}

// prettier-ignore
sortNested3([[[2, 1], [4, 3]], [[6, 5], [8, 7]]])
// prettier-ignore
sortNested3([ [ [29, 32], [82, 61], [75, 91] ], [ [69, 99], [74, 23], [70, 97] ] ],)
