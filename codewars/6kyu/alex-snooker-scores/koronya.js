// [JS][6kyu] Alex & snooker: scores.
// alex-snooker-scores
// https://www.codewars.com/kata/58b28e5830473070e5000007/train/javascript

const modifyScore = (score) => (score.includes('(') ? parseInt(score.split('(')[0]) : parseInt(score, 10))

const frame = (score) => {
  const scoreResult = score.split('; ').reduce(
    (acc, curr) => {
      const scoreA = curr.split('-')[0]
      const scoreB = curr.split('-')[1]
      return modifyScore(scoreA) > modifyScore(scoreB) ? { ...acc, winA: acc.winA + 1 } : { ...acc, winB: acc.winB + 1 }
    },
    { winA: 0, winB: 0 },
  )

  return [scoreResult.winA, scoreResult.winB]
}

// var score =
//   '24-79(72); 16-101(53); 86(58)-27; 31-90(74); 0-115(115); 67-40; 61-21; 81(55)-23; 51-14; 124(56,68)-4; 67-12; 108(85)-15; 1-117(117); 1-92(92); 130(112)-0; 1-106(53); 59-39'
// frame(score)

// const score2 = '29-74; 1-111(111); 83(51)-1; 68-13; 7-74(54); 81(81)-0; 112(104)-0; 8-70; 74(67)-67(67); 0-77(77); 69-44'
// frame(score2)

// const score3 = '111-35; 29-41; 116(105)-4; 45-79(50); 75-54(50); 30-34; 100(78)-23; 112-10; 59-34; 55(51)-52'
// frame(score3)
