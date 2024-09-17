// [JS][7kyu] The Office II - Boredom Score
// the-office-ii-boredom-score
// https://www.codewars.com/kata/57ed4cef7b45ef8774000014/train/javascript

const scoreObj = {
  accounts: 1,
  finance: 2,
  canteen: 10,
  regulation: 3,
  trading: 6,
  change: 6,
  IS: 8,
  retail: 5,
  cleaning: 4,
  'pissing about': 25,
}

const boredom = (staff) => {
  const score = Object.values(staff).reduce((acc, cur) => {
    return acc + scoreObj[cur]
  }, 0)

  return score <= 80 ? 'kill me now' : score < 100 ? 'i can handle this' : 'party time!!'
}

boredom({
  tim: 'change',
  jim: 'accounts',
  randy: 'canteen',
  sandy: 'change',
  andy: 'change',
  katie: 'IS',
  laura: 'change',
  saajid: 'IS',
  alex: 'trading',
  john: 'accounts',
  mr: 'finance',
}) === 'kill me now'
boredom({
  tim: 'IS',
  jim: 'finance',
  randy: 'pissing about',
  sandy: 'cleaning',
  andy: 'cleaning',
  katie: 'cleaning',
  laura: 'pissing about',
  saajid: 'regulation',
  alex: 'regulation',
  john: 'accounts',
  mr: 'canteen',
}) === 'i can handle this'
boredom({
  tim: 'accounts',
  jim: 'accounts',
  randy: 'pissing about',
  sandy: 'finance',
  andy: 'change',
  katie: 'IS',
  laura: 'IS',
  saajid: 'canteen',
  alex: 'pissing about',
  john: 'retail',
  mr: 'pissing about',
}) === 'party time!!'
