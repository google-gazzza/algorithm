// [JS][6kyu] TV channels
// tv-channels
// https://www.codewars.com/kata/5836dce6966f8d1d43000007/train/javascript

const redarr = (arr) => {
  return (
    [...new Set(arr)]
      // .sort((a, b) => a.localeCompare(b))  -> 이렇게 하면 안됨
      .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
      .reduce((acc, cur, index) => {
        acc[String(index)] = cur
        return acc
      }, {})
  )
}

// redarr(['BBC1', 'BBC2', 'MTV'])
// redarr(['BBC1', 'BBC1', 'BBC2', 'MTV'])
// redarr(['BBC2', 'BBC1', 'BBC1', 'MTV'])
// redarr(['Sky Sport', 'BBC1', 'CNBC', 'Film 5', 'Channel 5', 'CNBC', 'Film 4', 'SyFy', 'National Geographic', 'Channel 4', 'Sky Sport', 'Drama', 'Bloomberg TV'])
