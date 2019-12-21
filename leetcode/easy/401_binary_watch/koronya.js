// https://leetcode.com/problems/binary-watch
// Runtime: 60 ms, faster than 45.51% of JavaScript online submissions for Binary Watch.
// Memory Usage: 37.3 MB, less than 100.00% of JavaScript online submissions for Binary Watch.

const readBinaryWatch = num => {
  const arr = ['h1', 'h2', 'h4', 'h8', 'm1', 'm2', 'm4', 'm8', 'm16', 'm32']
  const resultArr = []
  const dfs = (totalArr, candidateArr, n) => {
    if (n > num) {
      return
    }
    
    if (n === num) {
      let sumOfHour = 0
      let sumOfMinute = 0
      candidateArr.map(item => {
        const time = Number(item.slice(1))
        if (item.startsWith('h')) {
          sumOfHour += time
        } else {
          sumOfMinute += time
        }
      })

      if (sumOfHour < 12 && sumOfMinute < 60) {
        resultArr.push(`${sumOfHour}:${String(sumOfMinute).padStart(2, '0')}`)
      }
    }

    const totalArrLen = totalArr.length
    for (let i = 0; i < totalArrLen; i += 1) {
      const totalArrClone = [...totalArr]
      const candidateArrClone = [...candidateArr]
      const item = totalArrClone[i]
      totalArrClone.splice(0, i + 1)
      candidateArrClone.push(item)
      dfs(totalArrClone, candidateArrClone, n + 1)
    }
  }

  dfs([...arr], [], 0)

  return resultArr//?
}
