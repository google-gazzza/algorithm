// [JS][6kyu] Coprimes up to N
// coprimes-up-to-n
// https://www.codewars.com/kata/59e0dbb72a7acc3610000017/train/javascript

const coprimes = (n) => {
  const arr = Array.from({ length: n - 2 }, (_, i) => i + 2)
  const resultSet = new Set(arr)
  arr.forEach((num) => {
    if (!resultSet.has(num) || n % num !== 0) {
      return
    }
    let multiple = num
    while (multiple < n) {
      resultSet.delete(multiple)
      multiple += num
    }
  })

  return [1, ...Array.from(resultSet)]
}

coprimes(2)
coprimes(3)
coprimes(6)
coprimes(10)
coprimes(20)
coprimes(25)
coprimes(30)
coprimes(1668)
