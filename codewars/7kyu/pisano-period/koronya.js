// [JS][7kyu] Pisano Period
// pisano-period
// https://www.codewars.com/kata/5f1360c4bc96870019803ae2/train/javascript

const pisano = (n) => {
  if (n === 2) return 3
  if (n === 1) return 2
  let prev = 0
  let now = 1
  let count = 0

  while (true) {
    count += 1
    temp = now
    now = (prev + now) % n
    prev = temp
    if (prev === 0 && now === 1) {
      break
    }
  }

  return count
}

// pisano(3) === 8
// pisano(4) === 6
// pisano(5) === 20
// pisano(6) === 24
// pisano(7) === 16
// pisano(8) === 12
// pisano(9) === 24
// pisano(10) === 60
