// [JS][7kyu] Find Your Villain Name
// find-your-villain-name
// https://www.codewars.com/kata/536c00e21da4dc0a0700128b/train/javascript

const getVillainName = (birthday) => {
  const m = ['Evil', 'Vile', 'Cruel', 'Trashy', 'Despicable', 'Embarrassing', 'Disreputable', 'Atrocious', 'Twirling', 'Orange', 'Terrifying', 'Awkward']
  const d = ['Mustache', 'Pickle', 'Hood Ornament', 'Raisin', 'Recycling Bin', 'Potato', 'Tomato', 'House Cat', 'Teaspoon', 'Laundry Basket']
  const month = birthday.getMonth()
  const date = birthday.getDate()
  return `The ${m[month]} ${d[date % 10]}`
}

getVillainName(new Date('May 3')) === 'The Despicable Raisin'
getVillainName(new Date('April 21')) === 'The Trashy Pickle'
getVillainName(new Date('December 17')) === 'The Awkward House Cat'
