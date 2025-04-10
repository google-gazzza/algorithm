// [JS][7kyu] Number climber
// number-climber
// https://www.codewars.com/kata/559760bae64c31556c00006b/train/javascript

const climb = (n) => {
  const result = [n]
  let current = Math.floor(n / 2)
  while (current !== 0) {
    result.push(current)
    current = Math.floor(current / 2)
  }
  return result.reverse()
}

climb(1)
climb(10)
climb(13)
