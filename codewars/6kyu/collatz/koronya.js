// [JS][6kyu] Collatz
// collatz
// https://www.codewars.com/kata/5286b2e162056fd0cb000c20/train/javascript

// Print the collatz sequence starting with positive integer n.
// Ex: collatz(4) should return "4->2->1"
const collatz = (n) => {
  const resultArr = []
  while (n > 1) {
    resultArr.push(n)
    if (n % 2 === 0) {
      n /= 2
    } else {
      n = n * 3 + 1
    }
  }

  resultArr.push(1)
  return resultArr.join('->')
}

collatz(3) === '3->10->5->16->8->4->2->1'
collatz(4)
