// leetcode/easy/2803. Factorial Generator
// 2803-factorial-generator
// URL: https://leetcode.com/problems/factorial-generator/

function* factorial(n: number): Generator<number> {
  let count = 1;
  let factorial = 1;

  if (n === 0) {
    yield 1;
  }

  while (count <= n) {
    yield factorial *= count;
    count += 1;
  }
}

const gen = factorial(5);
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 6
gen.next().value; // 24
gen.next().value; // 120
/**
 * const gen = factorial(2);
 * gen.next().value; // 1
 * gen.next().value; // 2
 */