// [JS][6kyu] Pairs of Bears
// pairs-of-bears
// https://www.codewars.com/kata/57d165ad95497ea150000020/train/javascript

const bears = (x, s) => {
  const pairs = s.match(/(8B|B8)/g)
  if (!pairs) {
    return ['', x === 0]
  }
  const pairStr = pairs.join('')
  return [pairStr, pairStr.length / 2 >= x]
}

// bears(6, 'EvHB8KN8ik8BiyxfeyKBmiCMj')
// bears(7, '8j8mBliB8gimjB8B8jlB')
// bears(3, '88Bifk8hB8BB8BBBB888chl8BhBfd')
// bears(8, '8')
