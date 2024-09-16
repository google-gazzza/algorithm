// [JS][7kyu] All Inclusive?
// all-inclusive
// https://www.codewars.com/kata/5700c9acc1555755be00027e/train/javascript

const containAllRots = (strng, arr) => {
  const rotateArr = []
  const strngArr = strng.split('')
  strngArr.forEach((_, i) => {
    const rotated = strngArr.slice(i).concat(strngArr.slice(0, i)).join('')
    rotateArr.push(rotated)
  })

  return rotateArr.every((e) => arr.includes(e))
}

containAllRots('', []) === true
containAllRots('', ['bsjq', 'qbsj']) === true
containAllRots('bsjq', ['bsjq', 'qbsj', 'sjqb', 'twZNsslC', 'jqbs']) === true
containAllRots('XjYABhR', ['TzYxlgfnhf', 'yqVAuoLjMLy', 'BhRXjYA', 'YABhRXj', 'hRXjYAB', 'jYABhRX', 'XjYABhR', 'ABhRXjY']) === false
