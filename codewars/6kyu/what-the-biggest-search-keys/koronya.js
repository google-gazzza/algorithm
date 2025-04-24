// [JS][6kyu] What The Biggest Search Keys?
// what-the-biggest-search-keys
// https://www.codewars.com/kata/58ac1abdff4e78738f000805/train/javascript

function theBiggestSearchKeys() {
  const args = Array.from(arguments)
  if (args.length === 0) {
    return "''"
  }
  const maxLength = Math.max(...args.map((key) => key.length))
  const maxKeys = args.filter((key) => key.length === maxLength)
  maxKeys.sort()
  return `'${maxKeys.join("', '")}'`
}

// theBiggestSearchKeys('key1', 'key22', 'key333')
// theBiggestSearchKeys('key1', 'key22', 'key333') === "'key333'"
// theBiggestSearchKeys('coding', 'sorting', 'tryruby') === "'sorting', 'tryruby'"
// theBiggestSearchKeys('small keyword', 'how to coding?', 'very nice kata', 'a lot of keys', 'I like Ruby!!!') ===
//   "'I like Ruby!!!', 'how to coding?', 'very nice kata'"
// theBiggestSearchKeys('pippi') === "'pippi'"
// theBiggestSearchKeys() === "''"
