// [JS][6kyu] All Star Code Challenge #23
// all-star-code-challenge-23
// https://www.codewars.com/kata/5865dd726b56998ec4000185/train/javascript

const scoring = (array) => {
  return array
    .map(({ name, normKill, assist, damage, healing, streak, envKill }) => {
      return {
        name,
        score: normKill * 100 + assist * 50 + damage * 0.5 + healing + 2 ** streak + envKill * 500,
      }
    })
    .sort((a, b) => b.score - a.score)
    .map((item) => item.name)
}

const player1 = {
  name: 'JuanPablo',
  normKill: 5,
  assist: 12,
  damage: 3200,
  healing: 0,
  streak: 4,
  envKill: 1,
}
const player2 = {
  name: 'ProfX',
  normKill: 2,
  assist: 14,
  damage: 600,
  healing: 1500,
  streak: 0,
  envKill: 0,
}
scoring([player1, player2])
