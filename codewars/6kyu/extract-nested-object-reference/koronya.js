// [JS][6kyu] Extract Nested Object Reference
// extract-nested-object-reference
// https://www.codewars.com/kata/527a6e602a7db3456e000a2b/train/javascript

Object.prototype.hash = function (string) {
  const arr = string.split('.')
  let acc = this
  const valid = arr.every((item) => {
    if (acc[item]) {
      acc = acc[item]
      return true
    }
    return false
  })

  return valid ? acc : undefined
}

const obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.',
      },
    },
  },
}

obj.hash('person.name') // 'joe'
obj.hash('person.history.bio') // { funFact: 'I like fishing.' }
obj.hash('person.history.homeStreet') // undefined
obj.hash('person.animal.pet.needNoseAntEater') // undefined
