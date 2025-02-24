// [JS][7kyu] Basic Sequence Practice
// basic-sequence-practice
// https://www.codewars.com/kata/5436f26c4e3d6c40e5000282/train/javascript

const sumOfN = (n) => {
  if (n < 0) {
    return sumOfN(-1 * n).map((num) => (num !== 0 ? -1 * num : num))
  }
  let num = 0
  const result = [num]
  for (let i = 1; i <= n; i += 1) {
    num += i
    result.push(num)
  }

  return result
}

sumOfN(3)
sumOfN(-4)
