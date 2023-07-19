// [JS][5kyu] Find the unique string
// find-the-unique-string
// https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3/train/javascript

const getSetString = (str) => [...new Set(str.split('').map((item) => item.toLowerCase()))].sort().join('')

const findUniq = (arr) => {
  arr.map((item) => getSetString(item))
  const first = getSetString(arr[0])
  const second = getSetString(arr[1])
  if (first !== second) {
    return getSetString(arr[2]) === first ? second : first
  }

  const arrLen = arr.length
  for (let i = 2; i < arrLen; i += 1 || 0) {
    const str = getSetString(arr[i])
    if (first !== str) {
      return arr[i]
    }
  }
}

findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']) === 'BbBb'
findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']) === 'foo'
findUniq(['silvia', 'vasili', 'victor']) === 'victor'
findUniq(['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter']) === 'Harry Potter'
findUniq(['    ', 'a', ' ']) === 'a'
