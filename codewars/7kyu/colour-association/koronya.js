// [JS][7kyu] Colour Association
// colour-association
// https://www.codewars.com/kata/56d6b7e43e8186c228000637/train/javascript

const colourAssociation = (array) => array.map(([color, association]) => ({ [color]: association }))

colourAssociation([
  ['white', 'goodness'],
  ['blue', 'tranquility'],
])
colourAssociation([
  ['red', 'energy'],
  ['yellow', 'creativity'],
  ['brown', 'friendly'],
  ['green', 'growth'],
])
