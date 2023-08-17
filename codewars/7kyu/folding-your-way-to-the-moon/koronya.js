// [JS][7kyu] Folding your way to the moon
// folding-your-way-to-the-moon
// https://www.codewars.com/kata/58f0ba42e89aa6158400000e/train/javascript

const foldTo = (distance) => {
  if (distance < 0) {
    return null
  }
  let target = 0.0001
  let count = 0
  while (target < distance) {
    count += 1
    target *= 2
  }
  return count
}

foldTo(384000000) === 42
