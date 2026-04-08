// [JS][7kyu] getNames()
// get-names
// https://www.codewars.com/kata/514a677421607afc99000002/train/javascript

const getNames = (data) => data.map((item) => item.name)

const data = [
  { name: 'Joe', age: 20 },
  { name: 'Bill', age: 30 },
  { name: 'Kate', age: 23 },
]
getNames(data)
