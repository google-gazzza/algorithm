// [JS][6kyu] Turn String Input into Hash
// https://www.codewars.com/kata/52180ce6f626d55cf8000071/train/javascript
// turn-string-input-into-hash

const strToHash = (str) => {
  const hash = {}
  str.split(', ').forEach((pair) => {
    if (pair) {
      const [key, value] = pair.split('=')
      hash[key] = parseInt(value, 10)
    }
  })
  return hash
}

strToHash('a=1, b=2, c=3, d=4')
strToHash('')
