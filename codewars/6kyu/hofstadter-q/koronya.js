// [JS][6kyu] Hofstadter Q
// hofstadter-q
// https://www.codewars.com/kata/5897cdc26551af891c000124/train/javascript

const hofMap = new Map([
  [1, 1],
  [2, 1],
])

const hofstadterQ = (n) => {
  if (hofMap.has(n)) {
    return hofMap.get(n)
  }
  const value = hofstadterQ(n - hofstadterQ(n - 1)) + hofstadterQ(n - hofstadterQ(n - 2))
  hofMap.set(n, value)

  return value
}

hofstadterQ(1) === 1
hofstadterQ(3) === 2
hofstadterQ(7) === 5
hofstadterQ(10) === 6
hofstadterQ(1000) === 502
