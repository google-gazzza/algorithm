// [JS][6kyu] Three added Characters
// three-added-characters
// https://www.codewars.com/kata/5971b219d5db74843a000052/train/javascript

const getMap = (str) => {
  const map = new Map()
  for (const char of str) {
    const count = map.get(char) || 0
    map.set(char, count + 1)
  }
  return map
}

const addedChar = (s1, s2) => {
  const map1 = getMap(s1)
  const map2 = getMap(s2)
  for (const [key, value] of map2) {
    const count1 = map1.get(key) || 0
    if (count1 !== value) {
      return key
    }
  }
}

const string1 = 'hello'
const string2 = 'aaahello'

const string3 = 'abcde'
const string4 = '2db2a2ec'

const string5 = 'aabbcc'
const string6 = 'aacccbbcc'

addedChar(string1, string2)
addedChar(string3, string4)
addedChar(string5, string6)
