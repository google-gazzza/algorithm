// [JS][6kyu] Numericals of a String
// numericals-of-a-string
// https://www.codewars.com/kata/5b4070144d7d8bbfe7000001/train/javascript

const numericals = (s) => {
  const strMap = new Map()
  const result = []
  s.split('').forEach((c) => {
    const count = strMap.has(c) ? strMap.get(c) + 1 : 1
    strMap.set(c, count)
    result.push(count)
  })
  return result.join('')
}

numericals('Hello, World!') === '1112111121311'
numericals("Hello, World! It's me, JomoPipi!") === '11121111213112111131224132411122'
numericals('hello hello') === '11121122342'
numericals('Hello') === '11121'
numericals('aaaaaaaaaaaa') === '123456789101112'
