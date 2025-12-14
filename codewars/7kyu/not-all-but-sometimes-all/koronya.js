// [JS][7kyu] Not all but sometimes all
// not-all-but-sometimes-all
// https://www.codewars.com/kata/564ab935de55a747d7000040/train/javascript

const remove = (str, what) => {
  Object.entries(what).forEach(([char, count]) => {
    const regex = new RegExp(char, 'g')
    let removed = 0
    str = str.replace(regex, (match) => {
      if (removed < count) {
        removed += 1
        return ''
      }
      return match
    })
  })
  return str
}

// remove('this is a string', { t: 1, i: 2 }) === 'hs s a string'
// remove('hello world', { x: 5, i: 2 }) === 'hello world'
// remove('apples and bananas', { a: 50, n: 1 }) === 'pples d bnns'
// remove('a', { a: 1, n: 1 }) === ''
// remove('codewars', { c: 5, o: 1, d: 1, e: 1, w: 1, z: 1, a: 1, r: 1, s: 1 }) === ''
