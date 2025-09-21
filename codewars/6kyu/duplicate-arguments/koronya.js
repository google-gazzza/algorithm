// [JS][6kyu] Duplicate Arguments
// duplicate-arguments
// https://www.codewars.com/kata/520d9c27e9940532eb00018e/train/javascript

function solution(...args) {
  const argSet = new Set()
  return args.some((arg) => {
    if (argSet.has(arg)) {
      return true
    }
    argSet.add(arg)
    return false
  })
}

solution(1, 2, 3) === false
solution(1, 2, 3, 6, 5, 6) === true
solution('a', 'b', 'c', 'a') === true
solution(1, 2, 3, 'a', 'b') === false
solution(1, 2, 3, 1, 2) === true
solution() === false
