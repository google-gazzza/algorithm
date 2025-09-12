// [JS][4kyu] Fancy Schmancy Sort
// fancy-schmancy-sort
// https://www.codewars.com/kata/53006ec8c7c0f4f5e00002c3/train/javascript

const COMPARISON_ARR = ['num', 'str']
const REGEX = /([a-zA-Z_$][a-zA-Z0-9_$]*)|\[(\d+)\]|\((\d*)\)/g

function exec(obj, path, rest) {
  const tokens = []
  let match
  while ((match = REGEX.exec(path))) {
    if (match[1]) {
      tokens.push({ type: 'prop', value: match[1] })
    } else if (match[2]) {
      tokens.push({ type: 'index', value: Number(match[2]) })
    } else if (match[3] !== undefined) {
      const count = match[3] === '' ? 0 : Number(match[3])
      tokens.push({ type: 'callRest', count })
    }
  }

  let current = obj
  let receiver = null
  let restIndex = 0
  for (const token of tokens) {
    if (token.type === 'prop') {
      receiver = current
      current = current[token.value]
    } else if (token.type === 'index') {
      receiver = current
      current = current[token.value]
    } else if (token.type === 'callRest') {
      const args = rest.slice(restIndex, restIndex + token.count)
      restIndex += token.count
      current = current.apply(receiver, args)
    }
  }

  return current
}

function sortByPath(arr, path, ...args) {
  let cmp = null
  const last = args[args.length - 1]
  if (typeof last === 'function') {
    cmp = args.pop()
  } else if (COMPARISON_ARR.includes(last)) {
    cmp = args.pop()
  }

  const compare = (a, b) => {
    const va = exec(a, path, args)
    const vb = exec(b, path, args)
    if (cmp === 'num') {
      return va - vb
    }
    if (cmp === 'str') {
      return String(va).localeCompare(String(vb))
    }
    if (typeof cmp === 'function') {
      return cmp(va, vb)
    }
    return String(va).localeCompare(String(vb))
  }

  return arr.sort(compare)
}

// const ARR = [{ a: { b: [0, 1] } }, { a: { b: [0, 3] } }, { a: { b: [0, 2] } }]
// const PATH = 'a.b[1]'
// sortByPath(ARR, PATH)
// sortByPath(['abc', 'd', 'yadf'], 'length', function (a, b) {
//   return a.length - b.length
// })
// sortByPath(['a', 'c', 'b'], 'charCodeAt()', 'num')
// sortByPath(['abcdefghijklmnop', 'ab', 'x'], 'length')
// sortByPath(['abcdefghijklmnop', 'ab', 'x'], 'length', 'str')
// sortByPath(['Jane:1', 'Bob:2', 'Mark:4', 'Alex:3'], 'split(1)[1]', ';')
// sortByPath(['Jane:1', 'Bob:2', 'Mark:4', 'Alex:3'], 'split(1)[1]', ';', 'str')
// sortByPath([ 'yadf', 'd', 'abc' ], 'length', () => )
