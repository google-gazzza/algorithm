// [JS][7kyu] Help the Fruit Guy
// help-the-fruit-guy
// https://www.codewars.com/kata/557af4c6169ac832300000ba/train/javascript

const removeRotten = (bagOfFruits) => {
  if (!bagOfFruits) {
    return []
  }
  return bagOfFruits.map((fruit) => fruit.replace('rotten', '').toLowerCase())
}

// removeRotten(['apple', 'rottenBanana', 'apple'])

removeRotten(['apple', 'banana', 'kiwi', 'melone', 'orange'])
