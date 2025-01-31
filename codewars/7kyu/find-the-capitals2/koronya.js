// [JS][7kyu] Find the Capitals
// find-the-capitals2
// https://www.codewars.com/kata/53573877d5493b4d6e00050c/train/javascript

const capital = (capitals) => capitals.map((capital) => `The capital of ${capital.state || capital.country} is ${capital.capital}`)

const mixed_capitals = [
  { state: 'Maine', capital: 'Augusta' },
  { country: 'Spain', capital: 'Madrid' },
]

capital(mixed_capitals)
