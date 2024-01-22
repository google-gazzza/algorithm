// [JS][6kyu] Frog jumping
// frog-jumping
// https://www.codewars.com/kata/536950ffc8a5ca9982001371/train/javascript

const solution = (a) => {
  let count = 0
  let position = 0
  const aLen = a.length
  while (count < aLen) {
    position += a[position]
    count += 1
    if (position >= aLen || position < 0) {
      return count
    }
  }
  return -1
}

solution([1, 2, 2, -1]) === 4
solution([1, 2, 1, 5]) === 3
solution([1, 1, 1, 1]) === 4
solution([1, -1]) === -1
solution([-3]) === 1
