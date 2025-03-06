// [JS][7kyu] Character Concatenation
// character-concatenation
// https://www.codewars.com/kata/55147ff29cd40b43c600058b/train/javascript

const charConcat = (string) => {
  const stringLen = string.length
  const str = stringLen % 2 === 0 ? string : `${string.substring(0, stringLen / 2)}${string.substring(stringLen / 2 + 1)}`
  const strLen = str.length
  let result = ''
  for (let i = 0, limit = strLen / 2; i < limit; i += 1) {
    result += `${str[i]}${str[strLen - i - 1]}${i + 1}`
  }
  return result
}

charConcat('abc def') === 'af1be2cd3'
charConcat('CodeWars') === 'Cs1or2da3eW4'
