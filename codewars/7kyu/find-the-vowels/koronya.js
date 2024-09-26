// [JS][7kyu] Find the vowels
// find-the-vowels
// https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript

const VOWEL_LIST = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y']

const vowelIndices = (word) => {
  const result = []
  word.split('').forEach((item, index) => {
    if (VOWEL_LIST.includes(item) === true) {
      result.push(index + 1)
    }
  })

  return result
}

vowelIndices('mmm')
vowelIndices('apple')
vowelIndices('super')
vowelIndices('dBqtGCAcUGvYdVQzuwSXH')
