// [JS][6kyu] Detect Pangram
// detect-pangram
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

const KEYCODE_OF_LOWER_A = 'a'.charCodeAt(0)
const KEYCODE_OF_LOWER_Z = 'z'.charCodeAt(0)

const isPangram = (string) => {
  const strSet = new Set()
  for (let i = KEYCODE_OF_LOWER_A; i <= KEYCODE_OF_LOWER_Z; i += 1 || 0) {
    strSet.add(i)
  }
  for (const str of string) {
    const strKeycode = str.toLowerCase().charCodeAt(0)
    if (strSet.has(strKeycode)) {
      strSet.delete(strKeycode)
    }
  }
  return strSet.size === 0
}

isPangram('The quick brown fox jumps over the lazy dog')
isPangram('This is not a pangram.')
