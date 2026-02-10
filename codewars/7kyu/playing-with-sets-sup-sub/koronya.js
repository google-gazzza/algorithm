// [JS][7kyu] Playing with Sets : Sup/Sub
// playing-with-sets-sup-sub
// https://www.codewars.com/kata/5885424265fc9c38100017ef/train/javascript

const isSubsetOf = (s1, s2) => [...s1].every((item) => s2.has(item))
const isSupersetOf = (s1, s2) => isSubsetOf(s2, s1)

const s1 = new Set([1, 2])
const s2 = new Set([1, 2, 3])

isSubsetOf(s1, s2) // true
isSupersetOf(s2, s1) // true
isSubsetOf(s2, s1) // false
isSupersetOf(s1, s2) // false
