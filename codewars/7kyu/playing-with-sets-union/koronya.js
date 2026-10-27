// [JS][7kyu] Playing with Sets : Union
// playing-with-sets-union
// https://www.codewars.com/kata/5884ce61f36b6d738b000053/train/javascript

const union = (s1, s2) => {
  const resultSet = new Set(s1)
  for (const item of s2) {
    resultSet.add(item)
  }

  return resultSet
}

const a = new Set([1, 2])
const b = new Set([2, 3])
const c = union(a, b)

c.has(1)
c.has(2)
c.has(3)
c.has(4)
