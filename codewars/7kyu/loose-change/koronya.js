// [JS][7kyu] Loose Change!
// loose-change
// https://www.codewars.com/kata/57e1857d333d8e0f76002169/train/javascript

const VALUE_OBJECT = {
  penny: 0.01,
  nickel: 0.05,
  dime: 0.1,
  quarter: 0.25,
  dollar: 1.0,
}

const getValue = (coin) => VALUE_OBJECT[coin] || 0

const changeCount = (change) => {
  const value = change.split(' ').reduce((acc, cur) => acc + getValue(cur), 0)
  const [first, second] = value.toFixed(2).split('.')
  return `$${first}${second ? '.' + second : ''}`
}

changeCount('dime penny dollar')
changeCount('dime penny dollar') === '$1.11'
changeCount('dime penny nickel') === '$0.16'
changeCount('quarter quarter') === '$0.50'
changeCount('dollar penny dollar') === '$2.01'
changeCount('dollar dollar dollar dollar dollar dollar dollar dollar dollar dollar penny') === '$10.01'
