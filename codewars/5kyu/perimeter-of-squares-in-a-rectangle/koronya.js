// [JS][5kyu] Perimeter of squares in a rectangle
// perimeter-of-squares-in-a-rectangle
// https://www.codewars.com/kata/559a28007caad2ac4e000083/train/javascript

const map = new Map()
map.set(0, 0)
map.set(1, 1)
map.set(2, 1)

const getFibo = (n) => {
  if (map.has(n) === true) {
    return map.get(n)
  }
  const value = getFibo(n - 1) + getFibo(n - 2)
  map.set(n, value)
  return value
}

const perimeter = (n) => {
  let sum = 0
  let limit = n + 1
  for (let i = 1; i <= limit; i += 1 || 0) {
    sum += getFibo(i)
  }
  return 4 * sum
}

perimeter(5)
perimeter(6)
perimeter(7)
perimeter(0) === 4
perimeter(5) === 80
perimeter(7) === 216
perimeter(20) === 114624
perimeter(30) === 14098308
