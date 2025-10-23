// [JS][7kyu] Difference between two collections
// difference-between-two-collections
// https://www.codewars.com/kata/594093784aafb857f0000122/train/javascript

const diff = (a, b) => {
  const aSet = new Set(a)
  const bSet = new Set(b)
  const aArr = [...aSet].filter((item) => !bSet.has(item))
  const bArr = [...bSet].filter((item) => !aSet.has(item))
  return [...aArr, ...bArr].sort()
}

diff(['a', 'b'], [])
diff(['a', 'b', 'z'], ['a', 'b'])
diff(['a', 'b', 'z', 'd', 'e', 'd'], ['a', 'b', 'j', 'j'])
