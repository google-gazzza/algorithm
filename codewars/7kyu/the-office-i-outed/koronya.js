// [JS][7kyu] The Office I - Outed
// the-office-i-outed
// https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1/train/javascript

const outed = (meet, boss) => {
  const meetArr = Object.entries(meet)
  const meetArrLen = meetArr.length
  meetArr.reduce((acc, [key, value]) => (key === boss ? acc + value * 2 : acc + value), 0)
  return meetArr.reduce((acc, [key, value]) => (key === boss ? acc + value * 2 : acc + value), 0) / meetArrLen <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
}

outed({ tim: 0, jim: 2, randy: 0, sandy: 7, andy: 0, katie: 5, laura: 1, saajid: 2, alex: 3, john: 2, mr: 0 }, 'laura') === 'Get Out Now!'
outed({ tim: 1, jim: 3, randy: 9, sandy: 6, andy: 7, katie: 6, laura: 9, saajid: 9, alex: 9, john: 9, mr: 8 }, 'katie') === 'Nice Work Champ!'
outed({ tim: 2, jim: 4, randy: 0, sandy: 5, andy: 8, katie: 6, laura: 2, saajid: 2, alex: 3, john: 2, mr: 8 }, 'john') === 'Get Out Now!'
outed({ tim: 2, jim: 8, randy: 4, sandy: 8, andy: 9, katie: 0, laura: 6, saajid: 9, alex: 3, john: 8, mr: 6 }, 'tim')
