// autocomplete-yay
// Autocomplete! Yay!
// difficulty: 6kyu
// https://www.codewars.com/kata/5389864ec72ce03383000484

const autocomplete = (input, dictionary) => {
  const keyword = input.match(/[a-z]/ig).join('').toLowerCase();
  return dictionary.filter((e) => e.toLowerCase().startsWith(keyword)).slice(0, 5);
};


console.log(autocomplete('ai', ['airplane', 'airport', 'apple', 'ball']), ['airplane', 'airport']);
