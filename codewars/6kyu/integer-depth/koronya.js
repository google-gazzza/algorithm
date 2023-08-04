// [JS][6kyu] Integer depth
// integer-depth
// https://www.codewars.com/kata/59b401e24f98a813f9000026/train/javascript

function computeDepth(x) {
  const numSet = new Set()
  let count = 0
  while (numSet.size < 10) {
    count += 1
    const num = x * count
    num
      .toString()
      .split('')
      .forEach((n) => {
        numSet.add(n)
      })
  }

  return count
}

// computeDepth(1)
computeDepth(42)
