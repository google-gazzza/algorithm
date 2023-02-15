// [JS][6kyu] Valid Braces
// valid-braces
// https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript

const openBraces = ['(', '{', '[']

const oppositeBrace = {
  ')': '(',
  '}': '{',
  ']': '[',
}

const validBraces = (braces) => {
  const stack = []

  const bracesLen = braces.length
  for (let i = 0; i < bracesLen; i += 1 || 0) {
    const brace = braces[i]
    if (openBraces.includes(brace) === true) {
      stack.push(brace)
    } else {
      const popped = stack.pop()
      popped
      brace
      oppositeBrace[brace]
      if (popped !== oppositeBrace[brace]) {
        return false
      }
    }
  }

  return stack.length === 0
}

validBraces('[(])') === false
validBraces('()))') === false
validBraces('()') === true
validBraces('[]') === true
validBraces('{}') === true
validBraces('(){}[]') === true
validBraces('([{}])') === true
validBraces('(}') === false
validBraces('[(])') === false
validBraces('({})[({})]') === true
validBraces('(})') === false
validBraces('(({{[[]]}}))') === true
validBraces('{}({})[]') === true
validBraces(')(}{][') === false
validBraces('())({}}{()][][') === false
validBraces('(((({{') === false
validBraces('}}]]))}])') === false
