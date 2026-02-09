// [JS][7kyu] Playing with Sets : Intersection
// playing-with-sets-intersection
// https://www.codewars.com/kata/5884d46015a70f6cd7000035/train/javascript

const inter = (s1, s2) => {
  const result = new Set()
  s1.forEach((item) => {
    if (s2.has(item)) {
      result.add(item)
    }
  })
  return result
}

// es2024
const inter2 = (s1, s2) => s1.intersection(s2)

inter(new Set([1, 2]), new Set([2, 3]))
inter2(new Set([1, 2]), new Set([2, 3]))
