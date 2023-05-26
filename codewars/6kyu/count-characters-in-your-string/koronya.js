// [JS][6kyu] Count characters in your string
// count-characters-in-your-string
// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

const count = (string) => {
  const result = {}
  for (const s of string) {
    if (!result[s]) {
      result[s] = 1
    } else {
      result[s] += 1
    }
  }
  return result
}

count('aba')
