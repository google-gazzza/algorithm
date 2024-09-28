// [JS][6kyu] zipWith
// zip-with
// https://www.codewars.com/kata/5825792ada030e9601000782/train/javascript

const zipWith = (fn, a0, a1) => {
  const minLen = Math.min(a0.length, a1.length)
  return Array.from({ length: minLen }).map((_, index) => fn(a0[index], a1[index]))
}
