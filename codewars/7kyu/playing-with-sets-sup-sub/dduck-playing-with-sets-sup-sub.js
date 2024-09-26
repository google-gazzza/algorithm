// playing-with-sets-sup-sub
// Playing with Sets : Sup/Sub
// difficulty: 7kyu
// https://www.codewars.com/kata/5885424265fc9c38100017ef/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/playing-with-sets-sup-sub

const isSubsetOf = (s1, s2) => ![...s1.values()].some((v) => !s2.has(v));

const isSupersetOf = (s1, s2) => isSubsetOf(s2, s1);

let A1 = new Set([1, 2, 3]), A2 = new Set([3, 2, 1]), B = new Set([1, 2, 3, 4, 5]), X = new Set([1, 2, 4, 5, 6, 7]);

console.log(isSubsetOf(A1, A1), "A is contained in A");
console.log(isSubsetOf(A1, A2), "{1,2,3} is contained in {3,2,1}");
console.log(isSubsetOf(A1, B), "{1,2,3} is contained in {1,2,3,4,5}");
console.log(!isSubsetOf(A1, X), "{1,2,3} is not contained in {1,2,4,5,6,7}");

console.log(isSupersetOf(A1, A1), "A includes A");
console.log(isSupersetOf(A1, A2), "{1,2,3} includes {3,2,1}");
console.log(isSupersetOf(B, A1), "{1,2,3} includes {1,2,3,4,5}");
console.log(!isSupersetOf(A1, X), "{1,2,3} doesnt include {1,2,4,5,6,7}");
