// [JS][7kyu] Building Strings From a Hash
// building-strings-from-a-hash
// https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2/train/javascript

const solution = (pairs) =>
  Object.entries(pairs)
    .map((pair) => pair.join(' = '))
    .join(',')

solution({ a: 1, b: 2 }) === 'a = 1,b = 2'
solution({ a: 'b', b: 'a' }) === 'a = b,b = a'
solution({ 0: 'a', b: 2 }) === '0 = a,b = 2'
solution({ b: 1, c: 2, e: 3 }) === 'b = 1,c = 2,e = 3'
solution({}) === ''
