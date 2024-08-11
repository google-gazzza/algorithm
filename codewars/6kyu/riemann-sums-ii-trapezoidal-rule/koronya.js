// [JS][6kyu] riemann sums II (trapezoidal rule)
// riemann-sums-ii-trapezoidal-rule
// https://www.codewars.com/kata/5562b6de2f508f1adc000089/train/javascript

const quadratic = (x) => {
  return +Math.pow(x, 2).toFixed(10)
}

const riemann_trapezoidal = (f, n, a, b) => {
  let sum = 0
  const dx = (b - a) / n
  for (let i = 0; i < n; i += 1 || 0) {
    sum += ((f(a + i * dx) + f(a + (i + 1) * dx)) * dx) / 2
  }

  return sum
}

riemann_trapezoidal(quadratic, 1, 0, 1)
riemann_trapezoidal(quadratic, 10, 0, 1)
riemann_trapezoidal(quadratic, 100, 0, 1)
riemann_trapezoidal(quadratic, 100, -1, 1)
