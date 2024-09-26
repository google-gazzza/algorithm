// [JS][6kyu] first character that repeats
// first-character-that-repeats
// https://www.codewars.com/kata/54f9f4d7c41722304e000bbb/train/javascript

const firstDup = (s) => {
  const map = new Map()
  s.split('').forEach((c) => {
    map.set(c, (map.get(c) || 0) + 1)
  })
  for (const [k, v] of map) {
    if (v > 1) {
      return k
    }
  }

  return undefined
}

firstDup('tweet') === 't'
firstDup('Ode to Joy') === ' '
firstDup('ode to joy') === 'o'
firstDup('bar') === undefined
firstDup('123123') === '1'
firstDup('!@#$!@#$') === '!'
