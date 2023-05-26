// [JS][7kyu] Don't give me five!
// don-t-give-me-five
// https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript

const dontGiveMeFive = (start, end) => {
  let count = 0
  for (let i = start; i <= end; i += 1 || 0) {
    if (String(i).includes('5') === false) {
      count += 1
    }
  }
  return count
}

dontGiveMeFive(1, 9)
dontGiveMeFive(4, 17)
