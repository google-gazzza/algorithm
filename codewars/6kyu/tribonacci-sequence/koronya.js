// [JS][6kyu] Tribonacci Sequence
// tribonacci-sequence
// https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

const tribonacci = (signature, n) => {
  if (n < 3) {
    return signature.slice(0, n)
  }
  let sum = signature[0] + signature[1] + signature[2]
  const result = [...signature]
  for (let i = 3; i < n; i += 1 || 0) {
    result.push(sum)
    let target = sum
    sum -= signature.shift()
    sum += target
    signature.push(target)
  }

  return result
}

tribonacci([1, 1, 1], 10)
tribonacci([1, 1, 1], 1)
tribonacci([1, 1, 1], 0)
