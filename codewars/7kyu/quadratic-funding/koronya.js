// [JS][7kyu] Quadratic Funding
// quadratic-funding
// https://www.codewars.com/kata/670550a8fc404105769b06be/train/javascript

const qf = (donations, pool) => {
  const projectWeightList = donations.map((donation) => {
    const sumOfSquareRoots = donation.reduce((acc, curr) => acc + Math.sqrt(curr), 0)
    return Math.round(sumOfSquareRoots ** 2)
  })
  const totalWeight = projectWeightList.reduce((acc, curr) => acc + curr, 0)
  return projectWeightList.map((donation) => Math.round((donation / totalWeight) * pool))
}

qf(
  [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // donations for project A
    [10], // donations for project B
  ],
  20,
)

qf(
  [
    Array(5).fill(200), // donations for project A
    Array(2).fill(500), // donations for project B
    Array(20).fill(50), // donations for project C
  ],
  10000,
)
