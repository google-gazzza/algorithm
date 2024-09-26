// [JS][6kyu] Alphabet war - airstrike - letters massacre
// alphabet-war-airstrike-letters-massacre
// https://www.codewars.com/kata/5938f5b606c3033f4700015a/train/javascript

const scoreMap = new Map()
scoreMap.set('w', -4)
scoreMap.set('p', -3)
scoreMap.set('b', -2)
scoreMap.set('s', -1)
scoreMap.set('m', 4)
scoreMap.set('q', 3)
scoreMap.set('d', 2)
scoreMap.set('z', 1)

const alphabetWar = (fight) => {
  const arr = fight.split('')
  const arrLen = arr.length
  const invalidSet = new Set()
  for (let i = 0; i < arrLen; i += 1 || 0) {
    const cur = arr[i]
    if (cur === '*') {
      if (i !== 0) {
        invalidSet.add(i - 1)
      }
      invalidSet.add(i)
      if (i !== arrLen - 1) {
        invalidSet.add(i + 1)
      }
    }
  }
  const score = arr.reduce((acc, cur, idx) => {
    if (invalidSet.has(idx)) {
      return acc
    }
    return acc + (scoreMap.get(cur) || 0)
  }, 0)

  if (score > 0) {
    return 'Right side wins!'
  }
  if (score < 0) {
    return 'Left side wins!'
  }
  return `Let's fight again!`
}

alphabetWar('z') === 'Right side wins!'
alphabetWar('****') === "Let's fight again!"
alphabetWar('z*dq*mw*pb*s') === "Let's fight again!"
alphabetWar('zdqmwpbs') === "Let's fight again!"
alphabetWar('zz*zzs') === 'Right side wins!'
alphabetWar('sz**z**zs') === 'Left side wins!'
alphabetWar('z*z*z*zs') === 'Left side wins!'
alphabetWar('*wwwwww*z*') === 'Left side wins!'
alphabetWar('p**i*uy*')
alphabetWar('*mhh*wwu*lp')
alphabetWar('hwp')
