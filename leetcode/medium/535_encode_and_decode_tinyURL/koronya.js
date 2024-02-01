// https://leetcode.com/problems/encode-and-decode-tinyurl
// Runtime: 68 ms, faster than 63.45% of JavaScript online submissions for Encode and Decode TinyURL.
// Memory Usage: 36.2 MB, less than 27.27% of JavaScript online submissions for Encode and Decode TinyURL.

const dbMap = new Map()
const TINY_BASE_URL = 'http://tinyurl.com/'
const KEYCODE_OF_A = 'A'.charCodeAt()
const LENGTH_OF_UNNECESSARY = 'a'.charCodeAt() - 'Z'.charCodeAt()
const LENGTH_OF_ALPHABET = 'z'.charCodeAt() - 'a'.charCodeAt() + 1

const numMapper = num => {
  const NUM_BORDER = 10
  if (num < NUM_BORDER) {
    return String(num)
  }
  const diff = num - NUM_BORDER
  if (0 <= diff && diff <= LENGTH_OF_ALPHABET) {
    return String.fromCharCode(diff + KEYCODE_OF_A)
  }
  return String.fromCharCode(diff + KEYCODE_OF_A + LENGTH_OF_UNNECESSARY)
}

const getEncryptString = num => {
  const DIVIDER = 62
  const base10Arr = []
  while ((num / DIVIDER) >= 1) {
    base10Arr.push(num % DIVIDER)
    num = Math.floor(num / DIVIDER)
  }
  base10Arr.push(num)
  const base62Arr = base10Arr.map(base10 => numMapper(base10))
  return base62Arr.reduceRight((acc, cur) => acc + cur, '')
}

const getUniqueEncryptString = str62 => {
  let key = str62
  while (dbMap.has(key)) {
    const randomNumber = Math.floor(Math.random() * 62) + 1
    const randomStr = getEncryptString(randomNumber)
    key = randomStr + key
  }
  return key
}

const encode = longUrl => {
  const longUrlLen = longUrl.length
  const charCodeOfStart = '!'.charCodeAt()
  let count = 0
  for (let i = 0; i < longUrlLen; i = i + 1 | 0) {
    count += longUrl[i].charCodeAt() - charCodeOfStart
  }
  let string62 = getEncryptString(count)
  if (!dbMap.has(string62)) {
    dbMap.set(string62, longUrl)
  } else {
    if (dbMap.get(string62) !== longUrl) {
      string62 = getUniqueEncryptString(string62)
      dbMap.set(string62, longUrl)
    }
  }
  return `${TINY_BASE_URL}${string62}`
}

const decode = shortUrl => dbMap.get(shortUrl.split(TINY_BASE_URL)[1])
