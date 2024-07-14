// [JS][5kyu] Alphabet war - Wo lo loooooo priests join the war
// alphabet-war-wo-lo-loooooo-priests-join-the-war
// https://www.codewars.com/kata/59473c0a952ac9b463000064/train/javascript

const scoreMap = new Map([
  ['w', 4],
  ['p', 3],
  ['b', 2],
  ['s', 1],
  ['m', -4],
  ['q', -3],
  ['d', -2],
  ['z', -1],
])

const reverseMap = new Map([...scoreMap].map(([key, value]) => [value, key]))

const convertStr = (str, adjacentArr = []) => {
  if (scoreMap.has(str) === false) {
    return str
  }
  const tCount = adjacentArr.filter((item) => item === 't').length
  const jCount = adjacentArr.filter((item) => item === 'j').length
  if (tCount === 1 && jCount === 1) {
    return str
  }
  const score = scoreMap.get(str)
  if (tCount > 0) {
    if (score < 0) {
      return reverseMap.get(-1 * score)
    }
  }
  if (jCount > 0) {
    if (score > 0) {
      return reverseMap.get(-1 * score)
    }
  }

  return str
}

const alphabetWar = (fight) => {
  const fightLen = fight.length
  const fightArr = fight.split('')
  for (let i = 0; i < fightLen; i += 1 || 0) {
    const prev = fightArr[i - 1] || ''
    const cur = fightArr[i]
    const next = fightArr[i + 1] || ''
    fightArr[i] = convertStr(cur, [prev, next])
  }
  const score = fightArr.reduce((acc, cur) => acc + (scoreMap.get(cur) || 0), 0)

  return score > 0 ? 'Left side wins!' : score < 0 ? 'Right side wins!' : `Let's fight again!`
}

alphabetWar('z') === 'Right side wins!'
alphabetWar('tz') === 'Left side wins!'
alphabetWar('jz') === 'Right side wins!'
alphabetWar('zt') === 'Left side wins!'
alphabetWar('sj') === 'Right side wins!'
alphabetWar('azt') === 'Left side wins!'
alphabetWar('tzj') === 'Right side wins!'
alphabetWar('jbdt') === "Let's fight again!"
alphabetWar('wololooooo') === 'Left side wins!'
alphabetWar('zdqmwpbs') === "Let's fight again!"
alphabetWar('ztztztzs') === 'Left side wins!'
