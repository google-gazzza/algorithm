// [JS][6kyu] Even Fibonacci Sum
// even-fibonacci-sum
// https://www.codewars.com/kata/55688b4e725f41d1e9000065/train/javascript

const fibonacci = (max) => {
  const fiboArr = [0, 1]
  while (true) {
    const sum = fiboArr[fiboArr.length - 1] + fiboArr[fiboArr.length - 2]
    if (sum >= max) {
      break
    }
    fiboArr.push(sum)
  }

  return fiboArr.filter((num) => num % 2 === 0).reduce((acc, cur) => acc + cur, 0)
}

fibonacci(2147483647) === 1485607536
fibonacci(1000000000) === 350704366
fibonacci(100000000) === 82790070
fibonacci(1000000) === 1089154
fibonacci(1000) === 798
fibonacci(100) === 44
fibonacci(5) === 2
fibonacci(8) === 2
fibonacci(10) === 10
fibonacci(1) === 0
