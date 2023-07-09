// [JS][7kyu] Gauß needs help! (Sums of a lot of numbers).
// gauß-needs-help-sums-of-a-lot-of-numbers
// https://www.codewars.com/kata/54df2067ecaa226eca000229/train/javascript

const f = (n) => {
  if (typeof n !== 'number' || n < 1 || !Number.isInteger(n)) {
    return false
  }
  return (n * (n + 1)) / 2
}

f(100)
f(300)
f(50000)
f('n')
f()
f(3.14)
f(0)
f(-10)
