// [JS][6kyu] Reverse Vowels In A String
// reverse-vowels-in-a-string
// https://www.codewars.com/kata/585db3e8eec141ce9a00008f/train/javascript

const VOWEL_LIST = ['a', 'e', 'i', 'o', 'u']

const reverseVowels = (str) => {
  const vowels = []
  str.split('').forEach((char) => {
    if (VOWEL_LIST.includes(char.toLowerCase())) {
      vowels.push(char)
    }
  })

  return str
    .split('')
    .map((char) => (VOWEL_LIST.includes(char.toLowerCase()) ? vowels.pop() : char))
    .join('')
}

reverseVowels('Hello!') === 'Holle!'
reverseVowels('Tomatoes') === 'Temotaos'
reverseVowels('Reverse Vowels In A String') === 'RivArsI Vewols en e Streng'
