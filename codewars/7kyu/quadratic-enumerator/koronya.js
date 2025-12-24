// [JS][7kyu] Quadratic Enumerator
// quadratic-enumerator
// https://www.codewars.com/kata/5aee96e22c5061ee90000024/train/javascript

function* quadraticGen(a, b, c, start = 0, step = 1) {
  let n = start
  while (true) {
    yield [n, a * n * n + b * n + c]
    n += step
  }
}

// let a1 = quadraticGen(1, 0, 0)
// let a2 = Array.from({ length: 7 }, (_) => a1.next().value)

// let b1 = quadraticGen(1, 0, 0, 2)
// let b2 = Array.from({ length: 7 }, (_) => b1.next().value)

// let c1 = quadraticGen(1, 0, 0, 0, 2)
// let c2 = Array.from({ length: 5 }, (_) => c1.next().value)

// let d1 = quadraticGen(1, 0, 0, 0, -1)
// let d2 = Array.from({ length: 7 }, (_) => d1.next().value)

// let e1 = quadraticGen(1, 0, 0, 0, 0.5)
// let e2 = Array.from({ length: 5 }, (_) => e1.next().value)
