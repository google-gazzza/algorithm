// [JS][7kyu] Alphabet war
// alphabet-war
// https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript

const scoreObj = {
  w: 4,
  p: 3,
  b: 2,
  s: 1,
  m: -4,
  q: -3,
  d: -2,
  z: -1,
}

const alphabetWar = (fight) => {
  const score = fight.split('').reduce((acc, cur) => acc + (scoreObj[cur] || 0), 0)
  if (score > 0) {
    return 'Left side wins!'
  }
  if (score < 0) {
    return 'Right side wins!'
  }
  return "Let's fight again!"
}

alphabetWar('z')
alphabetWar('zdqmwpbs')
alphabetWar('zzzzs')
alphabetWar('wwwwww')
alphabetWar('wsedpey')
