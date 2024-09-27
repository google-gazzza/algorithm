// [JS][7kyu] Cats and shelves
// cats-and-shelves
// https://www.codewars.com/kata/62c93765cef6f10030dfa92b/train/javascript

const solution = (start, finish) => {
  const diff = finish - start
  return Math.floor(diff / 3) + (diff % 3)
}

solution(1, 5) === 2
