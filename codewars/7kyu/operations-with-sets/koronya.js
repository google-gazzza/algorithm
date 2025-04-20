// [JS][7kyu] Operations With Sets
// operations-with-sets
// https://www.codewars.com/kata/5609fd5b44e602b2ff00003a/train/javascript

const process2Arrays = (arr1, arr2) => {
  const set1 = new Set(arr1)
  const set2 = new Set(arr2)
  const intersection = new Set([...set1].filter((x) => set2.has(x)))
  const union = new Set([...set1, ...set2])
  const difference1 = new Set([...set1].filter((x) => !set2.has(x)))
  const difference2 = new Set([...set2].filter((x) => !set1.has(x)))

  return [intersection.size, union.size - intersection.size, difference1.size, difference2.size]
}

// new set method - Node22+, es2026+ 에서는 이렇게!
const process2Arrays2 = (arr1, arr2) => {
  const set1 = new Set(arr1)
  const set2 = new Set(arr2)
  return [set1.intersection(set2).size, set1.symmetricDifference(set2).size, set1.difference(set2).size, set2.difference(set1).size]
}

process2Arrays([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 4, 6, 8, 10, 12, 14])
