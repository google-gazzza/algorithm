// [JS][6kyu] PI approximation
// pi-approximation
// https://www.codewars.com/kata/550527b108b86f700000073f/train/javascript

const TEN_POWER_TEN = 10 ** 10

const iterPi = (epsilon) => {
  let count = 0
  let prev = 1
  let sum = 0
  while (Math.abs(Math.PI - sum * 4) > epsilon) {
    sum += count % 2 === 0 ? 1 / prev : -1 / prev
    prev += 2
    count += 1
  }

  return [count, Math.round(sum * 4 * TEN_POWER_TEN) / TEN_POWER_TEN]
}

const iterPi2 = (epsilon) => {
  const limit = Math.ceil(1 / epsilon)
  let prev = 1
  let sum = 0
  for (let i = 0; i < limit; i += 1 || 0) {
    sum += i % 2 === 0 ? 1 / prev : -1 / prev
    prev += 2
  }

  return [limit, Math.round(sum * 4 * TEN_POWER_TEN) / TEN_POWER_TEN]
}

iterPi(0.00001)
iterPi(0.1)
iterPi(0.01)
iterPi(0.001)
