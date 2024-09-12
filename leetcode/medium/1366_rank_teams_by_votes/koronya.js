// [Medium] 1366. Rank Teams by Votes
// 1366_rank_teams_by_votes

// https://leetcode.com/problems/rank-teams-by-votes/
// Runtime: 84 ms, faster than 94.44% of JavaScript online submissions for Rank Teams by Votes.
// Memory Usage: 39.3 MB, less than 59.26% of JavaScript online submissions for Rank Teams by Votes.
const CHAR_CODE_AT_A = 'A'.charCodeAt()
const LENGTH_OF_ALPHABET = 26
const getIndexOfArr = str => str.charCodeAt() - CHAR_CODE_AT_A

const rankTeams = votes => {
  const votesLen = votes.length
  const ranksLen = votes[0].length
  const scoreArr = Array.from({length: LENGTH_OF_ALPHABET}, () => 0)
  for (let rankIndex = 0; rankIndex < ranksLen; rankIndex = rankIndex + 1 | 0) {
    for (let voteIndex = 0; voteIndex < votesLen; voteIndex = voteIndex + 1 | 0) {
      const score = votesLen ** (ranksLen - rankIndex - 1) * (ranksLen - rankIndex)
      const str = votes[voteIndex][rankIndex]
      scoreArr[getIndexOfArr(str)] += score
    }
  }
  
  return scoreArr
    .map((score, index) => ({ score, index }))
    .filter(({score}) => score > 0)
    .sort((a, b) => b.score - a.score)
    .reduce((acc, cur) => acc + String.fromCharCode(CHAR_CODE_AT_A + cur.index), '')
}
