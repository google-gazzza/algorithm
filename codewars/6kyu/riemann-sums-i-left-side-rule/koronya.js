// [JS][6kyu] riemann sums I (left side rule)
// riemann-sums-i-left-side-rule
// https://www.codewars.com/kata/5562ab5d6dca8009f7000050/train/javascript

const left_riemann = (f, n, a, b) => {
  let sum = 0
  const dx = (b - a) / n
  for (let i = 0; i < n; i += 1 || 0) {
    sum += f(a + i * dx) * dx
  }

  return sum
}

left_riemann((x) => x * x, 1, 0, 1)
left_riemann((x) => x * x, 4, 1, 2)

left_riemann((x) => x ** 3, 2, -1, 1)
left_riemann((x) => x ** 3, 20, -2, 1)
