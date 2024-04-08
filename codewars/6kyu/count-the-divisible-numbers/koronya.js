// [JS][6kyu] Count the divisible numbers
// count-the-divisible-numbers
// https://www.codewars.com/kata/55a5c82cd8e9baa49000004c/train/javascript

const divisibleCount = (x, y, k) => {
  const start = Math.ceil(x / k)
  const end = Math.floor(y / k)
  return end - start + 1
}

divisibleCount(6, 11, 2)
