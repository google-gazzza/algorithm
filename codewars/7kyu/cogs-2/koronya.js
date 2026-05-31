// [JS][7kyu] Cogs 2
// cogs-2
// https://www.codewars.com/kata/59e72bdcfc3c4974190000d9/train/javascript

const cogRpm = (cogs, n) => {
  const cogsLength = cogs.length
  const startRpm = cogs[n] / cogs[0]
  const startDirection = n % 2 === 0 ? 1 : -1
  const endRpm = cogs[n] / cogs[cogsLength - 1]
  const endDirection = startDirection * (-1) ** (cogsLength - 1)

  return [startRpm * startDirection, endRpm * endDirection]
}

cogRpm([100, 50, 25], 1)
