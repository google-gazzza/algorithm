// [JS][6kyu] Autocomplete! Yay!
// autocomplete-yay
// https://www.codewars.com/kata/5389864ec72ce03383000484/train/javascript

const cleanseString = (str) => str.replace(/[^a-zA-Z]/g, '')

const autocomplete = (input, dictionary) => {
  const cleanseInput = cleanseString(input).toLowerCase()
  return dictionary.filter((item) => item.slice(0, cleanseInput.length).toLowerCase() === cleanseInput).slice(0, 5)
}

autocomplete('ai', ['airplane', 'airport', 'apple', 'ball'])
autocomplete('a', ['airplane', 'airport', 'apple', 'ball'])
autocomplete('ab*c', ['airplane', 'airport', 'Apple', 'ball', 'ab*&cd'])
autocomplete('ab1', ['airplane', 'airport', 'Apple', 'ball', 'abcd'])
autocomplete('ai', ['airplane', 'airport', 'apple', 'ball', 'airplane', 'airplane', 'airplane', 'airplane', 'airplane'])
