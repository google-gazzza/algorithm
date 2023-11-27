// [JS][6kyu] Reducing by steps
// reducing-by-steps
// https://www.codewars.com/kata/56efab15740d301ab40002ee/train/javascript

const lcm = (a, b) => Math.floor((a * b) / gcd(a, b))

const gcd = (a, b) => (a === 0 ? b : gcd(b % a, a))

const gcdi = (x, y) => gcd(Math.abs(x), Math.abs(y))

const lcmu = (a, b) => lcm(Math.abs(a), Math.abs(b))

const som = (a, b) => a + b

const maxi = (a, b) => Math.max(a, b)

const mini = (a, b) => Math.min(a, b)

const operArray = (fct, arr, init) => {
  const result = []
  let acc = init
  arr.forEach((item) => {
    acc = fct(acc, item)
    result.push(acc)
  })
  return result
}

operArray(gcdi, [18, 69, -90, -78, 65, 40], 18)
operArray(lcmu, [18, 69, -90, -78, 65, 40], 18)
operArray(som, [18, 69, -90, -78, 65, 40], 18)
operArray(mini, [18, 69, -90, -78, 65, 40], 18)
operArray(maxi, [18, 69, -90, -78, 65, 40], 18)
