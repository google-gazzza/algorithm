// [JS][5kyu] Product of consecutive Fib numbers
// product-of-consecutive-fib-numbers
// https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript

const fiboMap = new Map()
fiboMap.set(0, 0)
fiboMap.set(1, 1)

const fibo = (n) => {
  if (fiboMap.has(n)) {
    return fiboMap.get(n)
  }

  const sum = fibo(n - 2) + fibo(n - 1)
  fiboMap.set(n, sum)

  return sum
}

const productFib = (prod) => {
  const sqrt = Math.sqrt(prod)
  let n = 0
  let nextNumber = 0
  while (nextNumber < sqrt) {
    n += 1
    nextNumber = fibo(n)
  }
  const prevNumber = fibo(n - 1)
  const multiply = prevNumber * nextNumber

  if ((multiply === prod) === true) {
    return [prevNumber, nextNumber, true]
  }
  if (multiply > prod) {
    return [prevNumber, nextNumber, false]
  }
  return [nextNumber, fibo(n + 1), false]
}

productFib(714)
productFib(4895)
productFib(5895)
productFib(74049690)
productFib(84049690)
productFib(193864606)
productFib(447577)
productFib(602070)
