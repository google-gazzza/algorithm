// [JS][6kyu] Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer
// coding-meetup-7-higher-order-functions-series-find-the-most-senior-developer
// https://www.codewars.com/kata/582887f7d04efdaae3000090/train/javascript

const findSenior = (list) => {
  const maxAge = Math.max(...list.map((item) => item.age))
  return list.filter((item) => item.age === maxAge)
}

const list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]

findSenior(list1)
