// [JS][7kyu] String matchup
// string-matchup
// https://www.codewars.com/kata/59ca8e8e1a68b7de740001f4/train/javascript

const solve = (a, b) => {
  const strMap = new Map()
  a.forEach((str) => strMap.set(str, (strMap.get(str) || 0) + 1))
  return b.map((str) => strMap.get(str) || 0)
}

solve(['abc', 'abc', 'xyz', 'abcd', 'cde'], ['abc', 'cde', 'uap'])
solve(['abc', 'xyz', 'abc', 'xyz', 'cde'], ['abc', 'cde', 'xyz'])
solve(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox'])
