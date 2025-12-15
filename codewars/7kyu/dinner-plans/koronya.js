// [JS][7kyu] Dinner Plans
// dinner-plans
// https://www.codewars.com/kata/57212c55b6fa235edc0002a2/train/javascript

const commonGround = (s1, s2) => {
  const words1 = s1.split(' ')
  const words2 = s2.split(' ')
  const set1 = new Set(words1)
  const added = new Set()
  const result = []

  for (const word of words2) {
    if (set1.has(word) && !added.has(word)) {
      result.push(word)
      added.add(word)
    }
  }

  return result.length === 0 ? 'death' : result.join(' ')
}

// commonGround('eat chicken', 'eat chicken and rice') === 'eat chicken'
// commonGround('eat a burger and drink a coke', 'drink a coke') === 'drink a coke'
// commonGround('i like turtles', 'what are you talking about') === 'death'
