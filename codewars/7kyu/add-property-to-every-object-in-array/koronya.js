// [JS][7kyu] Add property to every object in array
// add-property-to-every-object-in-array
// https://www.codewars.com/kata/54e8c3e89e2ae6f4900005a1/train/javascript

var questions = [
  {
    question: "What's the currency of the USA?",
    choices: ['US dollar', 'Ruble', 'Horses', 'Gold'],
    corAnswer: 0,
  },
  {
    question: 'Where was the American Declaration of Independence signed?',
    choices: ['Philadelphia', 'At the bottom', "Frankie's Pub", 'China'],
    corAnswer: 0,
  },
]

questions = questions.map((item) => ({ ...item, usersAnswer: null }))
