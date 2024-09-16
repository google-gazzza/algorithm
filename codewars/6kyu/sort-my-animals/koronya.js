// [JS][6kyu] Sort My Animals
// sort-my-animals
// https://www.codewars.com/kata/58ff1c8b13b001a5a50005b4/train/javascript

const sortAnimal = (animals) => [...animals].sort((a, b) => a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name))

const sortAnimal2 = (animals) => {
  const result = [...animals].sort((a, b) => {
    if (a.numberOfLegs === b.numberOfLegs) {
      return a.name.localeCompare(b.name)
    }
    return a.numberOfLegs - b.numberOfLegs
  })
  return result
}

const animals = [
  { name: 'Cat', numberOfLegs: 4 },
  { name: 'Snake', numberOfLegs: 0 },
  { name: 'Dog', numberOfLegs: 4 },
  { name: 'Pig', numberOfLegs: 4 },
  { name: 'Human', numberOfLegs: 2 },
  { name: 'Bird', numberOfLegs: 2 },
]

sortAnimal(animals)
